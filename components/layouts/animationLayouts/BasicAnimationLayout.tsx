"use client";

import React, { useRef, useLayoutEffect, forwardRef } from "react";
import { gsap } from "gsap";

const BasicAnimationLayout = forwardRef(function Input(props: any, ref: any) {
  // Animation =======================================================================================================
  const rootRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current!.childNodes,
        { x: -10, opacity: 0 },
        {
          duration: 1,
          x: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 0.4,
          ease: "elastic.out(1, 0.75)",
        }
      );

      return () => ctx.revert();
    }, rootRef);
  }, []);
  // =================================================================================================================

  return (
    <props.Tag className={props.style} ref={rootRef} id={props.id}>
      {props.children}
    </props.Tag>
  );
});

export default BasicAnimationLayout;
