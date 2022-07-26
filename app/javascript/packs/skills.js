function sweet_confirm_dialog(url) {
  swalConfirmButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        method: "DELETE",
        url: url
      })
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalConfirmButtons.fire(
        "Cancelled",
        "Delete skill was unsuccessfully!",
        "error"
      )
    }
  })
}

$(document).on("click", "a[id^=delete-skill]", function(e) {
  e.preventDefault();
  const $this = $(this);
  const url = $this.attr("url");
  sweet_confirm_dialog(url);
})
