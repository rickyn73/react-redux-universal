import React from 'react';


const Home = () =>{
    return <div>Home Component

        <button onClick={()=> console.log("I am called")}> Click me</button>
    </div>
}

export default {
    component:Home
}; 