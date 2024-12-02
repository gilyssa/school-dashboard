import React from 'react';
import { Link } from 'react-router-dom';
import "font-awesome/css/font-awesome.min.css";
import './sidebar.css';

const sidebarItems = [
    { to: '/', icon: 'fa-tachometer-alt', label: 'Students' },
    { to: '/approved-failed', icon: 'fa-check-circle', label: 'Pass and Fail' },
    { to: '/best-by-subject', icon: 'fa-graduation-cap', label: 'Best by Subject' },
    { to: '/search', icon: 'fa-search', label: 'Student Survey' },
    { to: '/sorted', icon: 'fa-sort-amount-up', label: 'Sorted Students' },
];

function Sidebar() {
    return (
        <div className="d-flex flex-column align-items-center w-100 text-light p-4 p-md-2">
            <h2 className="name-sidebar mb-3 d-none d-md-block">Ifficient School</h2>
            <ul className="list-unstyled w-100 p-0">
                {sidebarItems.map((item, index) => (
                    <li key={index} className="mb-3 w-100 text-center">
                        <Link
                            to={item.to}
                            className="d-flex align-items-center text-decoration-none text-light fs-5 p-3 w-100 text-center rounded justify-content-center"
                        >
                            <i className={`fas ${item.icon} me-2 fs-5`}></i>
                            <span className="d-none d-md-inline">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
