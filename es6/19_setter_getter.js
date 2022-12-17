class Thermostat {
  constructor(temperature) {
    this._temperature = temperature;
  }

  set temperature(temperature) {
    this._temperature = this.toFahrenheit(temperature);
  }

  get temperature() {
    return this.toCelcius(this._temperature);
  }

  toCelcius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

  toFahrenheit(celcius) {
    return (celcius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
