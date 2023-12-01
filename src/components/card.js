// Создание карточки
import {openPopup} from './modal.js';

export function createCard(name, link, deleteCard, likeCard, handleCardCLick) {
    const cardTemplate = document.querySelector('#templateElement').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector(".element__image");
  
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector('.element__text').textContent = name;
  
    const cardDelete = cardElement.querySelector(".element__trash");
    function deleteCard() {
        cardElement.remove();
        deleteCard(cardElement);
    }
    cardDelete.addEventListener("click", deleteCard);
  
    const cardLike = cardElement.querySelector(".element__like");
    function likeCard() {
        cardLike.classList.toggle('element__like_active');
        likeCard(cardElement);
    }
    cardLike.addEventListener("click", likeCard);

    const previewImage = document.querySelector('.pop-up__image');
    const captionPopup = document.querySelector('.pop-up__caption');
    const previewImagePopup = document.querySelector('.pop-up__zoom');

    function handleCardCLick() {
        openPopup(previewImagePopup);
        previewImage.src = link;
        previewImage.alt = name;
    
        captionPopup.textContent = name;
        handleCardCLick(cardElement);
    }
    cardImage.addEventListener("click", handleCardCLick);
  
    return cardElement;
}