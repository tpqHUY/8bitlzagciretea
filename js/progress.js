/* ============================================================
   progress.js — "mark as learned" tracking for TOEIC knowledge
   cards (the Part / task strategy cards, not flashcards).

   Each card gets a toggle in its header; state is stored in the
   shared SRS map under a "tk:" id (no DOM flashcard), so it
   persists locally AND rides on the existing cloud sync. Each
   section shows an X / Y learned progress bar.
   ============================================================ */
(function () {
  "use strict";
  if (!window.SRS || typeof window.SRS.mark !== "function") return;

  const PREFIX = "tk:";
  // containers holding TOEIC knowledge cards (LC / RC parts, S&W tasks)
  const CONTAINERS = ["#toeicLcParts", "#toeicRcParts", "#tspTasks", "#twrTasks"];

  const toggles = [];      // { btn, key, card }
  const sections = [];     // { el, keys }

  function keyFor(card) { return PREFIX + card.id; }

  function paint(card, btn, on) {
    card.classList.toggle("is-learned", on);
    btn.classList.toggle("done", on);
    btn.setAttribute("aria-pressed", String(on));
    const lab = btn.querySelector(".lt-label");
    if (lab) lab.textContent = on ? "Learned" : "Mark learned";
    btn.title = on ? "Studied — click to unmark" : "Mark this part as studied";
  }

  function refreshProgress() {
    sections.forEach(function (s) {
      let done = 0;
      s.keys.forEach(function (k) { if (window.SRS.has(k)) done++; });
      const total = s.keys.length;
      const txt = s.el.querySelector(".lp-text");
      const bar = s.el.querySelector(".lp-bar > span");
      if (txt) txt.textContent = done + " / " + total + " learned";
      if (bar) bar.style.width = (total ? (done / total * 100) : 0) + "%";
      s.el.classList.toggle("complete", total > 0 && done === total);
    });
  }

  function refreshAll() {
    toggles.forEach(function (t) { paint(t.card, t.btn, window.SRS.has(t.key)); });
    refreshProgress();
  }

  function build() {
    CONTAINERS.forEach(function (sel) {
      const cont = document.querySelector(sel);
      if (!cont) return;
      const cards = Array.prototype.slice.call(cont.querySelectorAll(":scope > .case"));
      if (!cards.length) return;
      const keys = [];

      cards.forEach(function (card) {
        if (!card.id) return;
        const key = keyFor(card);
        keys.push(key);
        const meta = card.querySelector(".case-meta");
        if (!meta || meta.querySelector(".learn-toggle")) return;

        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "learn-toggle";
        btn.innerHTML = '<span class="lt-ic" aria-hidden="true"></span><span class="lt-label"></span>';
        meta.appendChild(btn);
        paint(card, btn, window.SRS.has(key));

        btn.addEventListener("click", function (e) {
          e.stopPropagation();
          const next = !window.SRS.has(key);
          window.SRS.mark(key, next);
          paint(card, btn, next);
          refreshProgress();
        });
        toggles.push({ btn: btn, key: key, card: card });
      });

      // progress bar in the section header above this container
      const section = cont.closest(".section");
      const head = section && section.querySelector(".section-head");
      if (head && !head.querySelector(".learn-progress")) {
        const chip = document.createElement("div");
        chip.className = "learn-progress";
        chip.innerHTML = '<span class="lp-bar"><span></span></span><span class="lp-text"></span>';
        head.appendChild(chip);
        sections.push({ el: chip, keys: keys });
      }
    });
    refreshProgress();
    window.SRS.subscribe(refreshAll);   // re-sync markers on remote updates
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
