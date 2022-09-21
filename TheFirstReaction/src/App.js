import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/dashboard';
const myHTML = `<h1>John Doe</h1>`;

// IN REACT APP THERE ARE ONLY THE JS FILES AND IN THAT JS FILES YOU NEED TO CALL THE 
// FUNCTION THAT ARE MADE. AND ALSO THE HTML PART OF IT.
function App() {

    // Defining a inner function in app funtion

    // const x=(a)=>{
    //     console.log(a)
    //     alert('Clicked');
    // }

    // In react we create components for the app and link it in the app.js file.
// import {HomeComponent} from "./components/homescreen"; Step 1
//             <HomeComponent></HomeComponent> Step 2


    
    return(
        <>
            <LoginScreen></LoginScreen>
            
        </>

    );
  


  
}

export default App;
