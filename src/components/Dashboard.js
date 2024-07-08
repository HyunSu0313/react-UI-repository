import React, { useEffect, useState } from 'react';
import api from '../api';
import AdminView from './AdminView';
import CustomerView from './CustomerView';
import './Dashboard.css';
import logo from './logo.png'; // 로고 이미지 경로에 맞게 수정

const Dashboard = () => {
    const [member, setMember] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMember = async () => {
            try {
                const response = await api.get('/member');
                setMember(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching member data', error);
                setLoading(false);
            }
        };

        fetchMember();
    }, []);

    const handleLogout = async () => {
        try {
            await api.post('/logout');
            window.location.href = '/'; // 로그아웃 후 홈 페이지로 이동
        } catch (error) {
            console.error('Error logging out', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="dashboard">
            <header className="header">
                <div className="logo-container">
                    <img src={logo} alt="쇼핑몰 로고" className="logo" />
                </div>
                <h1 className="shop-name">Online Shop</h1>
            </header>
            <div className="welcome-container">
                <div className="welcome-box">
                    <h2>{member.name}님 환영합니다!</h2>
                    <button onClick={handleLogout}>로그아웃</button>
                </div>
            </div>
            <div className="search-container">
                <div className="search-input">
                    <input type="text" className="search-input" placeholder="상품을 검색하세요"/>
                </div>
                <div className="search-box">
                    <button>검색</button>
                </div>
            </div>
            <main className="main-content">
                {member.grade === 'ADMIN' ? <AdminView/> : <CustomerView/>}
            </main>
        </div>
    );
};

export default Dashboard;
