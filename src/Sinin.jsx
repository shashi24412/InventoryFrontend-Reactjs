

import React, { useState } from 'react';
import { useAuth } from './Authorization/AuthContext';
import { useNavigate } from "react-router-dom";

function Sinin() {
    const { setUserData } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [allowedPages] = useState([{ role: 'Admin', pages: ['/ItemMaster', "/Store", "/DepartmentIndent", "/DepartmentApproval", "/Dashboard"] }, { role: 'SCM', pages: ['/DepartmentApproval', "/DepartmentIndent", "/Dashboard"] }])

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        // Dummy authentication logic
        if (email === 'Shashi@gmail.com' && password === '1234') {
            alert('Login successful!');
            setUserData({ user: e.target.value, validUser: true, role: 'Admin', allowedPages: allowedPages.filter(x => x.role == "Admin") })
            setError('');
            navigate('/Dashboard')
        }
        else if (email === 'Mohan@gmail.com' && password === '1234') {
            alert('Login successful!');
            setUserData({ user: e.target.value, validUser: true, role: 'SCM', allowedPages: allowedPages.filter(x => x.role == "SCM") })
            setError('');
            navigate('/Dashboard')
        }
        else {
            setUserData({ user: e.target.value, validUser: false })
            setError('Invalid credentials');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Sign In</h2>
                {error && <p style={styles.error}>{error}</p>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f0f2f5',
    },
    form: {
        background: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '300px',
    },
    input: {
        padding: '0.75rem',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    button: {
        padding: '0.75rem',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        fontSize: '1rem',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontSize: '0.9rem',
    },
};

export default Sinin;
