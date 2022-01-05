import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Result from "./Result/Result";

const FibBuzz = () => {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(1);
  //fibu buzz arr can be replaced with strings
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
    for (let x = 0; x < iterations - 2; x++) {
      let currentNum = fibBuzzArr[x] + fibBuzzArr[x + 1];
      fibBuzzArr.push(currentNum);
    }

    //convert fibs and buzzs

    for (let x = 0; x < iterations - 2; x++) {
      if (fibBuzzArr[x] % fib === 0 && fibBuzzArr[x] % buzz === 0) {
        fibBuzzArr[x] = "fib buzz";
      } else if (fibBuzzArr[x] % fib === 0) {
        fibBuzzArr[x] = "fib";
      } else if (fibBuzzArr[x] % buzz === 0) {
        fibBuzzArr[x] = "buzz";
      }
    }

    // split the fizzbuzz array into nested arrays of 4
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
      <form className="fib-form" onSubmit={onSubmit}>
        <TextField
          color="primary"
          margin="normal"
          className="text-form"
          type="number"
          name="num1"
          onChange={(e) => {
            setNum1(Number(e.target.value));
          }}
          placeholder="first number"
          required
        />
        <TextField
          color="primary"
          margin="normal"
          className="text-form"
          type="number"
          name="num2"
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="second number"
          required
        />
        <TextField
          color="primary"
          margin="normal"
          className="text-form"
          size="medium"
          type="number"
          onChange={(e) => setFib(Number(e.target.value))}
          placeholder="'fib' number"
          required
        ></TextField>
        <TextField
          color="primary"
          margin="normal"
          className="text-form"
          size="medium"
          type="number"
          onChange={(e) => setBuzz(Number(e.target.value))}
          placeholder="'buzz' number"
          required
        ></TextField>
        <TextField
          color="primary"
          margin="normal"
          className="text-form"
          size="medium"
          type="number"
          onChange={(e) => {
            if (e.target.value.length > 4) {
              alert(
                "wooo that's a lot of iterations! let's be nice to your lovely computer and do 9,999 or less iterations"
              );
              e.target.value = 0;
              setIterations(0);
            } else {
              setIterations(Number(e.target.value));
            }
          }}
          placeholder="'total' number"
          required
        ></TextField>

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
