$( document ).ready(function() {
  // var JSONObj = {};
  // var student = [];
  // for(i = 0; i < student.length; i++){
  //
  // }
  // $('#add').click(function () {
  //   var Content = $('#content').val();
  //   if ($("#content").val() == '') {
  //     $('#message').html("please input content");
  //     return false;
  //   }
  //   $('#todos').prepend("  <li> " + Content + "</li>");
  //   $('#form')[0].reset();
  //   var todos = $('#todos').html();
  //   localStorage.setItem('todos', todos);
  //   return false;
  // });
  // $('#clear').click( function() {
  //   window.localStorage.clear();
  //   location.reload();
  //   return false;

// });
  window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {

      // Add an event listener for form submissions
      document.getElementById('contactForm').addEventListener('submit', function() {
        // Get the value of the name field.
        var name = document.getElementById('name').value;

        // Save the name in localStorage.
        localStorage.setItem('name', name);
      });

    }

  }

});