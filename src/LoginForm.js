import React, { useState } from 'react';

// export default function LoginForm() {
//   const [account, setAccount] = useState({
//     email: '',
//     password: '',
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(account);
//     // handle login logic here
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             aria-describedby="emailHelp"
//             placeholder="Enter email"
//             value={account.email}
//             onChange={(e) =>
//               setAccount({ ...account, email: e.target.value })
//             }
//           />
//           <small id="emailHelp" className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Password"
//             value={account.password}
//             onChange={(e) =>
//               setAccount({ ...account, password: e.target.value })
//             }
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }
// export default function LoginForm() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     return(
//       const {handleSubmit}=this.props;
//       <div className="App">
//         <header className="App-header">
//           <form onSubmit={handleSubmit}>
//             <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
//             <button type="submit">  Submit</button>
//           </form>
//         </header>

//       </div>
//     );

// }