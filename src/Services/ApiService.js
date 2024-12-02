import axios from 'axios';

const apiService = async ({ url, method = 'GET', data = null, params = null, errorMessage = 'An error occurred.' }) => {
    try {
        const response = await axios({
            url: `http://localhost/api${url}`,
            method,
            data,
            params,
        });
        return response.data;
    } catch (error) {
        console.error(errorMessage, error);
        throw new Error(errorMessage);
    }
};

export default apiService;
