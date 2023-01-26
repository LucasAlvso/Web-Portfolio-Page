// Select all the textboxes
const textBoxes = document.querySelectorAll(".descriptive-box");

// Select all the buttons
const selectables = document.querySelectorAll(".selectable");

// Add an event listener to each button
selectables.forEach(function(selectable) {
    selectable.addEventListener("click", function()
    {
        // Get the id of the selected button
        const selectedId = selectable.id;

        // Get the corresponding textbox using the id of the selected button
        const selectedTextBox = document.getElementById(selectedId.replace("-selectable","-description"))

        // Hide all the textboxes
        textBoxes.forEach(function(textbox) {
            textbox.style.display = "none";
        });
        // Show the selected textbox
        selectedTextBox.style.display = "block";
    });
});



selectables.forEach(button => {
    button.addEventListener('click', toggleButton);
  });
  
  function toggleButton() {
    selectables.forEach(button => {
      if (button === this) {
        button.classList.add('active');
        button.style.backgroundColor = "var(--secondary-color)";
        button.style.color = "var(--bg-color)";
        button.style.fontWeight = "800";
      } else {
        button.classList.remove('active');
        button.style.backgroundColor = "";
        button.style.color = "";
        button.style.fontWeight = "";
      }
    });
  }