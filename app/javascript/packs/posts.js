import SimpleMDE from 'simplemde';

$(document).on('turbolinks:load', function() {
  var editorOptions = {
    element: $('textarea')[0],
    forceSync: true,
    spellChecker: false
  };

  new SimpleMDE(editorOptions);

  $('#post-submit').attr('disabled', true);
  $(document).on('keyup', '#form-new-post', function() {
    if($('#title-post').val() != '' && $('#tags-post').val() != '') {
      $('#post-submit').attr('disabled', false);
    } else {
      $('#post-submit').attr('disabled', true);
    }
  })
})
