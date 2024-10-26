// Delete listener

document.querySelector(".prod_delete_btn_item").addEventListener("click", ()=>{
    const cid = document.querySelector(".prod_delete_btn_item").value
    fetch(`/api/carts/${cid}`, {
        method: "DELETE",
        })
    window.location.reload();
  });
