page.base('/');

      page('/', index);
      page('./hidden', hidden);

      page();

      function index() {
        // document.querySelector('p')
        //   .textContent = 'viewing dicksauce';
      }

      function about() {
        document.querySelector('p')
          .textContent = 'viewing about';
      }

      function contact(ctx) {
        document.querySelector('p')
          .textContent = 'viewing contact ' + (ctx.params.contactName || '');
      }

      function hidden (e) {
        e.preventDefault();
        $('#hideme').hide();
      }
