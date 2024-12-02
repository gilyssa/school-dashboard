import apiService from './ApiService';

const fetchStudentByRegistration = async (registration) => {
    if (!registration) throw new Error('Registration is required');

    try {
        const data = await apiService({
            url: `/students/${registration}`,
            method: 'GET',
            errorMessage: 'Error when searching for a student.',
        });
        return data;
    } catch (error) {
        throw new Error('Error when searching for a student.');
    }
};

export default {
    fetchStudentByRegistration,
};
