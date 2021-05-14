import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Register.css';

const Register = () => {

    // HOOKS

    const history = useHistory();

    const [dataRegister, setDataRegister] = useState({
    
        userName   : '',
        email      : '',
        password   : '', 
    });

    const [register, setRegister] = useState({
        userRegister : ''
    });

     // Set inputs Value

    const handleState = (event) => {
        setDataRegister({...dataRegister, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
    };
    
    // Function to Comunicate with Back

    const sendData = async () => {
        
        // Add data from State to body

        let body = {
            userName   : dataRegister.userName,
            email      : dataRegister.email,
            password   : dataRegister.password, 
        }

        console.log(body)
        // Axios Call

        let resultRegister = await axios.post('http://localhost:3001/user', body);
        setRegister({
             ...register, userRegister: resultRegister.data
        })
        setTimeout(() => {history.push('/')}, 1000);

    };


        // Reset Form

        const handleSubmit = (e) => { 
            const form = e.preventDefault();
            e.target.reset(); 
    
        };

    return (
        <div className="registerBody">
            <div className="header">
                <Navbar/>
            </div>
            <div className="spaceUnderHeader"></div>
            <div className="formBody">
                <div className="registerContainer"> 
                    <form onSubmit={handleSubmit}
                        className="row g-3 needs-validation" noValidate>
                        <div className="col-md-4">
                            <label className="form-label">
                                userName
                            </label>
                            <input type="text" 
                                className="form-control" 
                                id="input" 
                                name="userName" 
                                onChange={handleState}
                            />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">
                                Email
                            </label>
                            <div className="input-group has-validation">
                                <input type="text" 
                                    className="form-control" 
                                    id="input" 
                                    name="email" 
                                    onChange={handleState}
                                />
                                <div className="invalid-feedback">
                                    Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">
                                Password
                            </label>
                            <input type="password" 
                                className="form-control" 
                                id="input" 
                                name="password" 
                                onChange={handleState}
                            />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        <button type="button" 
                            className="btn btn-primary" 
                            onClick={() => sendData()}>
                                Enviar
                        </button>
                    </form>            
                </div>
            </div>
            <div className="underForm"></div>
            <Footer/>
        </div>
    )
}

export default Register
