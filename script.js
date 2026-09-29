gsap.registerPlugin(ScrollTrigger);

// ------------------------------
// 1. Intro animation
// ------------------------------
const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

intro
  .from(".topbar", { y: -30, opacity: 0, duration: 0.8 })
  .from(".eyebrow", { y: 20, opacity: 0, duration: 0.6 }, "-=0.45")
  .from(".hero h1 .line", {
    y: 80,
    opacity: 0,
    stagger: 0.16,
    duration: 1
  }, "-=0.25")
  .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.45")
  .from(".stat", {
    y: 30,
    opacity: 0,
    stagger: 0.12,
    duration: 0.6
  }, "-=0.35")
  .from(".car-stage", {
    scale: 0.72,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  }, "-=0.7")
  .from(".scroll-hint", { opacity: 0, y: 15, duration: 0.5 }, "-=0.3");

// ------------------------------
// 2. Statistics count-up
// ------------------------------
document.querySelectorAll(".stat strong").forEach((number) => {
  const target = Number(number.dataset.value);

  gsap.to(number, {
    innerText: target,
    duration: 1.4,
    delay: 1.1,
    snap: { innerText: 1 },
    ease: "power2.out"
  });
});

// ------------------------------
// 3. Main scroll-driven car
// ------------------------------
// The car does NOT autoplay.
// Its movement is controlled by page scroll progress.
const carTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.4,
    pin: false,
    onUpdate: (self) => {
      document.querySelector(".scroll-progress span").style.height =
        `${self.progress * 100}%`;
    }
  }
});

carTimeline
  .to(".hero-copy", {
    y: -130,
    opacity: 0,
    ease: "none"
  }, 0.12)
  .to(".stats", {
    y: -100,
    opacity: 0,
    ease: "none"
  }, 0.16)
  .to(".scroll-hint", {
    opacity: 0,
    ease: "none"
  }, 0.08)
  .to(".car-stage", {
    x: 260,
    y: -80,
    rotation: 8,
    scale: 0.78,
    ease: "none"
  }, 0.15)
  .to(".car-stage", {
    x: -280,
    y: 130,
    rotation: -7,
    scale: 0.60,
    ease: "none"
  }, 0.48)
  .to(".car-stage", {
    x: 80,
    y: 20,
    rotation: 3,
    scale: 0.42,
    opacity: 0.18,
    ease: "none"
  }, 0.78);

// ------------------------------
// 4. Grid parallax
// ------------------------------
gsap.to(".grid", {
  yPercent: -18,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: 2
  }
});

// ------------------------------
// 5. Orbs move with scroll
// ------------------------------
gsap.to(".orb-one", {
  x: 180,
  y: -120,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: 2
  }
});

gsap.to(".orb-two", {
  x: -160,
  y: 100,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom bottom",
    scrub: 2
  }
});

// ------------------------------
// 6. Services reveal
// ------------------------------
gsap.from(".service-card", {
  y: 80,
  opacity: 0,
  stagger: 0.12,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".service-grid",
    start: "top 78%",
    toggleActions: "play none none reverse"
  }
});

gsap.from(".section-heading", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".services",
    start: "top 65%"
  }
});

// ------------------------------
// 7. Final section reveal
// ------------------------------
gsap.from(".final h2", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".final",
    start: "top 65%"
  }
});

gsap.to(".final-ring", {
  rotation: 180,
  scale: 1.15,
  scrollTrigger: {
    trigger: ".final",
    start: "top bottom",
    end: "bottom top",
    scrub: 2
  }
});

// ------------------------------
// 8. Cursor glow
// ------------------------------
const glow = document.querySelector(".cursor-glow");

window.addEventListener("pointermove", (event) => {
  gsap.to(glow, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.45,
    ease: "power3.out"
  });
});

// ------------------------------
// 9. Magnetic CTA
// ------------------------------
const button = document.querySelector(".magnetic-btn");

button.addEventListener("pointermove", (event) => {
  const rect = button.getBoundingClientRect();
  const x = event.clientX - (rect.left + rect.width / 2);
  const y = event.clientY - (rect.top + rect.height / 2);

  gsap.to(button, {
    x: x * 0.22,
    y: y * 0.22,
    duration: 0.35,
    ease: "power3.out"
  });
});

button.addEventListener("pointerleave", () => {
  gsap.to(button, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.4)"
  });
});
