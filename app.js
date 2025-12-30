/* DARK MODE */
const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* SCROLL ANIMATION */
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight - 100;
    if (top < trigger) {
      el.classList.add("active");
    }
  });
});
