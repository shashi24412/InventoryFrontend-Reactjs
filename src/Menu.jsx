import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Authorization/AuthContext';

const Menu = () => {
    // const { userData } = useAuth();
    return (
        <nav>
            <ul style={{ display: 'flex', gap: '10px' }}>
                <li><Link to="/ItemMaster">Item Master</Link></li>
                <li><Link to="/Store">Store</Link></li>
                <li><Link to="/DepartmentIndent">Department Indent</Link></li>
                <li><Link to="/DepartmentApproval">Department Approval</Link></li>
                <li><Link to="/JSDashboard">Javascript Tutorial</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
