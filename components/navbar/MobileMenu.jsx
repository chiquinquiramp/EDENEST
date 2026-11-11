
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

    if(restoreFocus) {
        buttonRef.current?.focus();
    }
  }, []);

  // Close menu when Escape is pressed

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
       closeMenu(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpen, closeMenu]);

  // Close menu when clicking outside

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  return (
    <div 
    ref={menuRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
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
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-6 border-t border-border bg-background px-6 py-8">
          <NavLinks direction="column" 
          onNavigate={() => closeMenu()} />

          <AuthLink
            href="/login"
            variant="text"
            onClick={() => closeMenu()}
          >
            Log In
          </AuthLink>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
