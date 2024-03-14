window.addEventListener('DOMContentLoaded', () => {
  const targetNumber = 100; 

  const display = document.getElementById('numberDisplay');
  let currentNumber = 0;

  const increment = () => {
    if (currentNumber < targetNumber) {
      currentNumber++;
      display.textContent = currentNumber + '%';
      setTimeout(increment, 50); // Adjust the timeout for desired speed
    }
  };

  increment();
});

window.addEventListener('DOMContentLoaded', () => {
  const targetNumber = 300; 

  const display = document.getElementById('numberDisplay1');
  let currentNumber = 0;

  const increment = () => {
    if (currentNumber < targetNumber) {
      currentNumber++;
      display.textContent = currentNumber ;
      setTimeout(increment, 20); // Adjust the timeout for desired speed
    }
  };

  increment();
});


window.addEventListener('DOMContentLoaded', () => {
  const targetNumber = 15; 

  const display = document.getElementById('numberDisplay2');
  let currentNumber = 0;

  const increment = () => {
    if (currentNumber < targetNumber) {
      currentNumber++;
      display.textContent = currentNumber + '+';
      setTimeout(increment, 180); // Adjust the timeout for desired speed
    }
  };

  increment();
});


window.addEventListener('DOMContentLoaded', () => {
  const targetNumber = 21; 

  const display = document.getElementById('numberDisplay3');
  let currentNumber = 0;

  const increment = () => {
    if (currentNumber < targetNumber) {
      currentNumber++;
      display.textContent = currentNumber;
      setTimeout(increment, 150); // Adjust the timeout for desired speed
    }
  };

  increment();
});


window.addEventListener('DOMContentLoaded', () => {
  const targetNumber = 500; 

  const display = document.getElementById('numberDisplay4');
  let currentNumber = 0;

  const increment = () => {
    if (currentNumber < targetNumber) {
      currentNumber++;
      display.textContent = currentNumber;
      setTimeout(increment, 10); // Adjust the timeout for desired speed
    }
  };

  increment();
});





