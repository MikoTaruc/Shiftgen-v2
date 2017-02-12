var Calendar = {
  init: function() {
    Calendar.numShifts = 0;
    Calendar.numOff = 0;
    Calendar.firstShift = {};
    $(document).on('ready', function() {
      Calendar.initListeners();
    });
  },

  initListeners: function() {
    $('#calendar-setup-form').on('submit', function(e){
      e.preventDefault();
      Calendar.numShifts = parseInt($('#num-shifts').val());
      Calendar.numOff = parseInt($('#num-dayoffs').val());
      var dateString = $('#first-shift').val();
      Calendar.firstShift = new Date($('#first-shift').val());
      if (!Calendar.validateInputs(dateString)){
        return false;
      }
    });
  },

  validateInputs: function(dateString) {
    if (isNaN(Calendar.numShifts)){
      alert("Please enter a valid value for the Length of Set field.");
      return false;
    } else if (isNaN(Calendar.numOff)) {
      alert("Please enter a valid value for the Length of Days Off field.");
      return false;
    } else if (Calendar.validateDate(dateString)) {
      alert("Please enter a valid date for the First Shift Block field (YYYY/MM/DD)");
      return false;
    }else {
      return true;
    }
  },

  validateDate: function(dateString) {
    // Captures a 4 digit number between 1900 and 2999
    var yearReg = "(19[0-9]{2}|2[0-9]{3})";
    // Captures a 2 digit number between 01-09 and 10-12
    var monthReg = "(0[1-9]|1[0-2])";
    // Captures a 2 digit number between 01-09 and 10-19 and etc...
    var dayReg = "(0[1-9]|1[0-9]|2[0-9]|3[0-1])";

    var reg = new RegExp("^" + yearReg + "\\/" + monthReg + "\\/" + dayReg + "$");
    return !reg.test(dateString);
  }
};
