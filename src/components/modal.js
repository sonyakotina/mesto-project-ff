// Открытие модального окна
export function openPopup(popup) {
    popup.classList.add('pop-up_opened');
}
// Закрытие модального окна
export function closePopup(popup) {
    popup.classList.remove('pop-up_opened');
}