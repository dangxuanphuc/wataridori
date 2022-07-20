import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  didOpen: toast => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  }
});

const swalConfirmButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger mr-2"
  },
  buttonsStyling: false
})

window.Toast = Toast;
window.swalConfirmButtons = swalConfirmButtons;
