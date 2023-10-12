const button = document.querySelector('button')

button.addEventListener('click', function () {

    // TODO: Ejemplo De Código Imperativo

    const id = button.getAttribute('data-id')

    if (button.classList.contains('liked')) {
        button.classList.remove('liked')
        button.innerText = 'Me Gusta'
    } else {
        button.classList.add('liked')
        button.innerText = 'Quitar Me Gusta'
    }
})