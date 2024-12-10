let cardsContainer = document.querySelector('.cards')

function likeClick(event) {
  if (event.target.classList.contains('card__like')) {
    event.target.classList.toggle('is-active') 
  }
}

cardsContainer.addEventListener('click', likeClick)

let userNameValue = document.querySelector('.user__name_value')
let inputName = document.querySelector('.pop-up__name')
inputName.value = userNameValue.textContent

let userStatus = document.querySelector('.user__status')
let inputStatus = document.querySelector('.pop-up__status')
inputStatus.value = userStatus.textContent

let submitButton = document.querySelector('.pop-up__submit')
submitButton.addEventListener('click', function() {
  event.preventDefault()

  userNameValue.textContent = inputName.value
  userStatus.textContent = inputStatus.value

  let closeButton = document.querySelector('.pop-up__close')
  closeButton.click()
});

