import React, { useState } from 'react';
import './ItemChange.css';

const ItemChange = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(product.quantity || 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('수량 수정:', { ...product, quantity });
        onClose();
    };

    return (
        <div className="item-change-form">
            <h2>{product.name} 수량 수정</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    수량:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
                <button type="submit">저장</button>
                <button type="button" onClick={onClose}>취소</button>
            </form>
        </div>
    );
};

export default ItemChange;
