import { useRef, useState,useEffect } from "react";


const SimpleInput = (props) => {
 

  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setenteredNameIsValid]=useState(false);
  const [enteredNameTouched, setEnteredNameTouched]= useState(false);

  const enteredNameIsValid = enteredName.trim()!== '';
  const nameInputISInvalid = !enteredNameIsValid && enteredNameTouched;
  // useEffect(()=>{
  //   if(enteredNameIsValid){
  //     console.log('yu hu')
  //   }
  // },[enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // if(event.target.value.trim()!== ''){
    //   setenteredNameIsValid(true)
      
    // }
  };
  const nameInputBlurHandler = (event)=>{
    setEnteredNameTouched(true);
    // if(enteredName.trim()=== ''){
    //   setenteredNameIsValid(false)
      
    // }

  };
  const formSubmissonHandler = (event) => {
    event.preventDefault();
  
   setEnteredNameTouched(true);
    if(!enteredNameIsValid){
      // setenteredNameIsValid(false)
      return;
    }

    // setenteredNameIsValid(true);
    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);


  };
 

  const nameInputClasses = !nameInputISInvalid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmissonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
      
      
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
          onBlur={nameInputBlurHandler}
         
        />
         {nameInputISInvalid && <p className="error-text">name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
