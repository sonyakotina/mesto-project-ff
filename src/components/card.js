// Создание карточки
import {openPopup} from './modal.js';
export function createCard(name, link) {
    const cardTemplate = document.querySelector('#templateElement').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardImage = cardElement.querySelector(".element__image");

    const previewImage = document.querySelector('.pop-up__image');
    const captionPopup = document.querySelector('.pop-up__caption');
    const previewImagePopup = document.querySelector('.pop-up__zoom');
  
    cardImage.src = link;
    cardImage.alt = name;
    cardElement.querySelector('.element__text').textContent = name;
  
    const cardDelete = cardElement.querySelector(".element__trash");
    cardDelete.addEventListener("click", function() {
          cardElement.remove();
      });
  
    const cardLike = cardElement.querySelector(".element__like");
    cardLike.addEventListener("click", () => {
      cardLike.classList.toggle('element__like_active');
    });
  
    cardImage.addEventListener("click", () => {
      openPopup(previewImagePopup);
      previewImage.src = link;
      previewImage.alt = name;
  
      captionPopup.textContent = name;
    });
  
    return cardElement
  }