$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault()
    let isFormOk = true
    const input_nome = $('input#name')
    const input_cognome = $('input#cognome')

    if (!input_nome.val().length > 0) {
      isFormOk = false
    }

    if (!input_cognome.val().length > 0) {
      isFormOk = false
    }

    if (isFormOk) {
      $.post(
        'https://script.google.com/macros/s/AKfycbyahgFSl9_6Eh85Yn59I1uZmXW6A0few97KwCuW4ZBuCRemI7C4TXA1L5PNTcrgek7vtw/exec',
        {
          nome: input_nome.val(),
          cognome: input_cognome.val()
        }
      ).done(function (response) {
        console.log(response)
        if (response["result"] == 'success') {
          $('h2#form-title').text('Grazie!')
          $('form').hide()
        } else {
          $('h2#form-title').text('Errore, riprova più tardi!')
          $('form').hide()        }
      })
    }
  })
})
