import React, { useState } from "react";

function App() {
    let now = new Date().toLocaleTimeString();

    // destructuring the useState
    const [time, setTime] = useState(now); // set the starting value

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime); // we should give this function a new time to update
        setInterval(newTime);
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    );
}

export default App;
