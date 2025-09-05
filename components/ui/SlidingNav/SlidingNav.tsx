// SlidingNav.tsx
import React from "react";

interface SlidingNavProps {
  open: boolean;
  onClose: () => void;
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  { href: "/doc", label: "Docs" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Signup" },
  { href: "/admin/dashboard", label: "Dashboard" },
];

export const SlidingNav: React.FC<SlidingNavProps> = ({ open, onClose }) => {
  // Add bounce and hover styles for nav links
  React.useEffect(() => {
    if (typeof document === "undefined") return;
    let styleTag = document.getElementById("nav-bounce-style");
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "nav-bounce-style";
      styleTag.innerHTML = `
        @keyframes navPopOut {
          0% {
            transform: scale(1) translateX(0);
            color: #222;
          }
          60% {
            transform: scale(1.18) translateX(12px);
            color: red;
          }
          100% {
            transform: scale(1.12) translateX(8px);
            color: red;
          }
        }
        #nav-menu a:hover {
          color: red !important;
          animation: navPopOut 0.32s cubic-bezier(.68,-0.55,.27,1.55) forwards;
        }
      `;
      document.head.appendChild(styleTag);
    }
    return () => {
      if (styleTag) styleTag.remove();
    };
  }, []);
  React.useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const navMenu = document.getElementById("nav-menu");
      const navToggleBtn = document.getElementById("btn-nav-toggle");
      if (
        navMenu &&
        !navMenu.contains(e.target as Node) &&
        navToggleBtn &&
        !navToggleBtn.contains(e.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onClose]);

  // Accessibility: aria-expanded, aria-hidden, inert
  React.useEffect(() => {
    const navToggleBtn = document.getElementById("btn-nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    if (navToggleBtn && navMenu) {
      navToggleBtn.setAttribute("aria-expanded", String(open));
      navMenu.setAttribute("aria-hidden", String(!open));
      if (!open) {
        navMenu.setAttribute("inert", "true");
      } else {
        navMenu.removeAttribute("inert");
      }
    }
  }, [open]);

  // Close nav on internal link click
  React.useEffect(() => {
    const navMenu = document.getElementById("nav-menu");
    if (!navMenu) return;
    const links = navMenu.querySelectorAll("a[href^='#']");
    const handler = () => onClose();
    links.forEach((link) => link.addEventListener("click", handler));
    return () => links.forEach((link) => link.removeEventListener("click", handler));
  }, [open, onClose]);

  return (
    <>
      {/* Overlay to close nav on outside click */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <nav
        style={{
          containerType: "inline-size",
          position: "fixed",
          top: 0,
          right: 0,
          padding: "1rem",
          zIndex: 2100,
          width: "fit-content",
          height: "100vh",
        }}
      >
        {/* Background layers */}
        <div
          style={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: open ? "100vw" : "0vw",
            height: "100vh",
            borderRadius: "30px 0 0 30px",
            background: "red",
            transition: "width 600ms cubic-bezier(0.86, 0, 0.672, 1.003)",
            zIndex: -2,
          }}
        />
        <div
          style={{
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: open ? "33vw" : "0vw",
            height: "100vh",
            borderRadius: "30px 0 0 30px",
            background: "red",
            transition: "width 600ms cubic-bezier(0.86, 0, 0.672, 1.003)",
            zIndex: -1,
          }}
        />

        {/* Cross button */}
        {open && (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "2rem",
              zIndex: 20,
              background: "transparent",
              border: "none",
              padding: "0.5rem",
              cursor: "pointer",
            }}
          >
            {/* SVG Cross */}
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <g stroke="#222" strokeWidth="2" strokeLinecap="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </g>
            </svg>
          </button>
        )}

        {/* Slide-out nav panel */}
        <ul
          id="nav-menu"
          role="list"
          aria-labelledby="btn-nav-toggle"
          aria-hidden={!open}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            margin: 0,
            padding: 0,
            width: open ? "fit-content" : "0",
            height: "100vh",
            borderRadius: "30px 0 0 30px",
            background: "#fff",
            overflow: "hidden",
            listStyle: "none",
            transform: open ? "translateX(0)" : "translateX(100%)",
            transition: "transform 1000ms cubic-bezier(0.86, 0, 0.672, 1.003)",
            zIndex: 10,
          }}
        >
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ marginBlockStart: i === 0 ? "60px" : "0" }}>
              <a
                href={link.href}
                style={{
                  fontFamily: '"Jura", sans-serif',
                  letterSpacing: "0.05rem",
                  position: "relative",
                  display: "flex",
                  fontSize: "clamp(2rem, 2.5vw + 0.5rem, 5rem)",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  lineHeight: 1,
                  padding: "0.5rem 6rem 0.5rem 2rem",
                  textDecoration: "none",
                  color: "#222",
                  isolation: "isolate",
                  transition: "color 0.2s",
                  willChange: "transform",
                }}
                onClick={onClose}
              >
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SlidingNav;
