import Vue from "vue";

const supportsIO =
  typeof window !== "undefined" && "IntersectionObserver" in window;

const observer = supportsIO
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer!.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -10% 0px" }
    )
  : null;

Vue.directive("reveal", {
  inserted(el: HTMLElement) {
    el.classList.add("reveal");
    if (observer) {
      observer.observe(el);
    }
    // Safety net: ALWAYS reveal after a small delay so content
    // is never permanently hidden, even if IO misbehaves.
    window.setTimeout(() => el.classList.add("is-visible"), 800);
  },
  unbind(el: HTMLElement) {
    if (observer) observer.unobserve(el);
  },
});
