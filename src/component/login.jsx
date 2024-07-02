 import React from 'react';
import axios  from 'axios';
import { useState } from 'react';

function Login ()
    {
        const[email,setEmail]=useState('');
        const[pass1,setPass1]=useState('');

        function handleChangeemail(e){
            setEmail(e.target.value)
        }

        function handleChangepass(e){
            setPass1(e.target.value)
        }
      async  function handleLogin(){
            const response=  await axios.post('http://localhost:5001/login',{
                email,
                pass1
            })
            console.log(response);
            
        }
    return(
        <div class="contents" style={{"backgroundImage":'url(img3.jpg)',height:'100vh',backgroundSize:'cover'}}>
        <div class="content" style={{"display": "list-item",
                "justifyContent": "center",
                "marginInline":'auto',
                "width": "max-content",
                "position": "relative",
                "align": "center",
                "paddingTop": "30px"
                }}>
        <h1 class="head" style={{textAlign:'center'}}>LOGIN</h1   >
        
        <div class="a" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "30px",
                "justifyContent": "space-between"}}>
            <label for="">Email</label>
            <input type="Email" placeholder="Enter the email" onChange={handleChangeemail} />
        </div>
        <div class="b" style={{"padding": "auto",
                "display": "flex",
                "paddingTop": "10px",
                "justifyContent": "space-between"}}>
            <label for="">Password</label>
            <input type="password" placeholder="Enter the password" onChange={handleChangepass} />
        </div>
        <div class="c" style={{ "paddingLeft": "230px",
                "paddingTop": "10px"}}><button onClick={handleLogin}>Login</button></div>
        <div class="d">
            <p>If you have not registered</p>
            <a href="/Sign" style={{"color":"black"}}>Signup</a>
        </div>
        <div class="e" style={{}}>
            <p>Forgot your password?</p>
            <a href="/Forgot" style={{color:"black"}}>Forgot Password</a>
        </div>
    </div>
    </div>
    )
}

export default Login;