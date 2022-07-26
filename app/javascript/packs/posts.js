import SimpleMDE from 'simplemde';

function togglePublish() {
  if($('#title-post').val() != '' && $('#tags-post').val() != '' && $(".CodeMirror-empty").length == 0) {
    $('#post-submit').attr('disabled', false);
  } else {
    $('#post-submit').attr('disabled', true);
  }
}

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
        "Delete post was unsuccessfully!",
        "error"
      )
    }
  })
}

$(document).on('turbolinks:load', function() {
  if($('textarea').length > 0) {
    var editorOptions = {
      element: $('textarea')[0],
      forceSync: true,
      spellChecker: false
    };

    new SimpleMDE(editorOptions);

    $('#post-submit').attr('disabled', true);
  }

  $(document).on('keyup', '#form-new-post', function() {
    togglePublish();
  })

  togglePublish();
})

$(document).on('click', '.js--btn-vote', function() {
  let url = $(this).data('url-vote');
  $.ajax({
    url: url,
    dataType: 'SCRIPT',
    method: 'PUT'
  });
});

$(document).on("click", "a[id^=delete-post]", function(e) {
  e.preventDefault();
  const $this = $(this);
  const url = $this.attr("url");
  sweet_confirm_dialog(url);
})
