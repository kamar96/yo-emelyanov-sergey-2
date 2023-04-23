const buttonMenu = document.querySelector('.banner_title-btn');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close-popup')

buttonMenu.addEventListener('click', function() {
  popup.classList.add('open');});

closePopup.addEventListener('click', function() {
  popup.classList.remove('open');});