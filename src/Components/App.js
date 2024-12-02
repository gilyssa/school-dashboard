import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Students from "../Pages/Students";
import ApprovedFailed from "../Pages/ApprovedFailed";
import BestBySubject from "../Pages/BestBySubject/BestBySubject";
import StudentSearch from "../Pages/StudentSearch";
import SortedStudents from "../Pages/SortedStudents";
import Sidebar from "./Sidebar/Sidebar";
import './app.css';

function App() {
    return (
        <Router>
            <div className="d-flex vh-100">
                {/* Sidebar: largura fixa com classes do Bootstrap */}
                <div className="sidebar bg-primary text-white col-2">
                    <Sidebar />
                </div>

                {/* Content: ocupa o restante da tela */}
                <div className="content flex-grow-1">
                    <div className="vh-100 p-2 p-md-4 d-flex justify-content-center align-items-center">
                        <div className="content-box w-100 h-100 rounded-3">
                            <Routes>
                                <Route path="/" element={<Students />} />
                                <Route path="/approved-failed" element={<ApprovedFailed />} />
                                <Route path="/best-by-subject" element={<BestBySubject />} />
                                <Route path="/search" element={<StudentSearch />} />
                                <Route path="/sorted" element={<SortedStudents />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
