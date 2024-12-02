import apiService from './ApiService';

const BestBySubjectService = {
    fetchBestBySubject: async () => {
        try {
            const data = await apiService({
                url: '/students/best-by-subject',
                method: 'GET',
                errorMessage: 'Error fetching data for best students by subject.',
            });
            return data;
        } catch (error) {
            throw new Error('Error loading data');
        }
    }
};

export default BestBySubjectService;
