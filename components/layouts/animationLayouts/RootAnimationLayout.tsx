"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
const RootAnimationLayout = ({ children }: { children: React.ReactNode }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, { opacity: 1, duration: 0.5, autoAlpha: 0 });

      gsap.fromTo(
        rootRef.current!.childNodes,
        { opacity: 0, x: -10 },
        {
          duration: 1,
          x: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.4,
          ease: "elastic.out(1, 0.75)",
        }
      );
    }, rootRef);
  });
  return (
    <main className="p-2 h-screen flex gap-1" ref={rootRef}>
      {children}
    </main>
  );
};

export default RootAnimationLayout;
