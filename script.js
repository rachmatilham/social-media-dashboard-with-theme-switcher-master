const toggleElement = document.querySelector(".toggle");

function toggleHandler() {
  toggleElement.classList.toggle("dark-mode");
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
}

toggleElement.addEventListener("click", toggleHandler);
