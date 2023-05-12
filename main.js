document.addEventListener('DOMContentLoaded', function() {
  var formButton = document.getElementById('openForm');
  var form = document.getElementById('fundraiserForm');

  formButton.addEventListener('click', function() {
    if (form.classList.contains('d-none')) {
      form.classList.remove('d-none');
    } else {
      form.classList.add('d-none');
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!'); // replace with your actual form handling code
  });
});