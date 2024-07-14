import React, { useState } from 'react';
import './ItemRegister.css';

const ItemRegister = ({ onClose, onRegister }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { name, quantity, image: 'default.jpg' }; // 기본 이미지를 추가했습니다.
        console.log('상품 등록:', newProduct);
        onRegister(newProduct);
        onClose();
    };

    return (
        <div className="item-register-form">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    상품명:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label>
                    수량:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
                <button type="submit">등록</button>
                <button type="button" onClick={onClose}>취소</button>
            </form>
        </div>
    );
};

export default ItemRegister;
