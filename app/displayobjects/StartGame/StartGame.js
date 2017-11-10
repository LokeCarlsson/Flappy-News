startGame()
{
  // form
  var form = document.createElement("form")
  form.setAttribute('method',"post")
  
  //username input
  var usernameInput = document.createElement("input") 
  usernameInput.setAttribute('type',"text")
  usernameInput.setAttribute('name',"username")
  usernameInput.setAttribute('id', "username")
  
  // submit button
  var submitButton = document.createElement("input")
  submitButton.setAttribute('type',"submit")
  submitButton.setAttribute('value',"Play")
  
  form.appendChild(usernameInput)
  form.appendChild(submitButton)
  
  document.getElementsByTagName('body')[0].appendChild(form)

  theName = document.getElementById(username).value
  console.log(theName)
  
}
