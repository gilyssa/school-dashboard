import React, { useEffect, useState } from "react";
import BestBySubjectService from "../../Services/BestBySubjectService";
import SubjectCard from "./Utils/SubjectCard"; 

function BestBySubject() {
    const [subjects, setSubjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await BestBySubjectService.fetchBestBySubject();
                setSubjects(data);
            } catch (error) {
                setError('Error loading data');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-danger">{error}</p>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">Best Students by Subject</h1>
            <div className="row">
                {subjects.map((subject) => (
                    <SubjectCard key={subject.subject} subject={subject} />
                ))}
            </div>
        </div>
    );
}

export default BestBySubject;
