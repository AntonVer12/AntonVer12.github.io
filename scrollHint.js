document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".scroll-down");
  const mover   = document.querySelector(".scroll-mover");
  if (!wrapper || !mover) return;

  setTimeout(() => {
    wrapper.style.opacity = "0.9";
    bounceY(mover, 8, 2, () => { wrapper.style.opacity = "0.4"; });
  }, 1000);
});

function bounceY(el, distancePx = 8, times = 2, done) {
  let count = 0;
  const one = () => {
    el.animate(
      [
        { transform: "translateY(0)" },
        { transform: `translateY(${distancePx}px)` },
        { transform: "translateY(0)" }
      ],
      { duration: 400, easing: "ease-out" }
    ).onfinish = () => {
      if (++count < times) setTimeout(one, 100);
      else if (done) done();
    };
  };
  one();
}
