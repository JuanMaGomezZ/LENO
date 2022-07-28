function alertBuyCart(){
    Swal.fire({
        title:'Felicitaciones',
        text:'¡Tu orden está hecha!',
        icon:'success'
      })
}

function alertRepeatedProduct(){
    Swal.fire({
        title:'¡Ya agregaste este producto en el carro!',
        text:'Modifica su cantidad dentro del carro',
        icon:'warning'
      })
}

function notiAddCartProduct(){
    Toastify({
        text: "Producto agregado al carro",
        duration: 3000,
        gravity: 'bottom',
        position: 'left',
        style: {
            background: '#960f1a'
        }
    }).showToast();
}