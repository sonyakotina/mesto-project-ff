//IMPORTS
import '../index.css'; // добавьте импорт главного файла стилей
import {createCard} from './card.js';
import {openPopup, closePopup, closePopupByOverlayClick, closePopupByEsc} from './modal.js';
import {initialCards} from './cards.js';

//кнопки
const openEditProfilePopupButton = document.querySelector('.profile__edit-button');
const closeEditProfilePopupButton = document.querySelector('.pop-up__close-edit');

const openAddCardPopupButton = document.querySelector('.profile__add-button');
const closeAddCardPopupButton = document.querySelector('.pop-up__close-add');

const closePreviewImagePopupButton = document.querySelector('.pop-up__close-zoom');

const popupOverlay = document.querySelector('.pop-up');

//попапы
const editProfilePopup = document.querySelector('.pop-up__edit');
const addCardPopup = document.querySelector('.pop-up__add');
const previewImagePopup = document.querySelector('.pop-up__zoom');
const popupsArray = document.querySelectorAll('.pop-up');

//формы
const editProfileForm = document.querySelector('.edit');
const nameInput = document.querySelector('.name');
const jobInput = document.querySelector('.caption');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');

const titleCardInput = document.querySelector('.title');
const linkCardInput = document.querySelector('.link');

const cardsListContainer = document.querySelector('.elements');

// Закрытие на клик
popupsArray.forEach((popup) => {
  closePopupByOverlayClick(popup);
});

// При клике на кнопку отрытия модального окна Профиля
function handleClickEditButton() {
  openPopup(editProfilePopup)
  nameInput.value = profileName.textContent;
  jobInput.value = profileCaption.textContent;
}

function handleSubmitEditProfileForm(evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileCaption.textContent = jobInput.value;

  nameInput.value = "";
  jobInput.value = "";
  closePopup(editProfilePopup);
}

//add
function handleSubmitAddForm(event) {
  event.preventDefault();
  const newCard = createCard(titleCardInput.value, linkCardInput.value);
  renderCard(newCard);

  titleCardInput.value = "";
  linkCardInput.value = "";
  closePopup(addCardPopup);
}

// Отрисовка карточки
function renderCard(cardElement) {
  cardsListContainer.prepend(cardElement);
}

// Отрисовка начальных карточек
initialCards.reverse().forEach((card) => {
  const newCard = createCard(card.name, card.link);
  renderCard(newCard);
});

openEditProfilePopupButton.addEventListener('click', handleClickEditButton);
closeEditProfilePopupButton.addEventListener('click', () => closePopup(editProfilePopup));

editProfileForm.addEventListener('submit', handleSubmitEditProfileForm);

openAddCardPopupButton.addEventListener('click', () => openPopup(addCardPopup));
closeAddCardPopupButton.addEventListener('click', () => closePopup(addCardPopup));
addCardPopup.addEventListener('submit', handleSubmitAddForm);  

closePreviewImagePopupButton.addEventListener('click', () => closePopup(previewImagePopup));