import React, { useState } from 'react';
//reactjs code snippet
//material
function App3(props) {

    const [ name, setName ] = useState("");
    const [ gender, setGender ] = useState("");
    const [ nameInputValue, setNameInputValue ] = useState("");
    const [ genderInputValue, setGenderInputValue ] = useState("male");
    

    const handleNameInputOnChange = (e) => {
        setNameInputValue(e.target.value);
    }

    const handleShowNameOnClick = () => {
        setName(nameInputValue);
        setNameInputValue("");
        setGender(genderInputValue === "male" ? "남" : "여");
    }
    
    const handleGenderInputOnChange = (e) => {
        setGenderInputValue(e.target.value);
    }

    return (
        <div>
            <h1>이름 : {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputValue}/>
            <input type="radio" id="male" name="gender" checked={genderInputValue === "male"} onChange={handleGenderInputOnChange} value={"male"} /> 
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" checked={genderInputValue === "female"} onChange={handleGenderInputOnChange} value={"female"} /> 
            <label htmlFor="female">여</label>
            <button onClick={handleShowNameOnClick}>확인</button>
        </div>
    );
}

export default App3;