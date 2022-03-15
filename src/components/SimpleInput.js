import { useRef, useState,useEffect } from "react";


const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setenteredNameIsValid]=useState(true);
  useEffect(()=>{
    if(enteredNameIsValid){
      console.log('yu hu')
    }
  },[enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const formSubmissonHandler = (event) => {
    event.preventDefault();
    if(enteredName.trim()=== ''){
      setenteredNameIsValid(false)
      return;
    }
    setenteredNameIsValid(true);
    console.log(enteredName);
    console.log(nameInputRef.current.value)
    setEnteredName('');
   

  };
  const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmissonHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
      
          ref={nameInputRef}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
          value={enteredName}
         
        />
         {!enteredNameIsValid && <p className="error-text">name is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
