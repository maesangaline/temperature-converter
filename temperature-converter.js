const DIGITS_AFTER_DECIMAL_POINT = 2;//createdby:@maesangaline

// Main function
function TemperatureConverter() {
  let fahrenheit = document.getElementById("fahrenheit");
  let celsius = document.getElementById("celsius");
  fahrenheit.addEventListener("input", convertFC);
  celsius.addEventListener("input", convertCF);

// Convert Fahreneit to Celsius
function convertFC() {
  if(fahrenheit.value=="") {
    celsius.value = "";
  } else {
    let f = Number(fahrenheit.value);
    let c = 5 / 9 * (f - 32);
    celsius.value = roundedString(c);
  }
}

// Convert Celsius to Fahrenheit
function convertCF() {
  if (celsius.value === "") {
    fahrenheit.value = "";
  } else {
    let c = Number(celsius.value);
    let f = 9 / 5 * c + 32;
    fahrenheit.value = roundedString(f);
  }
 }
  
// Limit the digits after the decimal point
function roundedString(n) {
  let str = n.toFixed(DIGITS_AFTER_DECIMAL_POINT);
  while (str.endsWith("0")) {
    str = str.substring(0, str.length - 1);
  }
  if (str.endsWith(".")) str = str.substring(0, str.length -1);
  return str;
  }
}
