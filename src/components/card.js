// Создание карточки
import {openPopup} from './modal.js';

export function deleteCard(evt) {
    const cardElement = evt.target.closest('.element');
    cardElement.remove();
}

export function likeCard(evt) {
    const cardElement = evt.target.closest('.element');
    const cardLike = cardElement.querySelector(".element__like");
    cardLike.classList.toggle('element__like_active');
}

export function handleCardCLick(evt) {
    const cardElement = evt.target.closest('.element');
    const cardImage = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector('.element__text');

    const previewImage = document.querySelector('.pop-up__image');
    const captionPopup = document.querySelector('.pop-up__caption');
    const previewImagePopup = document.querySelector('.pop-up__zoom');

    openPopup(previewImagePopup);
    previewImage.src = cardImage.src;
    previewImage.alt = cardTitle.name;

    captionPopup.textContent = cardTitle.textContent;
}

export function createCard(cardData, deleteCard, likeCard, handleCardCLick) {
    const cardTemplate = document.querySelector('#templateElement').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector(".element__image");
    const cardTitle = cardElement.querySelector('.element__text');
    const cardLike = cardElement.querySelector(".element__like");
    const cardDelete = cardElement.querySelector(".element__trash");
  
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

    cardImage.addEventListener("click", handleCardCLick);
    cardDelete.addEventListener("click", deleteCard);
    cardLike.addEventListener("click", likeCard);
  
    return cardElement;
}