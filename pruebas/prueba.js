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
          }).showToast();
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
        title: `Felicitaciones ${envio.nombre}`,
        html: `<p>La recibirás en ${envio.direccion}</p>
               <p>El total a pagar es $${sessionStorage.getItem("total")}</p>`,
        icon: "success",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Ok',
        confirmButtonColor: "#960f1a",
        showCancelButton:true,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Felicitaciones", "¡Tu orden está hecha!.", "success");
        }
      });
    })();
  