import React from "react";

function BmiList({range,bmi}) {

  return (
   
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
        <li className="list-group-item">
          <div>
            <div className="row">
              <div className="col-4 fw-bold">Type </div>
              <div className="col-4 fw-bold">BMI </div>
              <div className="col-4 fw-bold">WEIGHT </div>
            </div>
          </div>
        </li>

        <li className={bmi<18.5?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div>
            <div className="row">
              <div className="col-4">UnderWeight</div>
              <div className="col-4"> 18.5 </div>
              <div className="col-4">{range.Normal.low} </div>
            </div>
          </div>
        </li>
        <li className={bmi>18.5&&bmi<24.9?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div>
            <div className="row">
              <div className="col-4">Normal </div>
              <div className="col-4">18.5-24.9</div>
              <div className="col-4">{range.Normal.low +" kg - "+ range.Normal.high}</div>
            </div>
          </div>
        </li>
        <li className={bmi>24.9&&bmi<29.9?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div>
            <div className="row">
              <div className="col-4">Over weight </div>
              <div className="col-4">24.9-29.9</div>
              <div className="col-4">{range.OverWeight.low +" kg - "+ range.OverWeight.high}</div>
            </div>
          </div>
        </li>
        <li className={bmi>29.9&&bmi<34.9?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div>
            <div className="row">
              <div className="col-4">obesity class 1 </div>
              <div className="col-4">29.9-34.9</div>
              <div className="col-4">{range.ObesityClass1.low +" kg - "+ range.ObesityClass1.high}</div>
            </div>
          </div>
        </li>
        <li className={bmi>34.9&&bmi<39.9?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div>
            <div className="row">
              <div className="col-4">Obesity class 2</div>
              <div className="col-4">34.9-39.9</div>
              <div className="col-4">{range.ObesityClass2.low +" kg - "+ range.ObesityClass2.hight}</div>
            </div>
          </div>
        </li>
        <li className={bmi>39.9?"border border-danger border-3 list-group-item":"list-group-item"}>
          <div>
            <div className="row">
              <div className="col-4">Obesity class 3 </div>
              <div className="col-4">  39.9</div>
              <div className="col-4">{range.ObesityClass3.low }</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default BmiList;
