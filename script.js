const output = document.getElementById("output");

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-IN";
  msg.rate = 1;
  speechSynthesis.speak(msg);
}

function startJarvis() {
  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    speak("Your browser does not support voice recognition");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.continuous = false;

  recognition.onresult = function(event) {
    const command =
      event.results[0][0].transcript.toLowerCase();

    output.innerText = "You said: " + command;

    if (command.includes("hello jarvis")) {
      speak("Hello friend! How can I help you?");
    }
    else if (command.includes("open youtube")) {
      speak("Opening YouTube");
      window.open("https://www.youtube.com", "_blank");
    }
    else if (command.includes("open google")) {
      speak("Opening Google");
      window.open("https://www.google.com", "_blank");
    }
    else if (command.includes("open whatsapp")) {
      speak("Opening WhatsApp");
      window.open("https://wa.me/", "_blank");
    }
    else {
      speak("Sorry friend, I did not understand");
    }
  };

  recognition.onerror = function() {
    output.innerText = "Voice recognition error";
  };

  recognition.start();
}
