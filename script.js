const words = ["jonique chan", "陈悦宇"];
const colors = ["#E6AA68"];
let currentWordIndex = 0;

function changeText() {
  const element = document.getElementById("changingText");
  element.textContent = words[currentWordIndex];
  element.style.color = colors;
  currentWordIndex = (currentWordIndex + 1) % words.length;
 }

changeText(); // Initial change
setInterval(changeText, 5000);

var typing = new Typed(".text2", {
  strings: ["painter.", "software developer.", "baker.", "day-dreamer.", "music enjoyer.", "traveller.", "sister.", "Christian."],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true
});