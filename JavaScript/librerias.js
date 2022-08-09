/* SWEET ALERT */
function alertBuyCart() {
  (async () => {
    do {
      const { value: datos } = await Swal.fire({
        title: 'Datos de Envio <i class="fa-solid fa-truck-fast"></i>',
        html:
          '<input type="text" id="swal-input1" placeholder="Nombre y Appellido" class="swal2-input">' +
          '<input type="text" id="swal-input2" placeholder="Direccion" class="swal2-input">' +
          '<input type="text"id="swal-input3" placeholder="Piso/Departamento" class="swal2-input">' +
          '<input type="number" id="swal-input4" placeholder="Numero de teléfono" class="swal2-input">',
        confirmButtonText: "Siguiente",
        confirmButtonColor: "#960f1a",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,

        preConfirm: () => {
          return [
            document.getElementById("swal-input1").value,
            document.getElementById("swal-input2").value,
            document.getElementById("swal-input3").value,
            document.getElementById("swal-input4").value,
          ];
        },
      });
      formNombre = document.getElementById("swal-input1").value;
      formDireccion = document.getElementById("swal-input2").value;
      formPiso = document.getElementById("swal-input3").value;
      formTelefono = document.getElementById("swal-input4").value;

      if (formNombre == "" || formDireccion == "" || formTelefono == "") {
        Toastify({
          text: "Error, Complete todos los campos",
          duration: 4000,
          gravity: "bottom",
          position: "left",
          style: {
            background: "#960f1a",
          },
        });
      }
    } while (formNombre == "" || formDireccion == "" || formTelefono == "");
    class DatosDeEnvio {
      constructor() {
        this.nombre = formNombre.toUpperCase();
        this.direccion = formDireccion.toUpperCase();
        this.piso = formPiso.toUpperCase();
        this.telefono = formTelefono;
      }
    }
    let envio = new DatosDeEnvio();
    datosEnvio = sessionStorage.setItem("datosEnvio", JSON.stringify(envio));

    Swal.fire({
      title: `Tu pedido está en cola ${envio.nombre}`,
      html: `<p class="ticket">La recibirás en ${envio.direccion}</p>
             <p class="ticket">El total a pagar es $${sessionStorage.getItem("total")}</p>
             <p>¿Deseas continuar?</p>`,
      icon: "question",
      confirmButtonText: "Ok",
      confirmButtonColor: "#960f1a",
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        let orderNumber = Math.round(Math.random() * 999999999);
        Swal.fire({
          title: "¡Muchas gracias por tu compra!",
          html: `<p class="ticket">¡Tu orden está hecha!</p>
                 <p class="ticket">Codigo de pedido: ${orderNumber}</p>`,
          icon: "success",
          timer: "10000",
          timerProgressBar: true,
          confirmButtonText: "Ok",
          confirmButtonColor: "#960f1a",
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        });
        cleanCart(); 
      }
    });
  })();
}
function alertEmptyCart() {
  Swal.fire({
    title: "¡No hay nada en el carrito!",
    text: "Agrega productos para poder comprar",
    icon: "warning",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#960f1a",
    timer: "2500",
  });
}
function alertRepeatedProduct() {
  Swal.fire({
    title: "¡Ya agregaste este producto en el carro!",
    text: "Modifica su cantidad dentro del carro",
    icon: "warning",
    confirmButtonText: "Continuar",
    confirmButtonColor: "#960f1a",
    timer: "3000",
  });
}

/* TOSTIFY */
function notiAddCartProduct() {
  Toastify({
    text: "Producto agregado al carro 🍔",
    duration: 3000,
    gravity: "bottom",
    position: "left",
    style: {
      background: "#960f1a",
    },
  }).showToast();
}
function notiRemoveCartProduct() {
  Toastify({
    text: "Producto eliminado del carro ❌",
    duration: 3000,
    gravity: "bottom",
    position: "left",
    style: {
      background: "#960f1a",
    },
  }).showToast();
}

/* Tiny slider */
let slider = tns({
  container: ".my-slider",
  items: 1,
  gutter: 20,
  slideBy: 1,
  controlsPosition: "bottom",
  navPosition: "bottom",
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: "#custom-control",
  speed: 600,
});
