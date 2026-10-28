// "Copy email" button: copies the address and says so for 2 seconds.
document.querySelectorAll('[data-copy]').forEach(function (button) {
  var label = button.textContent

  button.addEventListener('click', function () {
    navigator.clipboard.writeText(button.dataset.copy).then(function () {
      button.textContent = 'Copied'
      setTimeout(function () { button.textContent = label }, 2000)
    })
  })
})
