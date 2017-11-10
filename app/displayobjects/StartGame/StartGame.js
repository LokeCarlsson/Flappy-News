startGame()
{
  var username = document.createElement("form");
  username.method = "post";

  usernameInput = document.createElement("input");
  usernameInput.value = "value";
  usernameInput.name = "name";

  username.appendChild(usernameInput);
  username.submit();
}
