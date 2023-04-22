import React, {useState } from 'react';

// class Hook extends Component {
//     state={
//         count:0
//     };
//     setCount=()=>{
//         this.setState({count:this.state.count+1});
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.setCount}>{this.state.count}Count Up To The Moon</button>
//             </div>
//         );
//     }
// }

// export default Hook;


export default function Test(){
    const[count,setCount]= useState(0);
    return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );

}