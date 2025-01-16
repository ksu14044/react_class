import React, { useState } from 'react';

/**
 * 회원 정보를 입력받아 userList에 user객체들을 가입하기 버튼을 누를 때마다 저장한다.
 * 로그인 정보를 입력받아 userList에 해당 username이 있는지 확인하고
 * 없으면 '사용자 정보를 다시 확인하세요 메세지 출력(alert)
 * 있으면 비밀번호가 일치하는지 검사
 * 비밀번호가 일치하지 않으면 '사용자 정보를 다시 확인하세요 메세지 출력
 * 일치하면 이름(이메일)님 환영합니다 출력
 */





function App5(props) {

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

    

    const [ userList, setUserList ] = useState([]);

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
        } else if (foundUser[0].password !== userOutput.password) {
            alert("사용자 정보를 다시 확인하세요.")
            return;
        } else {alert(`${foundUser.username}(${foundUser.email})님 환영합니다.`)}
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
            <h1>로그인</h1>
            <input type="text" onChange={handleSignInOnChange} name="username" placeholder="username" value={userOutput.username}/>
            <input type="password" onChange={handleSignInOnChange} name="password" placeholder="password" value={userOutput.password}/>
            <div>
                <button onClick={handleSignInOnClick}>로그인</button>
            </div>
        </div>
    );
}

export default App5;