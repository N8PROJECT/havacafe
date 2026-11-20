"use client";

import { Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/hava";
import { ease } from "./motion";

export function Wordmark() {
  return <span className="wordmark">HAVA<span>RESTAURANT & CAFE</span></span>;
}

export function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 150, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="header">
      <div className="shell nav-shell">
        <a href="#top" aria-label="HAVA home" onClick={() => setOpen(false)}><Wordmark /></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="button button-outline nav-book" href="#reserve">Book a table</a>
        <button ref={button} type="button" className="mobile-toggle" aria-expanded={isOpen}
          aria-controls="mobile-navigation" onClick={() => setOpen(!isOpen)}>
          {isOpen ? <X aria-hidden size={20} /> : <MenuIcon aria-hidden size={20} />}
          <span>{isOpen ? "Close" : "Menu"}</span>
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"
            initial={reduced ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -12 }} transition={{ duration: 0.27, ease }}>
            {[...navigation, { label: "Book a table", id: "reserve" }].map(({ id, label }) =>
              <a key={id} href={`#${id}`} onClick={() => {
                setOpen(false);
                document.getElementById(id)?.focus({ preventScroll: true });
              }}>{label}</a>)}
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div className="progress" aria-hidden style={{ scaleX: reduced ? scrollYProgress : progress }} />
    </header>
  );
}
