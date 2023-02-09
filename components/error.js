function alert(alertType = "error", message = ""){
  return `<div class="alert ${alertType}">${message}</div>`
}