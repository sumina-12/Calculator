let display = document.getElementById('display');

        function appendToDisplay(value) {
            if (display.value === '0' && value !== '.') {
                display.value = value;
            } else {
                display.value += value;
            }
        }

        function clearDisplay() {
            display.value = '0';

        }

        function calculate() {
            try {
                display.value = eval(display.value) || '0';
            } catch (error) {
                display.value = 'Error';
                setTimeout(clearDisplay, 1000);
            }
        }

        // Keyboard support
        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === '(' || key === ')') {
                appendToDisplay(key);
            } else if (key === 'Enter') {
                calculate();
            } else if (key === 'Escape') {
                clearDisplay();
            }
        });
