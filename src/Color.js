import React, { useState } from 'react';

// export default function Color(){
//     const[img,setImage]=useState("red");
//     return (
//         <>
//         <button
//         type="button"
//         onclick={()=>setImage("mayanh1.jpg")}
//         >Bulue</button>
//                 <button
//         type="button"
//         onclick={()=>setImage("mayanh2.jpg")}
//         >Red</button>
//                 <button
//         type="button"
//         onclick={()=>setImage("mayanh2.jpg")}
//         >Pink</button>
//                 <button
//         type="button"
//         onclick={()=>setImage("mayanh1.jpg")}
//         >Green</button>
//         </>
//     )
// }

export default function Test() {
        const [img, setImage] = useState("mayanh1.jpg");
        return (
          <div>
            <button type="button" onClick={() => setImage("mayanh3_3.jpg")}>
              blue{" "}
            </button>
            <button type="button" onClick={() => setImage("mayanh2.jpg")}>
              red
            </button>
            <button type="button" onClick={() => setImage("mayanh3.jpg")}>
              yellow
            </button>
            <button type="button" onClick={() => setImage("mayanh3_2.jpg")}>
              red
            </button>
            <img src={`images/${img}`} alt="selected" />
          </div>
        );
      }
      