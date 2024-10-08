// login listener

document.querySelector("#login_btn").addEventListener("click", ()=>{
    const uid_login = document.querySelector("#login_btn").value
    const email_login = document.querySelector("#email_login").value
    const password_login = document.querySelector("#password_login").value
    document.querySelector("#welcome").innerHTML = "Welcome "+email_login
  
  
  });