import apiService from './ApiService';

export const getSortedStudents = async (strategy) => {
    try {
        const data = await apiService({
            url: `/students/sort`,
            params: { strategy },
            errorMessage: 'Error fetching sorted students.',
        });
        return data;
    } catch (error) {
        console.error(error.message);
        throw new Error('Error fetching sorted students');
    }
};

export const paginateStudents = (students, currentPage, studentsPerPage) => {
    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);
    const totalPages = Math.ceil(students.length / studentsPerPage);

    return { currentStudents, totalPages };
};
