import React, { useEffect, useState } from "react";
import DynamicTable from "../Components/DynamicTable";
import Pagination from "../Components/Pagination";
import studentService from "../Services/StudentService"; 
import Title from "../Components/Title";

function Students() {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [studentsPerPage] = useState(15);

    useEffect(() => {
        const fetchData = async () => {
            const data = await studentService.fetchStudents();
            setStudents(data);
        };

        fetchData();
    }, []);

    const currentStudents = studentService.paginateStudents(students, currentPage, studentsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const headers = [
        "registration",
        "name",
        "Mathematics",
        "Portuguese",
        "Biology",
        "Chemistry",
    ];

    return (
        <div className="container mt-4">
            <Title text="Student Grades" /> 

            <DynamicTable
                headers={headers}
                data={currentStudents}
                renderCell={studentService.renderCell} 
            />

            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(students.length / studentsPerPage)}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default Students;
