import React, { useState, useEffect } from 'react';
import { getSortedStudents, paginateStudents } from '../Services/SortedStudentsService'; 
import Pagination from '../Components/Pagination';
import DynamicTable from '../Components/DynamicTable';
import Title from '../Components/Title';

const SortedStudents = () => {
    const [students, setStudents] = useState([]);
    const [strategy, setStrategy] = useState('bubble');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(15);
    const [currentStudents, setCurrentStudents] = useState([]);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
        fetchSortedStudents();
    }, [strategy]);

    useEffect(() => {
        const { currentStudents, totalPages } = paginateStudents(students, currentPage, studentsPerPage);
        setCurrentStudents(currentStudents);
        setTotalPages(totalPages);
    }, [students, currentPage, studentsPerPage]);

    const fetchSortedStudents = async () => {
        setLoading(true);
        try {
            const data = await getSortedStudents(strategy); 
            setStudents(data);
        } catch (error) {
            console.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const headers = ["Registration", "Name", "Average Grade", "Status"];

    const renderCell = (student, header) => {
        if (header === "Registration") {
            return student.registration;
        } else if (header === "Name") {
            return student.name;
        } else if (header === "Average Grade") {
            return (
                ((student.grades.Mathematics +
                    student.grades.Portuguese +
                    student.grades.Biology +
                    student.grades.Chemistry) / 4).toFixed(2)
            );
        } else if (header === "Status") {
            return (
                <span
                    className={`badge ${student.isApproved ? 'bg-success' : 'bg-danger'}`}
                >
                    {student.isApproved ? 'Approved' : 'Failed'}
                </span>
            );
        }
    };

    return (
        <div className="container mt-4">
            <Title text="Sorted Students" />
            <div className="mb-4 d-flex justify-content-between align-items-center">
                <label htmlFor="strategy" className="form-label me-3">
                    Choose sorting strategy:
                </label>
                <select
                    id="strategy"
                    value={strategy}
                    onChange={(e) => setStrategy(e.target.value)}
                    className="form-select w-auto"
                >
                    <option value="bubble">Bubble Sort</option>
                    <option value="quick">Quick Sort</option>
                </select>
            </div>
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <DynamicTable
                    headers={headers}
                    data={currentStudents}
                    renderCell={renderCell}
                />
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default SortedStudents;
