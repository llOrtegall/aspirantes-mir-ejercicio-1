// * Vanilla JavaScript

// * Recuperamos todos los botones
const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  // TODO: Ejemplo De Código Imperativo

  button.addEventListener('click', function () {
    const id = button.getAttribute('data-id')

    if (button.classList.contains('liked')) {
      button.classList.remove('liked')
      button.innerText = 'Me Gusta'
    } else {
      button.classList.add('liked')
      button.innerText = 'Quitar Me Gusta'
    }
  })
})