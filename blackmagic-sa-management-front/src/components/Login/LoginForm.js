import React, { useState } from 'react';

const LoginForm = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangePW = (e) => {
        setPw(e.target.value);
    };

    const onLogin = () => {
        
    }

    return (
        <div>
            <h1>BlackMagic</h1>
            <form>
                <input type='text' onChange={onChangeId} />
                <input type='password' onChange={onChangePW} />
                <button onClick={onLogin}>login</button>
            </form>
        </div>
    );
};

export default LoginForm;