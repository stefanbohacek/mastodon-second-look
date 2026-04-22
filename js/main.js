import ready from "../js/modules/ready.js";

ready(async () => {
  const mainEl = document.getElementById("main");
  const sectionsRoot = mainEl.querySelector(":scope > div") ?? mainEl;
  const sections = [...sectionsRoot.querySelectorAll(":scope > *")];

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
      const isCardsRow = section.children.length > 2;
      if (isCardsRow) tl.addLabel("cards");
      tl.to([...section.children], {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power2.out",
      }, "-=0.3");
    } else {
      tl.to(section, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
    }
  });

  tl.to(
    badges,
    {
      opacity: 1,
      x: "1rem",
      y: "-0.75rem",
      rotation: 8,
      duration: 0.4,
      stagger: 0.1,
      ease: "back.out(1.7)",
    },
    "cards+=0.01",
  );
});
