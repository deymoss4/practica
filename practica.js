function showMessage() {
    var messageBox = document.getElementById("messageBox");
    if (messageBox.classList.contains("show")) {
      messageBox.classList.remove("show");
    } else {
      messageBox.classList.add("show");
    }
  }

  var wrapper = document.querySelector('.product-wrapper');
  var containers = document.querySelectorAll('.product-container');
  var currentIndex = 0;
  
  // Показать текущий контейнер
  containers[currentIndex].classList.add('active');
  
  function showPreviousContainer() {
    containers[currentIndex].classList.remove('active'); // Скрыть текущий контейнер
  
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = containers.length - 1;
    }
  
    containers[currentIndex].classList.add('active'); // Показать новый контейнер
  
    // Прокрутка к новому контейнеру
    containers[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }
  
  function showNextContainer() {
    containers[currentIndex].classList.remove('active'); // Скрыть текущий контейнер
  
    currentIndex++;
    if (currentIndex >= containers.length) {
      currentIndex = 0;
    }
  
    containers[currentIndex].classList.add('active'); // Показать новый контейнер
  
    // Прокрутка к новому контейнеру
    containers[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }