import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAllFolders = () => {
  return axios.get(baseUrl).then(response => response.data);
};

const createFolder = folderName => {
  return axios.post(`${baseUrl}/folders`, { name: folderName }).then(response => response.data);
};

const getNotes = folderName => {
  return axios.get(`${baseUrl}/${folderName}`).then(response => response.data);
};

const createNote = (folderName, noteContent) => {
  return axios.post(`${baseUrl}/${folderName}`, { content: noteContent }).then(response => response.data);
};

export default { getAllFolders, createFolder, getNotes, createNote };