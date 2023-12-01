// Открытие модального окна
export function openPopup(popup) {
    popup.classList.add('pop-up_opened');
    document.addEventListener('keydown', closePopupByEsc);
}
// Закрытие модального окна
export function closePopup(popup) {
    popup.classList.remove('pop-up_opened');
    document.removeEventListener('keydown', closePopupByEsc);
}

// Закрытие попапа по клику на оверлэй
export function closePopupByOverlayClick(popup) {
    popup.addEventListener('click', (evt) => {
        const isOverlayClicked = evt.target === evt.currentTarget;
        const isCloseButtonClicked = evt.target.classList.contains('pop-up__close-button');
        if (isOverlayClicked || isCloseButtonClicked) {
        closePopup(evt.currentTarget);
        }
    })
}

export function closePopupByEsc(evt) {
    const popupsArray = document.querySelectorAll('.pop-up');
    const activePopup = Array.from(popupsArray).find((popup) => {
        return popup.classList.contains('pop-up_opened');
      });
    if (evt.key === 'Escape') {
        closePopup(activePopup);
    }
}