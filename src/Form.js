import React, { useState } from "react";

function Form({getData}) {
  const [hight, setHight] = useState("");
  const [wight, setWight] = useState("");
  const [alert,setAlert]= useState(false)
  function getHight(e) {
    setHight(e.target.value);
  }
  function getWight(e) {
    setWight(e.target.value);
  }

const onSubmit =(e)=>{
  e.preventDefault()
  if(isNaN(hight)|| isNaN(wight)){
   setAlert(true)
  }else{
    getData(hight,wight);
    setAlert(false)
      
  }
 
  
}


  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-border mt-4 ml-4">
          <h1 className="text-center pt-2 text-secondary ">BMI Calculator</h1>

          <div className="mt-3 ml-5 mr-5">
            <label htmlFor="formGroupExampleInput" className="form-label">
              Hight(m)
            </label>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              onChange={getHight}
              required
            ></input>
          </div>
          <div className="mt-3 ml-5 mr-5">
            <label htmlFor="formGroupExampleInput" className="form-label">
              wight(kg)
            </label>
            <input
            required
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              onChange={getWight}
            ></input>
          </div>
          {alert&&<div className="alert alert-danger mt-2 ml-2 mr-2 " role="alert">Not valid input</div>}     
        
          <button type="submit" className="btn btn-primary mt-4 ml-5 mb-2">
            calculate
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
