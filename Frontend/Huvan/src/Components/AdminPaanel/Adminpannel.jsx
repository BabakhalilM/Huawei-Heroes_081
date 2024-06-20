import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Adminp.css';

const Adminpannel = () => {
    const [products, setProducts] = useState([]);
    const [productForm, setProductForm] = useState({ name: '', price: '', image: '' });
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://huawei-heroes-081-5.onrender.com/Cards');
            const filteredProducts = response.data.filter(product => product.id > 238);
            setProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
            alert('Failed to fetch products. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductForm({ ...productForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            const { id, ...productData } = productForm; 
            if (isEditing) {
                response = await axios.put(`https://huawei-heroes-081-5.onrender.com/Cards/${productForm.id}`, productData);
                setProducts(products.map(product => product.id === productForm.id ? response.data : product));
                alert('Product updated successfully');
            } else {
                response = await axios.post('https://huawei-heroes-081-5.onrender.com/Cards', productData);
                setProducts([...products, response.data]);
                alert('Product added successfully');
            }
            setProductForm({ name: '', price: '', image: '' });
            setIsEditing(false);
        } catch (error) {
            console.error('Error submitting product:', error);
            alert('Failed to submit the product. Please try again.');
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://huawei-heroes-081-5.onrender.com/Cards/${id}`);
            if (response.status === 200 || response.status === 204) {
                setProducts(products.filter(product => product.id !== id));
                alert('Product deleted successfully');
            } else {
                console.error(`Unexpected response status: ${response.status}`);
                alert('Failed to delete the product. Please try again.');
            }
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('Error deleting the product. Please try again.');
        }
    };

    const handleEdit = (product) => {
        setProductForm(product);
        setIsEditing(true);
    };

    return (
        <div className="product-panel">
            <h1>Admin Panel</h1>
            <form onSubmit={handleSubmit} className="product-form">
                <input
                    type="text"
                    name="name"
                    value={productForm.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                />
                <input
                    type="number"
                    name="price"
                    value={productForm.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <input
                    type="text"
                    name="image"
                    value={productForm.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                />
                <button style={{width:"250px",borderRadius:"15px",margin:"auto",border:"1px solid blue"}} type="submit">{isEditing ? 'Update Product' : 'Add Product'}</button>
                {isEditing && <button style={{width:"250px",borderRadius:"15px",margin:"auto"}} type="button" className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>}
            </form>
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <div style={{display:"flex",flexDirection:"row",columnGap:"10px",justifyContent:"center"}}>
                            <button onClick={() => handleEdit(product)}>Edit</button>
                            <button onClick={() => handleDelete(product.id)} className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Adminpannel;
