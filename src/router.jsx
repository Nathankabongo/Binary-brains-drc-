import React, { createContext, useContext, useState, useEffect } from "react";

const RouterContext = createContext({
  currentPath: "/",
  navigate: () => {},
});

export function Router({ children }) {
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname || "/"
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handleHash);

    // Initial check if hash exists in URL
    if (window.location.hash) {
      setTimeout(handleHash, 150);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const navigate = (to) => {
    if (to !== currentPath) {
      window.history.pushState({}, "", to);
      setCurrentPath(to);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(RouterContext);
  return {
    pathname: context ? context.currentPath : window.location.pathname || "/",
    hash: typeof window !== "undefined" ? window.location.hash : "",
  };
}

export function useNavigate() {
  const context = useContext(RouterContext);
  return context ? context.navigate : (to) => { window.location.pathname = to; };
}

export function Link({ to, children, className, onClick, ...props }) {
  const context = useContext(RouterContext);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && typeof to === "string") {
      if (to.startsWith("#")) {
        e.preventDefault();
        const id = to.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState({}, "", to);
        } else {
          // If section not found on current page, go to home with hash
          window.location.href = "/" + to;
        }
      } else if (to.startsWith("/")) {
        e.preventDefault();
        if (context && context.navigate) {
          context.navigate(to);
        } else {
          window.history.pushState({}, "", to);
          window.dispatchEvent(new PopStateEvent("popstate"));
        }
      }
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}

export function Routes({ children }) {
  const context = useContext(RouterContext);
  const currentPath = context ? context.currentPath : window.location.pathname || "/";
  const childrenArray = React.Children.toArray(children);

  let match = null;
  let fallback = null;

  for (const child of childrenArray) {
    if (React.isValidElement(child)) {
      if (child.props.path === currentPath) {
        match = child.props.element;
        break;
      }
      if (child.props.path === "*") {
        fallback = child.props.element;
      }
    }
  }

  return match || fallback || null;
}

export function Route({ path, element }) {
  return null;
}

export function Navigate({ to, replace }) {
  const context = useContext(RouterContext);
  useEffect(() => {
    if (context && context.navigate) {
      context.navigate(to);
    }
  }, [to, context]);
  return null;
}
