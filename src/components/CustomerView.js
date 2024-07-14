import React, {useState} from 'react';
import './CustomerView.css';
import PurchaseForm from "./PurchaseForm";

const CustomerView = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        { id: 1, name: 'blackmalcha', image: 'blackmalcha.jpg' },
        { id: 2, name: 'corncheese', image: 'corncheese.jpg' },
        { id: 3, name: 'goroke', image: 'goroke.png' },
        { id: 4, name: 'goroke2', image: 'goroke2.png' },
        { id: 5, name: 'cornmayo', image: 'cornmayo.jpg' },
        { id: 6, name: 'malcha', image: 'malcha.jpg' },
    ];

    const handleImageClick = (product) => {
        console.log("Image clicked:", product); // 디버깅을 위한 콘솔 로그
        setSelectedProduct(product);
    };

    const handleCloseForm = () => {
        setSelectedProduct(null);
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
            </div>
            {selectedProduct && (
                <PurchaseForm product={selectedProduct} onClose={handleCloseForm} />
            )}
        </div>
    );
};

export default CustomerView;
