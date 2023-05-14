import React from 'react';

const Menu = ({ onMenuChange }) => {
    
    return (
        <div className='menu-container'>
            <button className='menu-btn' onClick={onMenuChange} value="log">BlackMagic</button>
            <button className='menu-btn' onClick={onMenuChange} value="log">로그조회</button>
            <button className='menu-btn' onClick={onMenuChange} value="management">정보관리</button>
            <button className='menu-btn' onClick={onMenuChange} value="">정보등록</button>
        </div>
    );
};

export default Menu;