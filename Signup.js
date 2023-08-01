import "./Signupstyle.css"
import React,{useState} from 'react'

export default function Signup() {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const [message, setMessage] = useState('');

    const handleRegister = async () => {
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
    
        const data = await response.json();
        setMessage(data.message);
      };

  return (
    <div>
        <form>
            <div style={{padding:"1rem"}}>
        <label style={{marginRight:"2rem"}}>Email</label>
        <input className="name" placeholder="Example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div style={{padding:"1rem"}}>
        <label style={{marginRight:"1rem"}}>Password</label>
        <input className="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        </form>
        <div className="btn">
        <button className="submit" onClick={handleRegister}>SUBMIT</button>
        {message && <p>{message}</p>}
        </div>
    </div>
  )
}
