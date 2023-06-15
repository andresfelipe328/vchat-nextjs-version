"use client";

import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";

const RootAnimationLayout = ({ children }: { children: React.ReactNode }) => {
  // Animation =======================================================================================================
  const rootRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(rootRef.current, {
        duration: 1,
        x: 0,
        opacity: 1,
        stagger: 0.2,
        delay: 0.4,
        ease: "elastic.out(1, 0.75)",
      });

      return () => ctx.revert();
    }, rootRef);
  }, []);
  // =================================================================================================================

  return (
    <main
      className="root -translate-x-10 p-2 h-screen flex gap-1"
      ref={rootRef}
      style={{ opacity: 0 }}
    >
      {children}
    </main>
  );
};

export default RootAnimationLayout;
