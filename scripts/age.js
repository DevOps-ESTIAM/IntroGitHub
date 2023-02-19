$('.birthdate-click').click(function(e) {
          e.preventDefault();
          $month = $('.month').val();
          $day = $('.day').val();
          $year = $('.year').val();
          if (ageValidation(18, $month, $day, $year)) {
            alert('sorry not old enough');
          } else unhide();

        });

        function ageValidation(age, birthMonth, birthDate, birthYear) {
          var a = age;
          var todaysDate = new Date();
          todaysDate.setFullYear(todaysDate.getFullYear() - a);
          var usersBirthDay = new Date();
          var bm = birthMonth;
          var bd = birthDate;
          var by = birthYear;
          usersBirthDay.setFullYear(by, bm - 1, bd);
          if ((todaysDate - usersBirthDay) < 0) {
            return true;
          } else return false
        }

        function unhide() {
          var x = document.getElementById("close");
          x.style.display = "block";
        }
