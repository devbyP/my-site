(function() {
  function switchMode (dark) {
    const bodyTag = document.body
    if (dark) {
      bodyTag.classList.add("dark");
    } else {
      bodyTag.classList.remove("dark");
    }
  }

  const dlSwitch = document.getElementById('dl-switch');
  let darkMode = false;

  dlSwitch.addEventListener("click", () => {
    darkMode = !darkMode;
    switchMode(darkMode);
  })
})();