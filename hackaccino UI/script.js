function startVoiceDetection() {
  const micBall = document.getElementById("micBall");
  const statusText = document.getElementById("statusText");

  statusText.textContent = "Listening...";
  micBall.style.animation = "pulse 0.7s infinite";

  // Simulate listening effect
  setTimeout(() => {
    statusText.textContent = "Analyzing emotion...";
    micBall.style.animation = "pulse 1.5s infinite";
  }, 4000);

  setTimeout(() => {
    statusText.textContent = "Done!";
    micBall.style.animation = "pulse 2s infinite";
  }, 7000);
}

