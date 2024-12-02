import React, { useState } from 'react';
import StudentSearchService from '../Services/StudentSearchService'; 
import DynamicTable from '../Components/DynamicTable'; 

const StudentSearch = () => {
    const [registration, setRegistration] = useState('');
    const [student, setStudent] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            if (!registration) return setError('Enter a registration to search');

            const data = await StudentSearchService.fetchStudentByRegistration(registration);
            setStudent(data);
            setError('');
        } catch (error) {
            setStudent(null);
            setError(error.message);
        }
    };

    const headers = ["Registration", "Name", "Mathematics", "Portuguese", "Biology", "Chemistry", "Approved"];

    const renderCell = (student, header) => {
        if (header === "Registration") {
            return student.registration;
        } else if (header === "Name") {
            return student.name;
        } else if (header === "Mathematics") {
            return student.grades.Mathematics;
        } else if (header === "Portuguese") {
            return student.grades.Portuguese;
        } else if (header === "Biology") {
            return student.grades.Biology;
        } else if (header === "Chemistry") {
            return student.grades.Chemistry;
        } else if (header === "Approved") {
            return (
                <span className={`badge ${student.isApproved ? 'bg-success' : 'bg-danger'}`}>
                    {student.isApproved ? 'Approved' : 'Failed'}
                </span>
            );
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Student Search</h1>
            <div className="mb-4">
                <label htmlFor="registration" className="form-label">
                    Matrícula:
                </label>
                <div className="input-group">
                    <input
                        type="text"
                        id="registration"
                        value={registration}
                        onChange={(e) => setRegistration(e.target.value)}
                        className="form-control"
                        placeholder="Enter registration number"
                    />
                    <button onClick={handleSearch} className="btn btn-primary">
                        Buscar
                    </button>
                </div>
            </div>
            {error && <p className="text-danger">{error}</p>}
            {student && (
                <div>
                    <h3 className="text-center text-success">Student Details</h3>
                    <DynamicTable
                        headers={headers}
                        data={[student]}
                        renderCell={renderCell}
                    />
                </div>
            )}
        </div>
    );
};

export default StudentSearch;
