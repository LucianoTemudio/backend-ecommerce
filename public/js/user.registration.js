// Create user listener

document.querySelector("#create_user_btn").addEventListener("click", ()=>{
  const email = document.querySelector("#email").value
  const password = document.querySelector("#password").value
  const data = {email,password}
  fetch("/api/users/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
});