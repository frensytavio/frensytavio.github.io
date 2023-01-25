$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault()
    console.log('checking form')
    let isFormOk = true
    const input_nome = $('input#name')

    if (!input_nome.val().length > 0) {
      isFormOk = false
    }

    if (isFormOk) {
      $.post(
        'https://script.google.com/macros/s/AKfycbxqxktMeWNXGMUONIyEq2r2ZDtlPPV8DxLNwlxMC8WdqMvwChTNaCDK3cEk2XNls7Lyuw/exec',
        {
          nome: input_nome.val()
        },
        function (response) {
          if (response == 'OK') {
            $('h2#form-title').text('Grazie!')
            $('form').hide()
          } else {
            console.log('Errore!')
          }
        }
      )
/*     $.ajax({
      url: 'https://script.google.com/macros/s/AKfycbw6XCcg1pdqQ1bZ8De2ScsCdxdlpDaOEGpfR4nZyk26GT7Dv358aqCcjfHax5UbaMqmzA/exec',
      data: { nome: input_nome.val() },
      type: 'POST',
      crossDomain: true,
      dataType: 'jsonp',
      success: function(response) {
        if (response == 'OK') {
          $('h2#form-title').text('Grazie!')
          $('form').hide()
        } else {
          console.log('Errore!')
        }
      }
    }); */
  }
  })

})
