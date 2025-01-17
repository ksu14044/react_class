import React from 'react';

/**
 * 비동기
 * 
 * Promise(resolve, reject)
 * then, catch, finally
 * 
 * async / await
 * try, catch, finally
 */

function App11(props) {
     
    // setTimeout(() => {
    //     console.log("1");
    //     console.log("2");
    //     setTimeout(() => {
    //         console.log("3")
    //     }, 2000);
    // }, 3000);

    //resolve 결정하다
    //reject 거부하다

    const isSuccess = false;
    const isSuccess2 = true;
    
    console.log("1번");

    const p1 = new Promise((resolve, reject)=> {
        console.log("Promise1 생성");

        if(isSuccess) {
            resolve();
        } else {
            reject();
        }

    });

    p1.then(() => {
        console.log("p1 then");
    }).catch(() => {
        console.log("p1 catch 호출");
    });

    console.log("2번");
    
    const p2 = new Promise((resolve, reject)=> {
        console.log("Promise2 생성");
        
        if(isSuccess2) {
            resolve();
        } else {
            reject();
        }
    });
    
    p2.then(() => {
        console.log("p2 then");
    }).then(() => {
        console.log("p2 2번째 then 호출");
    });

    const p3 = new Promise((resolve, reject)=> {
        console.log("Promise3 생성");

        const response = {
            status: 200,
            data: {
                username: "aaa",
                password: "1234",
            }
        }
        
        if(true) {
            resolve({response});
        } else {
            reject();
        }
    });

    p3.then((r)=>{
        console.log(r);
    });
    
    return (
        <div>

        </div>
    );
}

export default App11;