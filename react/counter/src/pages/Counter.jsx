import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

// const Counter = () => {
//     let count = 0;
//     function increment() {
//       count++;
//     }
//     function decrement() {
//       count--;
//     }
//   return (
//     <div>
//       <p>count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }



const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    
    function decrement() {
        setCount(count - 1);
    }   


    const navigate = useNavigate();
    const goToUserList = () => {
        navigate('/userlist');
    };


    return (
        <>
            <div>
                <p>count: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>





            <button onClick={goToUserList}>Go to user List</button>
        </>
    )
}
export default Counter