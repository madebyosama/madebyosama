(function () {
  // Hero animation. The poster image is its first frame, so the swap is seamless.
  // The ~440 KB runtime waits until the page is idle (desktop) or the first touch/scroll (phones),
  // and never loads for reduced motion or data saver: those visitors keep the still image.
  var stage = document.getElementById("stage");
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches || (navigator.connection && navigator.connection.saveData);
  if (stage && !still) {
    var started = false;
    var start = function () {
      if (started) return;
      started = true;
      var s = document.createElement("script");
      s.src = "/assets/rive/rive.js";
      s.onload = function () {
        rive.RuntimeLoader.setWasmUrl("/assets/rive/rive.wasm");
        var canvas = document.createElement("canvas");
        stage.appendChild(canvas);
        var r = new rive.Rive({
          src: "/assets/rive/hero.riv",
          canvas: canvas,
          autoplay: true,
          onLoad: function () {
            r.resizeDrawingSurfaceToCanvas();
            stage.classList.add("live");
            addEventListener("resize", function () { r.resizeDrawingSurfaceToCanvas(); });
          }
        });
      };
      document.head.appendChild(s);
    };
    ["pointerdown", "touchstart", "scroll", "keydown"].forEach(function (type) {
      addEventListener(type, start, { once: true, passive: true });
    });
    if (matchMedia("(hover: hover) and (min-width: 761px)").matches) {
      var idle = window.requestIdleCallback || function (fn) { setTimeout(fn, 200); };
      if (document.readyState === "complete") idle(start);
      else addEventListener("load", function () { idle(start); });
    }
  }

  // About: the intro video (only in the page when assets/videos/intro.mp4 exists).
  var video = document.getElementById("introVideo");
  if (video) {
    var portrait = video.parentNode, play = document.getElementById("playIntro");
    var setPlaying = function (on) {
      portrait.classList.toggle("playing", on);
      play.setAttribute("aria-label", on ? "Pause video" : "Play my video introduction");
    };
    play.addEventListener("click", function () {
      if (video.paused) video.play().then(function () { setPlaying(true); }, function () { setPlaying(false); });
      else { video.pause(); setPlaying(false); }
    });
    video.addEventListener("ended", function () { setPlaying(false); });
  }

  // Reviews: the rest are in the page (for search engines) but hidden until asked for.
  var more = document.getElementById("moreReviews");
  more.addEventListener("click", function () {
    document.querySelectorAll("#reviewList [hidden]").forEach(function (el) { el.hidden = false; });
    more.parentNode.remove();
  });

  // "More about me": the playlist only loads once the panel is opened, and links into it open it.
  var panel = document.getElementById("morePanel");
  panel.addEventListener("toggle", function () {
    var frame = panel.querySelector("iframe[data-src]");
    if (panel.open && frame) { frame.src = frame.dataset.src; frame.removeAttribute("data-src"); }
  });
  function openFromHash() {
    var id = location.hash.slice(1), target = id && document.getElementById(id);
    if (target && panel.contains(target) && target !== panel) { panel.open = true; target.scrollIntoView(); }
    // Posts used to live at /#blog/<slug>.
    if (location.hash.indexOf("#blog/") === 0) location.replace("/" + encodeURIComponent(decodeURIComponent(location.hash.slice(6))));
  }
  openFromHash();
  addEventListener("hashchange", openFromHash);
})();
