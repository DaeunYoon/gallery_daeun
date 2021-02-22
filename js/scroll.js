(function () {
  const stageElem = document.querySelector(".stage");
  let maxScrollHeight = 0;
  let checkStage = 0;

  function resizeHandler() {
    maxScrollHeight = document.body.offsetHeight - window.innerHeight;
  }
  function setCheckStage() {
    checkStage = stageElem.getAttribute("data-checked");
  }

  function scrollHandler() {
    if (checkStage === "true") {
      const scrollPer = window.pageYOffset / maxScrollHeight;
      const zMove = scrollPer * 1975 - 990;
      stageElem.style.transform = "translateZ(" + zMove + "vw)";
    } else {
      setCheckStage();
    }
  }

  window.addEventListener("scroll", scrollHandler);

  window.addEventListener("resize", function () {
    resizeHandler();
    scrollHandler();
  });

  resizeHandler();
  setCheckStage();
})();
