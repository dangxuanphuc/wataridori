import SimpleMDE from 'simplemde';

function togglePublish() {
  if($('#title-post').val() != '' && $('#tags-post').val() != '' && $(".CodeMirror-empty").length == 0) {
    $('#post-submit').attr('disabled', false);
  } else {
    $('#post-submit').attr('disabled', true);
  }
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
