import axios from 'axios';

const apiService = async (query, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=18996583-5f88ddbbd0a62c224fff1ccf9&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};

export default apiService;