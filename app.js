page.base('/ish'); //the base is where you keep your index.html if it is not in a folder but in the project folder leave the base blank like page.base('');
page('/', index);
page('/hidden', hidden);
page('/showshit', show);
page();

function index() {
  document.querySelector('#index')
  .textContent = 'viewing index page';
}

function hidden() {
  $('#hideme').hide();
}

function show() {
  $('#hideme').show();
}
