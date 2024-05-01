// Shams Hesham JS

// search js
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchinputG');
    const cards = document.querySelectorAll('.cardsG');
    function filterIcons(searchQuery) {
        const nothingfound = document.getElementById("nothingalertG");
        let number = 0;
        cards.forEach(function (card) {
        const name = card.querySelector("h2").textContent.toLowerCase();
        if (name.includes(searchQuery.toLowerCase())) {
           nothingfound.style.display = "none";
          card.style.display = "flex";
          number++;
        } else {
          card.style.display = "none";
        }
      });
      if(number == 0){
          nothingfound.style.display = "block";
      }
    }
    searchInput.addEventListener("input", function () {
      const searchQuery = searchInput.value.trim();
      filterIcons(searchQuery);
    });
  });
// nav bar and footer js
function over1(){
    document.getElementById("icon1G").style.color="goldenrod";
}
function over2(){
    document.getElementById("icon2G").style.color="goldenrod";
}
function over3(){
    document.getElementById("icon3G").style.color="goldenrod";
}
function over4(){
    document.getElementById("icon4G").style.color="goldenrod";
}
function over5(){
    document.getElementById("icon5G").style.color="goldenrod";
}
function out1(){
    document.getElementById("icon1G").style.color="white";
}
function out2(){
    document.getElementById("icon2G").style.color="white";
}
function out3(){
    document.getElementById("icon3G").style.color="white";
}
function out4(){
    document.getElementById("icon4G").style.color="white";
}
function out5(){
    document.getElementById("icon5G").style.color="white";
}

// form js
// Get the form element
const form = document.getElementById('formgg');

// Add event listener to form submit event
form.addEventListener('submit', function(event) {
  // Prevent form submission
  event.preventDefault();

  // Validate inputs
  const firstName = document.getElementById('firstnameG').value;
  const lastName = document.getElementById('lastnameG').value;
  const email = document.getElementById('emailG').value;

  // Validate each input field based on your validation criteria
  let isValid = true;

  if (!firstName) {
    displayError('firstnameG', '* Please enter your first name');
    isValid = false;
  } else {
    clearError('firstnameG');
  }

  if (!lastName) {
    displayError('lastnameG', '* Please enter your last name');
    isValid = false;
  } else {
    clearError('lastnameG');
  }

  if (!email) {
    displayError('emailG', '* Please enter a valid email address');
    isValid = false;
  } else {
    clearError('emailG');
  }
  
  // If all inputs are valid, allow the form to submit
  if (isValid) {
    // Get the input values
    const firstName = document.getElementById('firstnameG').value;
    const lastName = document.getElementById('lastnameG').value;
    const email = document.getElementById('emailG').value;

    // Create a new element to display the data
    const infoBox = document.createElement('div');
    infoBox.className = 'info-box';
    infoBox.textContent = 'Thanks ' + firstName + ' ' + lastName + ' , your ticket will be sent to '+ email;

    // Append the info box to the display box
    document.getElementById('display-box').appendChild(infoBox);

  }
});

// Display error message for an input field
function displayError(fieldId, errorMessage) {
  const errorElement = document.querySelector(`#${fieldId} + .error`);
  errorElement.textContent = errorMessage;
}

// Clear error message for an input field
function clearError(fieldId) {
  const errorElement = document.querySelector(`#${fieldId} + .error`);
  errorElement.textContent = '';
}

// dark mood and light mood js

var icon = document.getElementById("icon");
function icongg(){
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        icon.src="moon1.png";
    } else {
        icon.src="sun1.png";
    }
}




