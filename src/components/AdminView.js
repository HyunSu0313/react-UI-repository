import React from 'react';
import './AdminView.css';

const AdminView = () => {
    // 상품 등록 및 관리 기능 구현
    return (
        <div className="admin-view">
            <h2>전체 상품 목록</h2>
            <div className="product-list">
                {/* 상품 리스트 컴포넌트 */}
            </div>
            <div className="product-actions">
                {/* 상품 등록 및 수정 폼 */}
            </div>
        </div>
    );
};

export default AdminView;
