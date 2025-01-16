import React, { useState } from 'react';

function Signup({userList, setUserList}) {

    const [ user , setUser] = useState({
            username: "",
            password: "",
            name: "",
            email: "",
        })
    
    const [ userInput, setUserInput ] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    })
  
    const handleSignUpOnChange = (e) => {
        const { name,  value } = e.target;
    
        setUserInput({
           ...userInput,
            [name]: value,
        });
    
    } 
        
    const handleSignUpOnClick = () => {
        setUser(userInput);
        setUserList([
             ...userList,
             user,
        ]);
 
        alert("가입 완료");
            
        setUserInput({
                username: "",
                password: "",
                name: "",
                email: "",
            });
         
    }
 
    return (
        <div>
             <h1>회원가입</h1>
               <input type="text" onChange={handleSignUpOnChange} name="username" placeholder="username" value={userInput.username}/>
               <input type="password" onChange={handleSignUpOnChange} name="password" placeholder="password" value={userInput.password}/>
               <input type="text" onChange={handleSignUpOnChange} name="name"  placeholder="name" value={userInput.name} />
               <input type="text" onChange={handleSignUpOnChange} name="email" placeholder="email" value={userInput.email}/>
               <div>
                   <button onClick={handleSignUpOnClick}>가입하기</button>
               </div>
        </div>
    );
}

export default Signup;