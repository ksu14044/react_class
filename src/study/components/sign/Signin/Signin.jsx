import React, { useState } from 'react';

function Signin({userList}) {

     const [ userOutput , setUserOutput]  = useState({
            username: "",
            password: "",
        })
    
    const handleSignInOnChange = (e) => {
        const {name, value} = e.target;

        setUserOutput({
            ...userOutput,
            [name]: value,
        })
    }

    const handleSignInOnClick = () => {
        const foundUser = userList.find(user => user.username === userOutput.username);
        if(!foundUser) {
            alert("사용자 정보를 다시 확인하세요.");
            return;
        } 
        if (foundUser.password !== userOutput.password) {
            alert("사용자 정보를 다시 확인하세요.")
            return;
        } else {alert(`${foundUser.username}(${foundUser.email})님 환영합니다.`)}
    }

    return (
        <div>
            <h1>로그인</h1>
            <input type="text" onChange={handleSignInOnChange} name="username" placeholder="username" value={userOutput.username}/>
            <input type="password" onChange={handleSignInOnChange} name="password" placeholder="password" value={userOutput.password}/>
            <div>
                <button onClick={handleSignInOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default Signin;