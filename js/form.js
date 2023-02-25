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
        'https://script.google.com/macros/s/AKfycbxY9vYc3XyUugg2PEH2v3a8gGsYPMaLuUU01meDysX9pBJbMSXyCOx0PTiEE0w223o1rw/exec',
        {
          nome: input_nome.val(),
          cognome: input_cognome.val()
        }
      ).done(function (response) {
        console.log(response)
        if (response["result"] == 'success') {
          $('h2#form-title').text('Grazie ' + input_nome.val() +",")
          $('h2#form-title').append('<br><h2>Ti Aspettiamo!</h2>')

          $('form').hide()
        } else {
          $('h2#form-title').text('Errore, riprova più tardi!')
          $('form').hide()        }
      })
    }
  })
})
