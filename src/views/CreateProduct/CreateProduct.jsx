import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import './CreateProduct.css';


const CreateProduct = (props) => {

    // HOOKS

    const history = useHistory();


    const [product, setProduct] = useState ({

        productName : '',
        category : '',
        price : '',
        description : '',
        picture : ''
    });
    
    const [showProduct, setShowProduct] = useState({
        product : []
    });

     // Set inputs Value

    const handleState = (event) => {
        setProduct({...product, [event.target.name]: event.target.tyoe === 'number' ? + event.target.value : event.target.value})
    };

    // Function to Comunicate with Back

    const sendProduct = async () => {

        // Add data from State to body

        let body = {
            
            category : product.category,
            productName : product.productName,
            description : product.description,
            price : product.price,
            picture : product.picture
        }
        
         // Axios Call

        let saveProduct = await axios.post('http://localhost:3001/product', body);
        console.log(saveProduct)
        setShowProduct({
            ...showProduct,product: saveProduct.data.result
        });  

        setTimeout(() => {history.push('/show-product')}, 1000);

    };

        // Reset Form

        const handleSubmit = (e) => { 
            const form = e.preventDefault();
            e.target.reset(); 
    
        };
    

    return (
        <div className="createProductContainer">
            <Navbar/>  
            <div className="spaceUnderH1">
                <h1>Crea Productos para tu Web Fácilmente y empieza a ganar dinero !!!!</h1>
            </div>
            <div className="createProductBody">
                <div className="productForm">
                    <form onSubmit={handleSubmit} 
                        className="column g-1">
                        <div className="col-6">
                            <label htmlFor="inputAddress" 
                                className="form-label">
                                Product Name
                            </label>
                            <input type="text" 
                            className="form-control" 
                                id="inputAddress" 
                                placeholder="write name"
                                name="productName"
                                onChange={handleState}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputCity" 
                            className="form-label">
                                Price
                            </label>
                            <input type="text" 
                                className="form-control" 
                                id="inputCity"
                                name="price"                                
                                onChange={handleState}
                            />
                        </div>
                        <div className="col-md-6">
                                <label htmlFor="inputState" 
                                className="form-label">
                                    Category
                                </label>
                                <select id="inputState" 
                                    className="form-select"
                                    name="category"
                                    onChange={handleState}
                                    defaultValue={'DEFAULT'}
                                >
                                    <option selected>Choose...</option>
                                    <option>Deportes</option>
                                    <option>Jugetes</option>
                                    <option>Ropa</option>
                                    <option>Cine/tv</option>
                                    <option>informática</option>
                                    <option>hogar</option>
                                </select>
                            </div>                        
                            <div className="uploadContainer">
                            <div className="col md-4">
                                <label htmlFor="formFileMultiple" 
                                className="form-label">
                                    Picture
                                </label>
                                <input className="form-control" 
                                    type="text" 
                                    id="formFileMultiple" 
                                    multiple
                                    name="picture"
                                    onChange={handleState}
                                />
                            </div>
                        </div>                        
                        <div class="form-floating">
                            <div>
                                <label htmlFor="floatingTextarea2">Description</label>
                                <textarea class="form-control" 
                                        placeholder="Leave a comment here" 
                                        id="floatingTextarea2" 
                                        style={{height: '15em', width: '20em'}}
                                        name="description"
                                        onChange={handleState}
                                    >
                                </textarea>
                            </div>
                        </div> 
                        <div className="spaceBtw"></div>                        
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" onClick={() => sendProduct()}>Create Product</button>
                        </div>
                    </form>
                </div>
                <div className="dataContainer">
                    Producto
                    <div className="data">Category: {product.category}</div>
                    <div className="data">Product Name: {product.name}</div>
                    <div className="data">Price: {product.price} Euros</div>
                    <div className="data"><img scr={product.picture} alt="pic"></img></div>
                    <div className="data">Description: {product.description}</div>
                </div>
            </div>
        </div>
       
    )
}

export default CreateProduct
