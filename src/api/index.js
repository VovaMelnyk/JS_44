import axios from "axios";

axios.defaults.baseURL = "https://628511c03060bbd347441aa3.mockapi.io/";

export const getPosts = async () => {
  try {
    const { data } = await axios.get("posts");
    return data;
  } catch (error) {
    throw new Error(`что-то пошло не так ${error}`);
  }
};

export const deletePost = async (id) => {
  try {
    const { data } = await axios.delete(`posts/${id}`);
    return data;
  } catch (error) {
    throw new Error(`что-то пошло не так ${error}`);
  }
};

export const addPost = async (post) => {
  try {
    const { data } = await axios.post(`posts`, post);
    return data;
  } catch (error) {
    throw new Error(`что-то пошло не так ${error}`);
  }
};
