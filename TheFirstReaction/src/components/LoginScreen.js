import React, { Component } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "./slice";
import { useSelector } from "react-redux";
import '../css/home.css'
import '../css/loginscreendesign.css'
import '../css/loginuitwo.css'






// function callLoginJS(){
//     var url = "http://localhost:9090/swiggy/authJWT";

//     var Username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;
//     const inputLoginData = JSON.stringify({"username": Username, "password": password});


//     let headers = new Headers();

//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     headers.append('Access-Control-Allow-Origin', '*');
//     headers.append('Access-Control-Allow-Credentials', 'true');
//     let dataReceived;



//     fetch(url, {
//         method: 'POST',
//         headers,
//         body: inputLoginData
//     })
//         .then(resp => {
//             if (resp.status === 200) {
//                 return resp.json()
//             } else {
//                 console.log("Status: " + resp.status)
//                 return Promise.reject("server")
//             }
//         })
//         .then(dataJson => {
//             // MAIN TASK LEFT IS NOW TO PARSE THE RESPONSE FROM THE API.

//             // dataReceived = JSON.parse(dataJson);
//             console.log(dataJson)

//         })
//         .catch(err => {
//             alert(err)

//             if (err === "server") return
//             console.log(err)

//         })

//     console.log(`Received: ${dataReceived}`)

// }


const LoginScreen = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.token);
    const showAlert = (x) => {
        alert('Alert from homescreen.js')
    }

    const getFormDataJS = (a) => {

        var Username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        alert("Entered username is ::  " + Username + " Entered Password is ::" + password)

    }
    const callloginAxious = async () => {
        var Username = document.getElementById('username').value;
        var Password = document.getElementById('password').value;
        await axios({
            url: "http://localhost:9090/swiggy/authJWT",
            method: "post",
            data: { username: Username, password: Password }
        }).then(res => {
            var responseData = res.data;
            var authToken = responseData._token;
            dispatch(login(authToken))
            alert(token)
            // alert(res.data.data.userEmail)
        }).catch(err => {
            if(err.response){
                alert("Incorrect username or password.")

            }
          

            
        })

    }
    return (
        <>
            <div>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>RedEyesNCode</title>
                <link href="https://fonts.googleapis.com/css2?family=Muli:wght@400;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="./assets/css/style-with-prefix.css" />
                <style dangerouslySetInnerHTML={{ __html: "\n        .srouce{\n            text-align: center;\n            color: #ffffff;\n            padding: 10px;\n        }\n    " }} />
                <div className="main-container">
                    <div className="form-container">
                        <div className="srouce"><a title="Link to github Profile" href="https://github.com/RedEyesNCode">Github/RedEyesNCode</a></div>
                        <div className="form-body">
                            <h2 className="title">Log in to swiggy admin</h2>
                            <br></br>
                            <br></br>

                            <form className="the-form">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="email" id="username" placeholder="Enter your email" required/>
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" required />
                                <input type="submit" defaultValue="Log In" onClick={(e) => callloginAxious(e.target)} />
                            </form>
                        </div>{/* FORM BODY*/}
                        <div className="form-footer">
                            <div>
                                <span>This app made using reactJS.</span>
                            </div>
                        </div>{/* FORM FOOTER */}
                    </div>{/* FORM CONTAINER */}
                </div>
            </div>

        </>
    )
}
export default LoginScreen



// export class HomeComponent extends Component {

//     // Render tag is also used.
//     render() {

//         return (

//             <div>


//                 {/* THIS TAG IS USED TO WRITE THE HTML IN JS FILE. */}
//                 { }
//                 <div>
//                     <header>
//                         <link rel="stylesheet" href="home.css" />
//                         <h4>Login to admin panel.</h4>
//                     </header>
//                     <form id="form">
//                         <label htmlFor="username">Username : </label>
//                         <input type="text" name="inputusername" id="username" required />
//                         <br /><br />
//                         <label htmlFor="password">password : </label>
//                         <input type="password" id="password" name="passwordusername" required />
//                         <br /><br />
//                         <br /><br />
//                         <input type="button" defaultValue="Alert me the form data" onClick={(e) => getFansList(e.target)} />
//                     </form> { }
//                 </div>
//             </div>
//         )
//     }

// }