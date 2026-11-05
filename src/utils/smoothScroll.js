export function smoothScrollTo(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const targetY = target.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: targetY, behavior: "smooth" });
}
