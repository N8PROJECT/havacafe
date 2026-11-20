"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;
export const enter: Variants = {
  start: { y: "110%" },
  end: { y: 0, transition: { duration: 0.9, ease } }
};

export function Reveal({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, ease }}>
      {children}
    </motion.div>
  );
}

export function TactileLink({ href, children, className }: { href: string; children: ReactNode; className: string }) {
  const reduced = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 240, damping: 22 });
  const y = useSpring(useMotionValue(0), { stiffness: 240, damping: 22 });
  return (
    <motion.a href={href} className={className} style={reduced ? undefined : { x, y }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.13);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.24);
      }}
      onPointerLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.a>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-media" style={reduced ? undefined : { y, scale }}>
        <Image src="/images/hero.webp" alt="" fill sizes="100vw" preload />
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="hero-content shell" initial={reduced ? false : "start"} animate="end"
        variants={{ end: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } } }}>
        <div className="mask"><motion.p className="eyebrow hero-kicker" variants={enter}><span /> Mampang · Jakarta</motion.p></div>
        <h1 id="hero-title">
          <span className="mask"><motion.span variants={enter}>Middle Eastern</motion.span></span>
          <span className="mask"><motion.em variants={enter}>flavour.</motion.em></span>
          <span className="mask hero-west"><motion.span variants={enter}>Western delight.</motion.span></span>
        </h1>
        <div className="mask hero-action"><motion.div variants={enter}><TactileLink href="#menu" className="button button-gold">Explore the menu</TactileLink></motion.div></div>
      </motion.div>
      <div className="hero-bottom shell"><span>Authentic dining & pastry</span><span>Restaurant & cafe</span></div>
    </section>
  );
}
