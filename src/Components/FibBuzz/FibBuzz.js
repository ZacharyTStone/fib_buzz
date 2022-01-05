import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Result from "./Result/Result";
import "./FibBuzz.css";

const FibBuzz = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [fibBuzzArr, setFibBuzzArr] = useState([]);
  const [finalArr, setFinalArr] = useState([]);
  const [fib, setFib] = useState(3);
  const [buzz, setBuzz] = useState(5);
  const [iterations, setIterations] = useState(100);

  const handleSubmit = () => {
    setFinalArr([]);
    setFibBuzzArr([]);
    fibBuzz();
  };

  const fibBuzz = () => {
    fibBuzzArr.push(num1);
    fibBuzzArr.push(num2);

    for (let x = 0; x <= iterations - 2; x++) {
      let currentNum =
        (typeof fibBuzzArr[x] === "number" ? fibBuzzArr[x] : fibBuzzArr[x][0]) +
        (typeof fibBuzzArr[x + 1] === "number"
          ? fibBuzzArr[x + 1]
          : fibBuzzArr[x + 1][0]);

      if (currentNum === Infinity) {
        currentNum = [currentNum, "Infinity"];
      } else if (currentNum % fib === 0 && currentNum % buzz === 0) {
        currentNum = [currentNum, "fib buzz"];
      } else if (currentNum % fib === 0) {
        currentNum = [currentNum, "fib"];
      } else if (currentNum % buzz === 0) {
        currentNum = [currentNum, "buzz"];
      }

      fibBuzzArr.push(currentNum);
    }

    // split the fizzbuzz array into nested arrays of 4 for the chart
    let finalArr = [];
    for (let x = 0; x < iterations - 2; x += 4) {
      finalArr.push(fibBuzzArr.slice(x, x + 4));
    }
    setFinalArr(finalArr);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
    handleSubmit();
  };

  return (
    <div className="main_div">
      <form className="fib-form" onSubmit={onSubmit} margin="normal">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <TextField
            color="primary"
            margin="normal"
            className="text-form"
            type="number"
            name="num1"
            label="Fibonachi 1st Number"
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Please enter a positive number");
                e.target.value = "";
              } else {
                setNum1(Number(e.target.value));
              }
            }}
            placeholder="Ex: 1"
            required
          />
          <TextField
            color="primary"
            margin="normal"
            className="text-form"
            type="number"
            name="num2"
            label="Fibonachi 2nd Number"
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Please enter a positive number");
                e.target.value = 0;
              } else {
                setNum2(Number(e.target.value));
              }
            }}
            placeholder="Ex: 1"
            required
          />
          <TextField
            color="primary"
            margin="normal"
            className="text-form"
            size="medium"
            type="number"
            label="remainder =  0 for fib"
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Please enter a positive number");
                e.target.value = 0;
              } else {
                setFib(Number(e.target.value));
              }
            }}
            placeholder="Ex: 3"
            required
          ></TextField>
          <TextField
            color="primary"
            margin="normal"
            className="text-form"
            size="medium"
            type="number"
            label="remainder =  0 for buzz"
            onChange={(e) => {
              if (e.target.value < 0) {
                alert("Please enter a positive number");
                e.target.value = 0;
              } else {
                setBuzz(Number(e.target.value));
              }
            }}
            placeholder="Ex: 5"
            required
          ></TextField>
          <TextField
            color="primary"
            margin="normal"
            className="text-form"
            size="medium"
            type="number"
            label="iterations"
            onChange={(e) => {
              if (e.target.value.length > 4) {
                alert(
                  "wooo that's a lot of iterations! let's be nice to your lovely computer and do 9,999 or less iterations"
                );
                e.target.value = 0;
                setIterations(0);
              } else if (e.target.value < 0) {
                alert("Please enter a positive number");
                e.target.value = 0;
              } else {
                setIterations(Number(e.target.value));
              }
            }}
            placeholder="Ex: 100"
            required
          ></TextField>
        </div>

        <Button
          color="primary"
          variant="outlined"
          id="submitBtn"
          type="submit"
          disabled={false}
        >
          Send
        </Button>
      </form>
      <Result array={finalArr} />
    </div>
  );
};

export default FibBuzz;
