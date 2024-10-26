  // Update listener

  document.querySelector("#update_cart_btn").addEventListener("click", ()=>{

        const cid = document.querySelector("#cid_upd").value
        const quantity = document.querySelector("#quantity_upd").value

        const data = {quantity}

        fetch(`/api/carts/${cid}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
        })
        window.location.reload();
    });