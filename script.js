function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

document.getElementById("generateButton").addEventListener("click", function() {
  var length = document.getElementById("passwordLength").value;
  var newPassword = generatePassword(length);
  document.getElementById("passwordDisplay").innerText = "Generated Password: " + newPassword;
});
