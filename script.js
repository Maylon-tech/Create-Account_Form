
let formulario = document.querySelector('.form')
/*let userName = document.querySelector('#username')*/

formulario.onsubmit = function(evento) {
    evento.preventDefault()

    let userName = document.forms['form']['nome']
    let temErro = false

    if(!userName.value) {
        temErro = true
        userName.classList.add('Error')        

        let span = userName.nextSibling.nextSibling
        span.innerText = 'Preencha com seu Nome'

    } else {
        userName.classList.remove('Error')

        let span = userName.nextSibling.nextSibling
        span.innerText = ''

    }

    let userEmail = document.forms['form']['email']

    if(!userEmail.value) {
        temErro = true
        userEmail.classList.add('Error')

        let span = userEmail.nextSibling.nextSibling
        span.innerText = 'Preencha com seu E-mail'
    } else {
        userEmail.classList.remove('Error')

         let span = userEmail.nextSibling.nextSibling
        span.innerText = ''
    }

    let userPass = document.forms['form']['pass']

    if(!userPass.value) {
        temErro = true
        userPass.classList.add('Error')

        let span = userPass.nextSibling.nextSibling
        span.innerText = 'Preencha com sua Senha'
    } else {
        userPass.classList.remove('Error')

        let span = userPass.nextSibling.nextSibling
        span.innerText = ''
    }

    if(!temErro) {
    formulario.submit()
    }
}