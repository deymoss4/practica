const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.querySelector('.main-image');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;
  });
});


function showMessage() {
  var messageBox = document.getElementById("messageBox");
  if (messageBox.classList.contains("show")) {
    messageBox.classList.remove("show");
  } else {
    messageBox.classList.add("show");
  }
}