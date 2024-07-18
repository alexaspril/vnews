import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const fetchNews = async (page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${API_URL}/api/showcase/news`, {
      params: {
        page,
        perPage
      }
    });

    console.log(`Fetching news for page ${page}, perPage ${perPage}`);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};
