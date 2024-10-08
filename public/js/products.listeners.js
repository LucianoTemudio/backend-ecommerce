// Create listener

document.querySelector("#create_btn").addEventListener("click", ()=>{
    const category = document.querySelector("#category").value
    const title = document.querySelector("#title").value
    const photo = document.querySelector("#photo").value
    const price = document.querySelector("#price").value
    const stock = document.querySelector("#stock").value
    const data = {category,title,photo,price,stock}
    fetch("/api/products/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
});

// Update listener

document.querySelector("#update_btn").addEventListener("click", ()=>{
    const pid = document.querySelector("#pid_upd").value
    const category = document.querySelector("#category_upd").value
    const title = document.querySelector("#title_upd").value
    const photo = document.querySelector("#photo_upd").value
    const price = document.querySelector("#price_upd").value
    const stock = document.querySelector("#stock_upd").value

    let data = {category,title,photo,price,stock}
    if (category.length === 0) {
        delete data.category
    }
    if (title.length === 0) {
        delete data.title
    }
    if (photo.length === 0) {
        delete data.photo
    }
    if (price.length === 0) {
        delete data.price
    }    
    if (stock.length === 0) {
        delete data.stock
    }    

    fetch(`/api/products/${pid}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
});

// Delete listener

document.querySelector("#delete_btn").addEventListener("click", ()=>{
    const pid = document.querySelector("#pid_delete").value
    fetch(`/api/products/${pid}`, {
        method: "DELETE",
      })
});

