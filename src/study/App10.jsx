import React, { useEffect, useState } from 'react';

function App10(props) {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(100);
    
    const unMount = () => {
        console.log("장착해제됨");
    }
    
    const mount = () => {
        console.log("장착됨2");
        return unMount;
    }

    useEffect(mount);

    useEffect( () => {
        console.log(num1);
        setNum2(num1 + 100);
    }, [num1])

    useEffect( () => {
        console.log(num2)
    }, [num2])

    useEffect(() => {
        console.log("마운트!!")
    }, [])

    useEffect(() => {
        console.log(num1);
        console.log(num2);
    }, [num1, num2]);

    const onClick = () => {
        
        setNum1(num1 + 10);

    }

    return (
        <div>
            <h1>Num 1 : {num1}</h1>
            <h1>Num 2 : {num2}</h1>

            <button onClick={onClick}>클릭</button>
        </div>
    );
}

export default App10;