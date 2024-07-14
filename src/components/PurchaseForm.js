import React, { useState } from 'react';
import './PurchaseForm.css';

const PurchaseForm = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('credit-card');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`상품: ${product.name}\n수량: ${quantity}\n결제 방법: ${paymentMethod}`);
        onClose();
    };

    return (
        <div className="purchase-form-container">
            <div className="purchase-form-backdrop" onClick={onClose}></div>
            <div className="purchase-form">
                <h3>구매하기 - {product.name}</h3>
                <form onSubmit={handleSubmit}>
                    <label>
                        구매 갯수:
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            min="1"
                            required
                        />
                    </label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="credit-card"
                                checked={paymentMethod === 'credit-card'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            신용 카드
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="kakao-pay"
                                checked={paymentMethod === 'kakao-pay'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            카카오페이
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="toss-pay"
                                checked={paymentMethod === 'toss-pay'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            토스페이
                        </label>
                    </div>
                    <button type="submit">OK</button>
                </form>
            </div>
        </div>
    );
};

export default PurchaseForm;
