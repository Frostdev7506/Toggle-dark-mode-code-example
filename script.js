/**
 * In java script we will put addEventListener on the button i.e we are settng up the button so that whenever it is
 * pressed it would execute the function in the second argument of addEventListener.
 */

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
  // checks if currently dark mode is selected or not
  if (prefersDarkScheme.matches) {
    // if dark mode is selected it would switch to light theme
    document.body.classList.toggle("light-theme");
  }
  // if light mode is selected it would witch to dark theme
  else {
    document.body.classList.toggle("dark-theme");
  }
});
