$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault()
    console.log('checking form')
    let isFormOk = true
    const input_nome = $('input#name')
    const input_cognome = $('input#surname')

    input_nome.next().remove()
    if (!input_nome.val().length > 0) {
      nome.parent().append('<p> Il nome non può essere vuoto</p>')
      isFormOk = false
    }

    input_cognome.next().remove()
    if (!input_cognome.val().length > 0) {
      nome.parent().append('<p> Il cognome non può essere vuoto</p>')
      isFormOk = false
    }
    if (isFormOk) {
      console.log('form ok');
      $.post(
        'https://script.google.com/macros/s/AKfycbw6XCcg1pdqQ1bZ8De2ScsCdxdlpDaOEGpfR4nZyk26GT7Dv358aqCcjfHax5UbaMqmzA/exec',
        {
          Nome: input_nome.val(),
          Cognome: input_cognome.val()
        },
        function (response) {
          console.log(response)
        }
      )
    }
  })
})
