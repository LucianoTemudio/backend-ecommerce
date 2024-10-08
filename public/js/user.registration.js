// Create user listener

document.querySelector("#create_user_btn").addEventListener("click", ()=>{
  const photo = document.querySelector("#photo_user").value
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const role = document.querySelector("#role").value
  const data = {photo,email,password,role}
  fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
});