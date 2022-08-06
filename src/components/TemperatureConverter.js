import React, { useState } from "react";

const TemperatureConverter = () => {
  let [temperature, setTemperature] = useState("");
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [kelvin, setKelvin] = useState("");
  const [isDisabled, setIsDisabled] = useState(false)

  //seleciona todas os buttons com classe tecla
  const teclas = document.querySelectorAll(".tecla")
  console.log(teclas)
  // aplica a cada elemento com classe tecla o atributo .disabled com o state isDisabled como valor;
  teclas.forEach(tecla => {
    return tecla.disabled = isDisabled;
  })


  const handleAddValue = (e) => {
    console.log("clicou");
    setTemperature((currTemp) => {
      if (e.target.innerText === ",") {
        const value = ".";

        if (currTemp.includes(".") && value === ".") {
          return currTemp;
        }

        if (currTemp === "" || currTemp === "-") {
          return currTemp + 0 + value;
        }

        return currTemp + value;
      }

      if (e.target.innerText === "-" && currTemp !== "") {
        return currTemp;
      }

      if (currTemp.includes("-") && e.target.innerText === "-") {
        return currTemp;
      }

      return currTemp + e.target.innerText;
    });
  };

  const handleClean = (e) => {
    setTemperature((currTemp) => {
      return currTemp.slice(0, -1);
    });
  };

  const handleReset = (e) => {
    setTemperature("");
    setIsDisabled(false);
  };
  // Quando a tecla Converter é clicada
  const handleConverter = () => {
   temperature = Number(temperature);
   // Valor da unidade de temperatura escolhida pelo usuario
   const select = document.querySelector("#user-choice");
   const fromTemp = select.options[select.selectedIndex].value;
   console.log(fromTemp)
   if(fromTemp === "C"){
    const celsiusTemperature = temperature.toFixed(2);
    setCelsius(celsiusTemperature);
    const fahrenheitTemperature = ((temperature * 9) / 5 + 32).toFixed(2);
    setFahrenheit(fahrenheitTemperature);
    const kelvinTemperature = (temperature + 273.15).toFixed(2);
    setKelvin(kelvinTemperature);
   }

   if(fromTemp === "F"){
    const fahrenheitTemperature = temperature.toFixed(2);
    const celsiusTemperature = ((temperature - 32) * 5 / 9).toFixed(2);
    const kelvinTemperature = ((temperature - 32) * 5 / 9 + 273.15) .toFixed(2);
    setFahrenheit(fahrenheitTemperature);
    setCelsius(celsiusTemperature);
    setKelvin(kelvinTemperature);
   }

   if(fromTemp === "K"){
    const kelvinTemperature = temperature.toFixed(2);
    const celsiusTemperature = (temperature - 273.15).toFixed(2);
    const fahrenheitTemperature = ((temperature - 273.15) * 9 / 5 + 32).toFixed(2);
    setFahrenheit(fahrenheitTemperature);
    setCelsius(celsiusTemperature)
    setKelvin(kelvinTemperature);
   }

   setIsDisabled(true);

  };

  return (
    <>
      <aside className="areaResultado">
        <input id="user-temp" defaultValue={temperature} />
        <select id="user-choice">
          <option value="C">Celsius</option>
          <option value="F">Fahrenheit</option>
          <option value="K">Kelvin</option>
        </select>
        <div className="result" id="celsius-temp" defaultValue={celsius}>
          {celsius}
        </div>
        <span>
          <sup>o</sup>C
        </span>
        <div className="result" id="fahrenheit-temp">
          {fahrenheit}
        </div>
        <span>
          <sup>o</sup>F
        </span>
        <div className="result" id="kelvin-temp">
          {kelvin}
        </div>
        <span>
          <sup>o</sup>K
        </span>
        <button className="tecla" id="converter" onClick={handleConverter}>
          Converter
        </button>
      </aside>
      <aside className="areaTeclas">
        <button className="n1 tecla" onClick={handleAddValue}>
          1
        </button>
        <button className="n2 tecla" onClick={handleAddValue}>
          2
        </button>
        <button className="n3 tecla" onClick={handleAddValue}>
          3
        </button>
        <button className="n4 tecla" onClick={handleAddValue}>
          4
        </button>
        <button className="n5 tecla" onClick={handleAddValue}>
          5
        </button>
        <button className="n6 tecla" onClick={handleAddValue}>
          6
        </button>
        <button className="n7 tecla" onClick={handleAddValue}>
          7
        </button>
        <button className="n8 tecla" onClick={handleAddValue}>
          8
        </button>
        <button className="n9 tecla" onClick={handleAddValue}>
          9
        </button>
        <button className="n0 tecla" onClick={handleAddValue}>
          0
        </button>
        <button className="virgula tecla" onClick={handleAddValue}>
          ,
        </button>
        <button className="limpa tecla" onClick={handleClean}></button>
        <button className="negativo tecla" onClick={handleAddValue}>
          -
        </button>
        <div className="reset tecla" onClick={handleReset}>
          Nova conversão
        </div>
      </aside>
    </>
  );
};

export default TemperatureConverter;
