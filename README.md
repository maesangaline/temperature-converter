# Temperature Converter

This is a simple temperature converter web application that allows users to convert temperatures between Fahrenheit and Celsius. The application limits the number of digits after the decimal point to 2.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter a temperature value in either the Fahrenheit or Celsius input field.
3. The corresponding temperature in the other unit will be automatically calculated and displayed.

## Code Overview

### Constants
- `DIGITS_AFTER_DECIMAL_POINT`: Defines the number of digits to display after the decimal point in the converted temperature.

### Functions
- `TemperatureConverter`: Main function that sets up event listeners for input fields.
- `convertFC`: Converts Fahrenheit to Celsius.
- `convertCF`: Converts Celsius to Fahrenheit.
- `roundedString`: Limits the number of digits after the decimal point.

---

A demo of this app is available [here](https://codepen.io/maesangaline/pen/MWJzQyK).
