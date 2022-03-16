import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

 
  const [enteredEmail, setEnteredEmail]= useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false); 

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputISInvalid =  !enteredEmailIsValid && enteredEmailTouched;

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputISInvalid =  !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const emailInputChangeHandler = (event)=>{
   setEnteredEmail(event.target.value)
  }
   
  const emailInputBlurHandler = (event)=>{
    setEnteredEmailTouched(true);
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissonHandler = (event) => {
    event.preventDefault();
    setEnteredEmailTouched(true);
    setEnteredNameTouched(true);
    if(!enteredEmailIsValid){
      return;
    }
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    setEnteredName("");
    setEnteredNameTouched(false);

    setEnteredEmail('');
    setEnteredEmailTouched(false);
  };
  const emailInputClass = !emailInputISInvalid ?   "form-control"
  : "form-control invalid";

  const nameInputClasses = !nameInputISInvalid 
    ? "form-control"
    : "form-control invalid";
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

      <div className={emailInputClass}>
        <label htmlFor="email">Your E-mail</label>
        <input
          onChange={emailInputChangeHandler}
          type="email"
          id="email"
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
        {emailInputISInvalid && <p className="error-text">email is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
