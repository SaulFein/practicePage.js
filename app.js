page.base('/');

      page('/', index);
      page('/hidden', hidden);

      page();

      function index() {
        document.querySelector('#index')
          .textContent = 'viewing index page';
      }

      function hidden () {
        $('#hideme').hide();
      }
