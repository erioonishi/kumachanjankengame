window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading").classList.add("loaded");
  }, 2000); // 2秒後に.fadeOut開始
});