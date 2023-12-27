import React from 'react'
function User(){
    function apple(){
        alert("hello world")
    }


return(
    <div className="App">
    
    <h1>hello world!</h1>
    <h4>USer component</h4>
    <button onClick={apple}>click me</button>
    </div>
    
)
}

export default User;