import { AsciiRenderer } from "./ascii-sharks/renderer";
import { World } from "./ascii-sharks/world";

// A quiet, non-interactive adaptation of stackedlol/ascii-sharks.
const canvas = document.querySelector<HTMLCanvasElement>("#ocean-background");
const toggle = document.querySelector<HTMLButtonElement>("#ocean-toggle");

if (canvas && toggle) {
  try {
    const renderer = new AsciiRenderer(canvas);
    renderer.setFontFamily(getComputedStyle(canvas).fontFamily);
    const compact = window.innerWidth < 768;
    const world = new World(
      compact
        ? [{ kind: "hammerhead", size: 0.85 }, { kind: "classic", size: 0.65 }]
        : [{ kind: "hammerhead", size: 1 }, { kind: "classic", size: 0.85 }, { kind: "thresher", size: 0.7 }],
      compact ? 45 : 100,
    );
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let paused = motion.matches;
    try {
      paused = paused || localStorage.getItem("ocean-paused") === "true";
    } catch { /* Storage is optional. */ }
    let frame = 0;
    let last = 0;
    let printing = false;
    let width = 0;
    let height = 0;
    let pixelRatio = 0;

    function updateToggle() {
      toggle!.textContent = paused ? "Play background" : "Pause background";
      toggle!.setAttribute("aria-pressed", String(paused));
      toggle!.setAttribute("aria-label", paused ? "Play ocean animation" : "Pause ocean animation");
    }

    function tick(now: number) {
      // Render at 30 fps; keep simulation steps small even after a slow frame.
      const elapsed = now - last;
      if (elapsed >= 1000 / 30) {
        const dt = Math.min(elapsed / 1000, 0.0667);
        const steps = Math.ceil(dt / (1 / 60));
        for (let i = 0; i < steps; i++) world.step(dt / steps);
        renderer.render(world, dt);
        last = now - (elapsed % (1000 / 30));
      }
      frame = requestAnimationFrame(tick);
    }

    function schedule() {
      cancelAnimationFrame(frame);
      if (paused || document.hidden || printing) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      if (rect.width < 1 || rect.height < 1) return;
      if (width === rect.width && height === rect.height && pixelRatio === dpr) return;
      width = rect.width;
      height = rect.height;
      pixelRatio = dpr;
      renderer.resize(width, height, dpr);
      world.resize(width, height, renderer.cellWidth, renderer.cellHeight);
      // Settle the initial pose, including for visitors who prefer a still image.
      if (world.time === 0) {
        for (let i = 0; i < 120; i++) world.step(1 / 60);
      }
      renderer.render(world, 1 / 60);
    }

    toggle.addEventListener("click", () => {
      paused = !paused;
      try { localStorage.setItem("ocean-paused", String(paused)); } catch { /* Optional. */ }
      updateToggle();
      schedule();
    });
    motion.addEventListener("change", () => {
      paused = motion.matches;
      updateToggle();
      schedule();
    });
    document.addEventListener("visibilitychange", schedule);
    window.addEventListener("pagehide", () => cancelAnimationFrame(frame));
    window.addEventListener("pageshow", schedule);
    window.addEventListener("beforeprint", () => { printing = true; schedule(); });
    window.addEventListener("afterprint", () => { printing = false; schedule(); });
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();
    updateToggle();
    toggle.hidden = false;
    document.documentElement.classList.add("ocean-ready");
    schedule();
  } catch (error) {
    // Keep the site readable when Canvas or a required browser API is unavailable.
    canvas.hidden = true;
    toggle.hidden = true;
    console.warn("Ocean background unavailable.", error);
  }
}
