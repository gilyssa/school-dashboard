import React from 'react';

const SubjectCard = ({ subject }) => {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h5 className="card-title text-center text-secondary">
                        {subject.subject}
                    </h5>
                    <p className="card-text text-center">
                        <strong>Student:</strong> {subject.bestStudent.name}
                    </p>
                    <p className="card-text text-center">
                        <strong>Registration:</strong> {subject.bestStudent.registration}
                    </p>
                    <p className="card-text text-center">
                        <strong>Grade:</strong> {subject.grade}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;
