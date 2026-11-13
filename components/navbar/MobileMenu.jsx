"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NavLinks from "./Navlinks";
import AuthLink from "./AuthLink";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setIsOpen(false);

    if (restoreFocus) {
      buttonRef.current?.focus();
    }
  }, []);

  // Close menu when Escape is pressed
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeMenu]);

  // Close menu as soon as the user scrolls
  useEffect(() => {
    if (!isOpen) return;

    function handleScroll() {
      closeMenu();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, closeMenu]);

  return (
    <div ref={menuRef} className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="flex min-h-11 flex-col items-center justify-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edenest-green focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span
          className={`block h-px w-6 bg-foreground transition-transform ${
            isOpen ? "translate-y-[5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-foreground transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-px w-6 bg-foreground transition-transform ${
            isOpen ? "-translate-y-[5px] -rotate-45" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="fixed left-0 top-[88px] z-50 flex w-[55vw] max-w-xs flex-col gap-2 border-y border-r border-border bg-background px-6 py-6"
        >
          <NavLinks direction="column" onNavigate={() => closeMenu()} />

          <div className="mt-2 border-t border-border pt-4">
            <AuthLink
              href="/login"
              variant="text"
              onClick={() => closeMenu()}
            >
              Log In
            </AuthLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
