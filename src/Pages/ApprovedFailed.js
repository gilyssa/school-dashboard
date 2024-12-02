import React, { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import { Tab, Tabs } from "react-bootstrap";
import DynamicTable from "../Components/DynamicTable";
import Title from "../Components/Title";
import { getStudents, getPaginatedData } from "../Services/ApprovedFailedService";

function ApprovedFailed() {
    const [students, setStudents] = useState({ approved: [], failed: [] });
    const [currentApprovedPage, setCurrentApprovedPage] = useState(1);
    const [currentFailedPage, setCurrentFailedPage] = useState(1);
    const [studentsPerPage] = useState(15);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getStudents();
                setStudents(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const currentApproved = getPaginatedData(students.approved, currentApprovedPage, studentsPerPage);
    const currentFailed = getPaginatedData(students.failed, currentFailedPage, studentsPerPage);

    const headers = ["Registration", "Name", "Mathematics", "Portuguese", "Biology", "Chemistry"];

    const renderCell = (student, header) => {
        if (header === "Registration") {
            return student.registration;
        } else if (header === "Name") {
            return student.name;
        } else {
            return student.grades[header];
        }
    };

    return (
        <div className="container mt-4">
            <Title text="Pass and Fail" /> 
            <Tabs defaultActiveKey="approved" className="mb-3">
                <Tab eventKey="approved" title="Approved">
                    <DynamicTable
                        headers={headers}
                        data={currentApproved}
                        renderCell={renderCell}
                    />
                    <Pagination
                        currentPage={currentApprovedPage}
                        totalPages={Math.ceil(students.approved.length / studentsPerPage)}
                        onPageChange={(page) => setCurrentApprovedPage(page)}
                    />
                </Tab>

                <Tab eventKey="failed" title="Failed">
                    <DynamicTable
                        headers={headers}
                        data={currentFailed}
                        renderCell={renderCell}
                    />
                    <Pagination
                        currentPage={currentFailedPage}
                        totalPages={Math.ceil(students.failed.length / studentsPerPage)}
                        onPageChange={(page) => setCurrentFailedPage(page)}
                    />
                </Tab>
            </Tabs>
        </div>
    );
}

export default ApprovedFailed;
