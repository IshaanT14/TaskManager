import axios from "axios";
const BASE_URL = process.env.REACT_APP_API_URL + "/tasks";

export const fetchTasks = () => axios.get(BASE_URL);
export const addTask = (task) => axios.post(BASE_URL, task);
export const completeTask = (id) => axios.put(`${BASE_URL}/${id}/complete`);
export const deleteTask = (id) => axios.delete(`${BASE_URL}/${id}`);
