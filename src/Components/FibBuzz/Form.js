import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Result from "./Result/Result";
import "./Form.css";

const Form = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  const [fibBuzzArr, setFibBuzzArr] = useState([]);
  const [finalArr, setFinalArr] = useState([]);
  const [fib, setFib] = useState(3);
  const [buzz, setBuzz] = useState(5);
  const [iterations, setIterations] = useState(100);
  const [showNumbers, setShowNumbers] = useState(false);

  const handleSubmit = () => {
    setFinalArr([]);
    setFibBuzzArr([]);
    fibBuzz();
  };

  const createFinalArr = (arr) => {
    let finalArr = [];
    for (let x = 0; x < iterations - 2; x += 4) {
      finalArr.push(fibBuzzArr.slice(x, x + 4));
    }
    setFinalArr(finalArr);
  };

  const fibBuzz = () => {
    fibBuzzArr.push([num1, ""]);
    fibBuzzArr.push([num2, ""]);

    for (let x = 1; x <= iterations - 1; x++) {
      let currentNum = fibBuzzArr[x][0] + fibBuzzArr[x - 1][0];

      if (currentNum === Infinity) {
        currentNum = [currentNum, "Infinity"];
      } else if (currentNum % fib === 0 && currentNum % buzz === 0) {
        currentNum = [currentNum, "fib buzz"];
      } else if (currentNum % fib === 0) {
        currentNum = [currentNum, "fib"];
      } else if (currentNum % buzz === 0) {
        currentNum = [currentNum, "buzz"];
      } else {
        currentNum = [currentNum, ""];
      }
      fibBuzzArr.push(currentNum);
    }

    createFinalArr(fibBuzzArr);
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
            label="remainder test for fib"
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
            label="remainder test for buzz"
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
              if (e.target.value > 2000) {
                alert(
                  "wooo that's a lot of iterations! let's be nice to your lovely computer and do 2,000 or less iterations"
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
        <div className="button-div">
          <Button
            color="primary"
            variant="outlined"
            id="submitBtn"
            type="submit"
            disabled={false}
          >
            Calculate
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            id="showNumbersBtn"
            onClick={() => setShowNumbers(!showNumbers)}
          >
            {showNumbers
              ? "only show fib buzz text"
              : "show 'fib' / 'buzz' + numbers"}
          </Button>
        </div>
      </form>
      <div className="fib-buzz-container">
        <Result array={finalArr} showNumbers={showNumbers} />
      </div>
    </div>
  );
};

export default Form;
