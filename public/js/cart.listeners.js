// Create listener

document.querySelector("#create_cart_btn").addEventListener("click", ()=>{
    const user_id = document.querySelector("#user_id").value
    const product_id = document.querySelector("#product_id").value
    const quantity = document.querySelector("#quantity").value
    const data = {user_id,product_id,quantity}
    fetch("/api/carts/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
});

