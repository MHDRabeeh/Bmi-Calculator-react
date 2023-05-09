import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Form";
import BmiScore from "./BmiScore";
import BmiList from "./BmiList";
import { useState } from "react";

function App() {
  const [show ,setshow]=useState(false)
  const [changeWeigth, setChangeWeight] = useState({ weight: "", type: "" });
  const [bmi, setBmi] = useState("");
  const [bmiType, setbmiType] = useState("Not Calculated");
  const [bmiRange, setBmiRange] = useState({
    UnderWeight: { low: "" },
    Normal: { low: "", high: "" },
    OverWeight: { low: "", high: "" },
    ObesityClass1: { low: "", high: "" },
    ObesityClass2: { low: "", high: "" },
    ObesityClass3: { low: "", high: "" },
  });

  const onFormData = (hight, wight) => {
    let ansBmi = calBmi(wight, hight);
    setBmi(ansBmi);
    const findWeightType = weightType(ansBmi);
    setbmiType(findWeightType);
    const range = {
      UnderWeight: { low: calWight(18.5, hight) },
      Normal: { low: calWight(18.5, hight), high: calWight(24.9, hight) },
      OverWeight: { low: calWight(24.9, hight), high: calWight(29.9, hight) },
      ObesityClass1: {
        low: calWight(29.9, hight),
        high: calWight(34.9, hight),
      },
      ObesityClass2: {
        low: calWight(34.9, hight),
        hight: calWight(39.9, hight),
      },
      ObesityClass3: { low: calWight(39.9, hight) },
    };
    setBmiRange(range);
    console.log(changeWeigth);
    setChangeWeight(weightLevel(wight, ansBmi, range));
    setshow(true)
  };

  const calWight = (b, h) => {
    return (b * h * h).toFixed(2);
  };

  const calBmi = (wight, hight) => {
    return (wight / (hight * hight)).toFixed(2);
  };
  const weightLevel = (weight, bmi, range) => {

    let weightResult;

    if (bmi > 24.9) {
      weightResult = {
        weight: (weight - range.Normal.high).toFixed(2),
        type: "Positive",
      };
  
      return weightResult;
      
    } else if (bmi < 18.5) {

      weightResult = {
        weight: (range.Normal.low - weight).toFixed(2),
        type: "Negative",
      };
        console.log("nega" +weightResult.weight)
        return weightResult;
    } else {
      weightResult = {
        weight: 0,
        type: "Normal",
      };
     
      return weightResult;
    }
  };

  const weightType = (ansBmi) => {
    if (ansBmi < 18.5) {
      return "UnderWeight";
    } else if (ansBmi > 18.5 && ansBmi < 24.9) {
      return "Normal";
    } else if (ansBmi > 24.9 && ansBmi < 29.9) {
      return "Over weight";
    } else if (ansBmi > 29.9 && ansBmi < 34.9) {
      return "obesity class 1";
    } else if (ansBmi > 34.9 && ansBmi < 39.9) {
      return "obesity class 2";
    } else if (ansBmi > 39.9) {
      return "obesity class 3";
    }
  };

  return (
    <div className="container">
      <Form getData={onFormData} />
      {show&&
       <div className="row justify-content-center mt-5">
       <div className="col-12 col-sm-6 mb-5">
         <BmiScore BmiNo={bmi} BmiName={bmiType} changeWeigth={changeWeigth} />
       </div>
       <div className="col-12 col-sm-6">
         <BmiList range={bmiRange} bmi={bmi} />
       </div>
     </div>
      }
     
    </div>
  );
}

export default App;
