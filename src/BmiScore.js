import React from "react";

function BmiScore({ BmiNo, BmiName, changeWeigth }) {
  console.log(BmiNo,"kkkkkkkkkkkkkkkkkk")
  console.log(changeWeigth,"weight")
  return (
    <div className="text-center shadow rounded p-4">
      <div>Your BMI Score </div>
      <div className="row justify-content-md-center">
        {BmiNo <18.5 && <div className="p-3 my-2 alert fs-1 alert-warning col-sm-4">
          {BmiNo}
        </div>

        }

{BmiNo >18.5 && BmiNo <24.9 && <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">
          {BmiNo}
        </div>

        }

{BmiNo >24.9 && <div className="p-3 my-2 alert fs-1 alert-danger col-sm-4">
          {BmiNo}
        </div>

        }
       
      </div>
      {changeWeigth.type === "Positive" && (
        <div className="fs-4">
          "You need lose <span className="fw-bold">{changeWeigth.weight}</span>kg"
        </div>
      )}
      {changeWeigth.type === "Negative" && (
        <div className="fs-4">
          "You need gani<span className="fw-bold">{changeWeigth.weight}</span>kg"
        </div>
      )}
      {changeWeigth.type === "Normal" && (
        <div className="fs-4">
          "Your weight is Normal, good for you"
          <span className="fw-bold"></span>kg"
        </div>
      )}

      <div className="fs-3 fw-bold text-primary">{BmiName}</div>
    </div>
  );
}

export default BmiScore;
