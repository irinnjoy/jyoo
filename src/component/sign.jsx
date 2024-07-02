import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Sign ()
    {
        const Navigate=useNavigate();
        const[name,setName]=useState('');
        const[email,setEmail]=useState('');
        const[pass1,setPass1]=useState('');
        const[pass2,setPass2]=useState('');
        const[error,setError]=useState('');
        function handleChange1(e){
            setPass1(e.target.value)

        }
        function handleChange2(e){
            setPass2(e.target.value)
        }
        function handleChangename(e){
            setName(e.target.value)
        }
        function handleChangeemail(e){
            setEmail(e.target.value)
        }
        function handleSign(){
            if(pass1==pass2){
                setError('Signed in ')
                // Navigate('/login')
                axios.post('http://localhost:5001/Sign',{
                    name,
                    email,
                    pass1
                })

            }
                else{
                    setError('Error')
                }
        }
    return(
        <div class="all" style={{"backgroundImage":'url(img1.jpg)',height:"100vh",backgroundSize:"Cover"}}>
        <div class="content" style={{"display": "list-item",
        "justifyContent": "center",
        "paddingLeft": "40%",
        "width": "max-content",
        "position": "relative",
        "align": "center",
        "paddingTop": "30px"}}>
        <div class="a" >
            <h1>Sign Up</h1>
            <div class="b" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "30px",
                "justifyContent": "space-between"}}>
                <label for="">Name</label>
                <input type="text" placeholder="Enter the name" onChange={handleChangename}/>
            </div>
            <div class="c" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "10px",
                "justifyContent": "space-between"}}>
                <label for="">Email</label>
                <input type="Email" placeholder="Enter the email"  onChange={handleChangeemail}/>
            </div>
            <div class="d" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "10px",
                "justifyContent": "space-between"}}>
                <label for="">Password</label>
                <input type="password" placeholder="Enter the password" onChange={handleChange1} />

            </div>
            <div class="e" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "10px",
                "justifyContent": "space-between"}}>
                <label for="">Re-enter password</label>
                <input type="password" placeholder="Re-enter password" onChange={handleChange2}  />
            </div>
            <div class="f" style={{ "paddingLeft": "280px",
                "paddingTop": "10px"}}>
                <button onClick={handleSign}> Sign In</button>
            </div>
            <div class="g">
                <p>If you have already registered </p>
                <a href="/login"  style={{"color":"black"}}>Login</a>
                <h1>{error}</h1>
            </div>

        </div>
    </div>
    </div>


    )
}
export default Sign;