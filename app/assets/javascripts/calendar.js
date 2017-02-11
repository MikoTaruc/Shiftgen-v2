var Calendar = {
  init: function() {
    $(document).on('ready', function() {
      Calendar.initListeners();
    });
  },

  initListeners: function() {
    $('#calendar-setup-form').on('submit', function(e){
      console.log(e);
      e.preventDefault();
    });
  }
};
