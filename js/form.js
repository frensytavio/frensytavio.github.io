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
        'https://script.google.com/macros/s/AKfycbz-hhFVl9d35zeeMBQCmkaa9ewWLPWuT2UZVR3orvJH7Uk_L2fCs_KcpqA_bImB-DZTKQ/exec',
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
