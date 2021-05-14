import axios from 'axios';
import { connect } from 'react-redux';
import { LOGIN } from "../../redux/Types/customerType";
import { ADMINLOGIN } from "../../redux/Types/adminType";
import { useHistory } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import handmade3 from '../../assets/pictures/handmade3.jpg';
import Footer from '../../components/Footer/Footer'


import './Login.css';


const Login = (props) => {

    const history = useHistory();

    const [dataLogin, setLogin] = useState({
    
        email     : '',
        password  : '', 
        userType   : 'Client'
    });

    const handleState = (event, props) => {
        setLogin({...dataLogin, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
      };

    const showPassword = () => {

        let type = document.getElementById("myInput");
            if (type.type === "password") {
            type.type = "text";
            } else {
            type.type = "password";
            }
    }

     const handleSubmit = (e) => { 
        e.preventDefault();
        e.target.reset(); 
    }

    
    const sendData = async () => {

        try {

            let body = {
                email     : dataLogin.email,
                password  : dataLogin.password
            }
            
            if(dataLogin.userType === 'Client') {
                let resultLogin = await  axios.post('http://localhost:3000/customers/login', body);
                props.dispatch({type: LOGIN, payload: resultLogin.data})
                return setTimeout(() => {history.push('/')}, 100);

            } else {
                const resultAdmin = await axios.post('http://localhost:3000/admins/login', body)
                props.dispatch({type: ADMINLOGIN, payload: resultAdmin.data});
                return setTimeout(() => {history.push('/home-admin')}, 100);
            }

        }catch (error) {

            console.log(error, 'Email or password not found')

        }
    }
  
    return (
        <div className="loginBody">
            <div>
                <img className="handMade2" src={handmade3} alt="handmade3"></img>
            </div>
            <Footer/>
        </div>
    );
};



export default connect()(Login);