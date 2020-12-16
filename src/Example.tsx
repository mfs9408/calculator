import React from "react";

const Example = () => {
  function codeCalculator(subject: any, callback?: any) {
    setTimeout(function () {
      console.log(`Давай напишем ${subject}.`);
    }, 1000);
    callback();
  }

  function calculatorDone() {
    console.log("Я закончил");
  }

  codeCalculator("калькулятор", calculatorDone);

  return null;
};

export default Example;
