import apiService from "./ApiService";

const fetchStudents = async () => {
    try {
        const data = await apiService({
            url: '/students',
            method: 'GET',
            errorMessage: 'Error fetching student data.',
        });
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const paginateStudents = (students, currentPage, studentsPerPage) => {
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    return students.slice(indexOfFirstStudent, indexOfLastStudent);
};

const renderCell = (student, header) => {
    if (header === "Mathematics" || header === "Portuguese" || header === "Biology" || header === "Chemistry") {
        return student.grades[header] || "N/A";
    }
    return student[header] || "N/A";
};

export default {
    fetchStudents,
    paginateStudents,
    renderCell,
};
