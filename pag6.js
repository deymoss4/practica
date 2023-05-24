function showMessage() {
    var messageBox = document.getElementById("messageBox");
    if (messageBox.classList.contains("show")) {
      messageBox.classList.remove("show");
    } else {
      messageBox.classList.add("show");
    }
  }

  