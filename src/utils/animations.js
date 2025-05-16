import gsap from "gsap";

// Animation pour le Navbar
export const animateNavbar = (navbarRef) => {
  gsap.fromTo(
    navbarRef.current,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
  );
};

// Animation pour le Footer
export const animateFooter = (footerRef) => {
  gsap.fromTo(
    footerRef.current,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
  );
};

// Animation pour les éléments au scroll
export const animateOnScroll = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      delay,
      ease: "power2.out",
    }
  );
};
