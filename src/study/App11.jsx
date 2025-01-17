import React from 'react';

/**
 * 비동기
 * 
 * Promise(reslove, reject)
 * then, catch, finally
 * 
 * asyne / await
 * try, catch, finally
 */

function App11(props) {
    
    setTimeout(() => {
        console.log("1");
        console.log("2");
        setTimeout(() => {
            console.log("3")
        }, 2000);
    }, 3000);
    
    return (
        <div>

        </div>
    );
}

export default App11;