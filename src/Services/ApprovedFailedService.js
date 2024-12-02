import apiService from "./ApiService";

export const getStudents = async () => {
    try {
        const data = await apiService({
            url: '/students/approved-failed',
            method: 'GET',
            errorMessage: 'Error fetching students: ',
        });
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching students');
    }
};

export const getPaginatedData = (data, currentPage, studentsPerPage) => {
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    return data.slice(indexOfFirstStudent, indexOfLastStudent);
};
