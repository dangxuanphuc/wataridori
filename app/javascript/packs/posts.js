import SimpleMDE from 'simplemde';

$(document).on('turbolinks:load', function() {
  var editorOptions = {
    element: $('textarea')[0],
    forceSync: true,
    spellChecker: false
  };

  new SimpleMDE(editorOptions);
})
