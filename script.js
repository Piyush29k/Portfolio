const roles = [
  "Software Engineer",
  "Web Developer",
  "Full Stack Developer",
  "UI / UX Designer",
  "Problem Solver"
];

const typingSpeed = 100;        // ms per character typing
const deletingSpeed = 50;       // ms per character deleting
const pauseAfterTyping = 2000;  // ms pause after full text typed
const pauseAfterDeleting = 500; // ms pause after text deleted

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingText = document.getElementById("typing-text");

function type() {
  const currentText = roles[roleIndex];

  if (!isDeleting) {
    // Typing forward
    typingText.textContent = currentText.substring(0, charIndex++);
    if (charIndex > currentText.length) {
      isDeleting = true;
      setTimeout(type, pauseAfterTyping);
      return;
    }
  } else {
    // Deleting backward
    typingText.textContent = currentText.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, pauseAfterDeleting);
      return;
    }
  }

  setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
}

// Start animation after page load
document.addEventListener("DOMContentLoaded", () => {
  type();
});

