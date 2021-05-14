import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './ShowProduct.css';

const ShowProduct =  () => {

    // HOOKS

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        
        showProduct()

    }, [])


    const showProduct = async () => {

        let result = await axios.get('http://localhost:3001/product');
    
        console.log(result.data.result)
        setUserData(result.data.result)
    };

    const deleteProduct = async (id) => {

        const selectUser = window.confirm('You are about to delete this rent, are you sure?');

        if(selectUser === true){
            const deleteMethod = await axios.delete(`http://localhost:3001/product/${id}`)
            showProduct()
            console.log(deleteMethod)
        };

    };

    console.log(userData)


    return (
        <div>
            <Navbar/>
                <div className="show-productContainer">
                    <div className="underNav"></div>
                    <div className="drawProduct">
                        {
                            userData?.map(product => 
                                <div className="card" key={product._id}>
                                    <div>
                                        <img className="picture" src={product.picture} alt="pictura"></img>
                                    </div>
                                    <div className="name">
                                        {product.productName}
                                    </div>
                                    <div className="name">
                                        {product.category}
                                    </div>
                                    <div className="name">
                                        {product.price}
                                    </div>
                                    <div className="name">
                                        {product.description}
                                    </div>
                                    <div className="col-12">
                                            <button type="submit" className="btn btn-primary" onClick={() => deleteProduct(product._id)}>Delete Product</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            <Footer/>
        </div>
    )
};

export default ShowProduct
