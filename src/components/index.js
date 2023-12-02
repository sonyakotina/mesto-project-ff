//IMPORTS
import '../index.css'; // добавьте импорт главного файла стилей
import {createCard, deleteCard, likeCard, handleCardCLick} from './card.js';
import {openPopup, closePopup, closePopupByOverlayClick, closePopupByEsc} from './modal.js';
import {initialCards} from './cards.js';

//кнопки
const openEditProfilePopupButton = document.querySelector('.profile__edit-button');

const openAddCardPopupButton = document.querySelector('.profile__add-button');

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
  const newCard = createCard({name: titleCardInput.value, link: linkCardInput.value}, deleteCard, likeCard, handleCardCLick);
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
  const newCard = createCard(card, deleteCard, likeCard, handleCardCLick);
  renderCard(newCard);
});

openEditProfilePopupButton.addEventListener('click', handleClickEditButton);

editProfileForm.addEventListener('submit', handleSubmitEditProfileForm);

openAddCardPopupButton.addEventListener('click', () => openPopup(addCardPopup));
addCardPopup.addEventListener('submit', handleSubmitAddForm);  