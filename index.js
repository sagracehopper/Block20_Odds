//State 
// Store numbers in three categories: all numbers, odd numbers, and even numbers.
const data = {
    allNumbers: [], // Numbers entered by the user
    oddNumbers: [], // Odd numbers
    evenNumbers: [], // Even numbers
  };
  
  //References
  // Connect the JavaScript code to the HTML elements.
  const form = document.querySelector('form'); // The form where numbers are entered
  const addNumberInput = document.querySelector('#number'); // The input field for numbers
  const sortOneButton = document.querySelector('#sortOne'); // Button to sort one number
  const sortAllButton = document.querySelector('#sortAll'); // Button to sort all numbers
  
  const numberBankOutput = document.querySelector('#numberBank output'); // Where all numbers are displayed
  const oddsOutput = document.querySelector('#odds output'); // Where odd numbers are displayed
  const evensOutput = document.querySelector('#evens output'); // Where even numbers are displayed
  
  //Functions 
  // Add a number to the list of all numbers
  function addNumber(number) {
    data.allNumbers.push(number); // Add the number to the list
    updateDisplay(); // Update the page to show the changes
  }
  
  // Sort one number from the list
  function sortOneNumber() {
    if (data.allNumbers.length > 0) {
      const number = data.allNumbers.shift(); // Remove the first number from the list
      if (number % 2 === 0) {
        data.evenNumbers.push(number); // Add even numbers to the even list
      } else {
        data.oddNumbers.push(number); // Add odd numbers to the odd list
      }
      updateDisplay(); // Update the page to show the changes
    }
  }
  
  // Sort all numbers from the list
  function sortAllNumbers() {
    while (data.allNumbers.length > 0) {
      const number = data.allNumbers.shift(); // Remove the first number from the list
      if (number % 2 === 0) {
        data.evenNumbers.push(number); // Add even numbers to the even list
      } else {
        data.oddNumbers.push(number); // Add odd numbers to the odd list
      }
    }
    updateDisplay(); // Update the page to show the changes
  }
  
  // Update the displayed numbers on the page
  function updateDisplay() {
    numberBankOutput.textContent = data.allNumbers.join(', '); // Show all numbers
    oddsOutput.textContent = data.oddNumbers.join(', '); // Show odd numbers
    evensOutput.textContent = data.evenNumbers.join(', '); // Show even numbers
  }
  
  // Event Listeners 
  // Add a number when the form is submitted
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the page from reloading
    const number = parseInt(addNumberInput.value); // Get the number from the input field
    if (!isNaN(number)) {
      addNumber(number); // Add the number if it's valid
      addNumberInput.value = ''; // Clear the input field
    }
  });
  
  // Sort one number when the "Sort 1" button is clicked
  sortOneButton.addEventListener('click', sortOneNumber);
  
  // Sort all numbers when the "Sort All" button is clicked
  sortAllButton.addEventListener('click', sortAllNumbers);
  
  // Initialize the display when the page loads
  updateDisplay();
  
