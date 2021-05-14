import React,{ useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Home.css';


const Home = () => {

    // HOOKS

    const history = useHistory();

    const [dataLogin, setLogin] = useState({
    
        email     : '',
        password  : '', 
        
    });

    const [userData, setUserData] = useState({
        user: ''
    });

    // Reset Form

    const handleSubmit = (e) => { 
        const form = e.preventDefault();
        e.target.reset(); 

        form.reset()
    };

    // Set inputs Value

    const handleState = (event) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
    };


    // Function to Comunicate with Back

    const sendData = async () => {

        // Add data from State to body

        let body = {
            email     : dataLogin.email,
            password  : dataLogin.password
        }
        
        // Axios Call

        let resultLogin = await  axios.post('http://localhost:3001/user/login', body);
        console.log(resultLogin)
        setUserData({
            ...userData, user: resultLogin.data.result
        })
        return setTimeout(() => {history.push('/create-product')}, 1000);

    
    };
    
    console.log(dataLogin)

    return (
        <div className="homeBody">
            <Navbar/>
            <div className="textContainer">
                <h1>Regístrate yempieza a poner a la venta tus productos de forma gratuita!!!!</h1>
            </div>
            <div className="formBody">
                <div className="formContainer">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" 
                            className="form-label">Email address</label>
                            <input type="text"                            
                                className="form-control" 
                                id="input" 
                                aria-describedby="emailHelp"
                                name="email" 
                                onChange={handleState}
                            />
                            <div id="" 
                            className="form-text">
                                Nos preocupa tu privacidad
                            </div>
                        </div>
                        <div className="mb-2 password">
                            <label htmlFor="exampleInputPassword1" 
                            className="form-label">
                                Password
                            </label>
                            <input type="password" 
                                className="form-control" 
                                id="input" 
                                name="password" 
                                onChange={handleState}
                            />
                        </div>
                        <button type="button" 
                            className="btn btn-primary" 
                            onClick={() => sendData()}>
                                Enviar
                        </button>
                    </form>               
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home
