$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault()
    let isFormOk = true
    const input_nome = $('input#name')

    if (!input_nome.val().length > 0) {
      isFormOk = false
    }

    if (isFormOk) {
      $.post(
        'https://script.google.com/macros/s/AKfycbzLghIJn2SOjsB-xE0a1mvNFR779Y7xUFJzn6dj9p6YzgL8iprRDXV6L3xeWhtRLkqhEw/exec',
        {
          nome: input_nome.val()
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
