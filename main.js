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
// Update progress bar width based on project progress
function updateProgressBar(projectName, progress) {
  var progressBar = document.getElementById(projectName + "-progress");
  progressBar.style.width = progress + "%";
}

// Update progress bar for each project
updateProgressBar("charityA", 60); // Progress for Charity A (60%)
updateProgressBar("projectX", 25); // Progress for Project X (25%)
updateProgressBar("charityB", 90); // Progress for Charity B (90%)
updateProgressBar("charityC", 40); // Progress for Charity C (40%)
updateProgressBar("projectY", 75); // Progress for Project Y (75%)

