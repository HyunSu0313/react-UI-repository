import React, { useState } from 'react';
import './AdminView.css';
import ItemChange from './ItemChange';
import ItemRegister from './ItemRegister'; // ItemRegister 컴포넌트 임포트

const AdminView = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showItemChangeForm, setShowItemChangeForm] = useState(false);
    const [showItemRegisterForm, setShowItemRegisterForm] = useState(false);
    const [products, setProducts] = useState([
        { id: 1, name: 'blackmalcha', image: 'blackmalcha.jpg', quantity: 10 },
        { id: 2, name: 'corncheese', image: 'corncheese.jpg', quantity: 20 },
        { id: 3, name: 'goroke', image: 'goroke.png', quantity: 15 },
        { id: 4, name: 'goroke2', image: 'goroke2.png', quantity: 12 },
        { id: 5, name: 'cornmayo', image: 'cornmayo.jpg', quantity: 8 },
        { id: 6, name: 'malcha', image: 'malcha.jpg', quantity: 5 },
    ]);

    const handleImageClick = (product) => {
        console.log("Image clicked:", product); // 디버깅을 위한 콘솔 로그
        setSelectedProduct(product);
        setShowItemChangeForm(true);
    };

    const handleCloseForm = () => {
        setSelectedProduct(null);
        setShowItemChangeForm(false);
    };

    const handleRegisterClick = () => {
        setShowItemRegisterForm(true);
    };

    const handleRegisterClose = () => {
        setShowItemRegisterForm(false);
    };

    const handleRegisterProduct = (newProduct) => {
        setProducts([...products, { id: products.length + 1, ...newProduct }]);
    };

    return (
        <div className="admin-view">
            <h2>전체 상품 목록</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-item" onClick={() => handleImageClick(product)}>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p>{product.name}</p>
                    </div>
                ))}
                <div className="product-item">
                    <button className="register-product-button" onClick={handleRegisterClick}>+</button>
                </div>
            </div>
            {showItemChangeForm && selectedProduct && (
                <ItemChange product={selectedProduct} onClose={handleCloseForm} />
            )}
            {showItemRegisterForm && (
                <ItemRegister onClose={handleRegisterClose} onRegister={handleRegisterProduct} />
            )}
        </div>
    );
};

export default AdminView;
