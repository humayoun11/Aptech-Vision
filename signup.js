function registration() {
  let username = document.getElementById('signupusername').value,
    email = document.getElementById('signupemail').value,
    password = document.getElementById('signuppassword').value,
    number = document.getElementById('signupcontact').value
  let role = document.getElementById('role').value

  let cData = JSON.parse(localStorage.getItem('clientData')) || []

  let exist =
    cData.length &&
    JSON.parse(localStorage.getItem('clientData')).some(
      (data) =>
        data.id &&
        data.username.toLowerCase() == username.toLowerCase() &&
        data.email.toLowerCase() == email.toLowerCase() &&
        data.number.toLowerCase() == number.toLowerCase() &&
        data.password.toLowerCase() == password.toLowerCase(),
    )
  let jData = JSON.parse(localStorage.getItem('jamadaarData')) || []
  let exist1 =
    jData.length &&
    JSON.parse(localStorage.getItem('jamadaarData')).some(
      (data) =>
        data.id &&
        data.username.toLowerCase() == username.toLowerCase() &&
        data.email.toLowerCase() == email.toLowerCase() &&
        data.number.toLowerCase() == number.toLowerCase() &&
        data.password.toLowerCase() == password.toLowerCase(),
    )

  if (role == 1) {
    cData.push({ username, email, password, number })
    localStorage.setItem('clientData', JSON.stringify(cData))
    // document.querySelector('form').reset()
    // document.getElementById('signupusername').focus()
    alert('registration successfull')(
      (window.location.href = 'login&signup.html'),
    )
  }
  if (role == 2) {
    cData.push({ username, email, password, number })
    localStorage.setItem('jamadaarData', JSON.stringify(cData))
    // document.querySelector('form').reset()
    // document.getElementById('signupusername').focus()
    alert('registration successfull')(
      (window.location.href = 'login&signup.html'),
    )
  } else {
    alert('Ooopppssss... Duplicate found!!!\nYou have already sigjned up')
  }
  e.preventDefault()
}

function login() {
  var adminuser = 'admin'
  var adminpassword = 'admin123'

  var showuser = document.getElementById('showusername')
  let loginusername = document.getElementById('loginusername').value,
    loginpassword = document.getElementById('loginpassword').value

  let cData = JSON.parse(localStorage.getItem('clientData')) || []

  localStorage.setItem('localUsername', loginusername)

  let exist =
    cData.length &&
    JSON.parse(localStorage.getItem('clientData')).some(
      (data) =>
        data.username.toLowerCase() == loginusername ||
        (adminuser == loginusername &&
          data.password.toLowerCase() == loginpassword) ||
        adminpassword == loginpassword,
    )
  let jData = JSON.parse(localStorage.getItem('jamadaarData')) || []
  let exist1 =
    jData.length &&
    JSON.parse(localStorage.getItem('jamadaarData')).some(
      (data) =>
        data.username.toLowerCase() == loginusername ||
        (adminuser == loginusername &&
          data.password.toLowerCase() == loginpassword) ||
        adminpassword == loginpassword,
    )

  if (
    cData.length &&
    JSON.parse(localStorage.getItem('clientData')).some(
      (data) =>
        data.username.toLowerCase() == loginusername &&
        data.password.toLowerCase() == loginpassword,
    )
  ) {
    alert('login successfully ' + localStorage.localUsername)
    window.location.href = 'userdasboard.html'
  } else if (
    jData.length &&
    JSON.parse(localStorage.getItem('jamadaarData')).some(
      (data) =>
        data.username.toLowerCase() == loginusername &&
        data.password.toLowerCase() == loginpassword,
    )
  ) {
    alert('login successfully ' + localStorage.localUsername)
    window.location.href = 'jamadaar.html'
  }
  if (loginusername == adminuser && loginpassword == adminpassword) {
    window.location.href = 'adminjamadaar.html'
    alert(' Wellcome Admin ')
    // window.location.href = 'index.html'
    // window.location.assign('adminjamadaar.html')

    // location.href = 'https://www.w3schools.com'
    console.log(loginusername)
    console.log(loginpassword)
  }
  if (!exist && !exist1) {
    alert('incorrect username or password')
  }
}
function add_text_input() {
  var table = document.getElementById('mytable')
  var x = table.rows.length
  table.insertRow(-1).innerHTML =
    '<tr>' +
    '<td> <input type="text" id="username' +
    x +
    '" /></td>' +
    '<td> <input type="text" id="email' +
    x +
    '" /></td>' +
    '<td> <input type="text" id="number' +
    x +
    '" /></td></tr>'
}
function save_data() {
  var table = document.getElementById('mytable')
  var tableRows = table.rows.length
  var data = []
  for (var i = 1; i <= tableRows - 1; i++) {
    var title = document.getElementById('username' + i).value
    var desc = document.getElementById('useremail' + i).value
    var desc = document.getElementById('usernumber' + i).value
    var desc = document.getElementById('userpassword' + i).value
    var temp = { title: title, description: desc }
    data.push(temp)
  }
  window.localStorage.setItem('UserDeatil', JSON.stringify(data))
}
// loadData = function () {
//   let data = JSON.parse(window.localStorage.getItem('Table1'))
//   for (i = 0; i < data.length; i++) {
//     add_text_input()
//     document.getElementById('username' + (i + 1)).value = data[i].username
//     document.getElementById('email' + (i + 1)).value = data[i].email
//     document.getElementById('password' + (i + 1)).value = data[i].password
//     document.getElementById('number' + (i + 1)).value = data[i].number
//   }
// }

// loadData()

// var showuser = (document.getElementById('showusername').innerHTML = localUser)
