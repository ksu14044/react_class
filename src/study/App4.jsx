import React, { useState } from 'react';
//reactjs code snippet
//material
function App4(props) {
    const [ userInfo, setUserInfo] = useState({
        name: "",
        gender: "",
    });

    const [ inputValue, setInputValue ] = useState({
        name: "",
        gender: "male",
    });


    const handleInputOnChange = (e) => {
        const { name, value } = e.target;

        setInputValue({
           ...inputValue,
           [name]: value, 
        });
    }

    const handleShowNameOnClick = () => {
        setUserInfo({
            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
         });

        setInputValue({
            ...inputValue,
            name: "",
        });
    }
    

    return (
        <div>
            <h1>이름 : {userInfo.name}({userInfo.gender})</h1>
            <input type="text" name="name" onChange={handleInputOnChange} value={inputValue.name}/>
            <input type="radio" id="male" name="gender" checked={inputValue.gender === "male"} onChange={handleInputOnChange} value={"male"} /> 
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" checked={inputValue.gender === "female"} onChange={handleInputOnChange} value={"female"} /> 
            <label htmlFor="female">여</label>
            <button onClick={handleShowNameOnClick}>확인</button>
        </div>
    );
}

export default App4;