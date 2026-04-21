import ready from "../js/modules/ready.js";

ready(async () => {
  const mainEl = document.getElementById("main");
  const sections = [...mainEl.querySelectorAll(":scope > *")];

  sections.forEach((section) => {
    const targets = section.classList.contains("row")
      ? [...section.children]
      : section;
    gsap.set(targets, { opacity: 0, y: 20 });
  });

  mainEl.classList.remove("d-none");

  const badges = [...mainEl.querySelectorAll(".badge-new")];
  gsap.set(badges, { opacity: 0, x: "1rem", y: "-0.5rem", rotation: 8 });

  const tl = gsap.timeline();
  sections.forEach((section) => {
    if (section.classList.contains("row")) {
      tl.to([...section.children], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    } else {
      tl.to(section, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    }
  });

  tl.to(
    badges,
    {
      opacity: 1,
      x: "1rem",
      y: "-1.5rem",
      rotation: 8,
      duration: 0.4,
      stagger: 0.15,
      ease: "back.out(1.7)",
    },
    "-=1.0",
  );
});
