import axios from "axios";

const baseUrl = "http://localhost:5000";

axios.defaults.withCredentials = true;

const singup = async (user) => {
  try {
    const response = await axios.post(baseUrl + "/api/users/signup", { user });
    return response.data;
  } catch (err) {
    return err;
  }
};
const login = async (user) => {
  try {
    const response = await axios.post(baseUrl + "/api/users/login", { user });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const logout = async () => {
  try {
    const response = await axios.post(baseUrl + "/api/users/logout");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id) => {
  try {
    const response = await axios.get(baseUrl + `/api/users/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (id, userInfo) => {
  try {
    const response = await axios.put(baseUrl + `/api/users/${id}`, {
      userInfo,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getArticles = async () => {
  try {
    const response = await axios.get(baseUrl + `/api/article?limit=3`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
const getArticleById = async (id) => {
  try {
    const response = await axios.get(baseUrl + `/api/article/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getChildrenRelatedToParent = async (perantId) => {
  try {
    const response = await axios.get(baseUrl + `/api/child/parent/${perantId}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const addNewChild = async (child) => {
  try {
    const response = await axios.post(baseUrl + `/api/child/`, { child });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const deleteChild = async (id) => {
  try {
    const response = await axios.delete(baseUrl + `/api/child/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const getQuestions = async () => {
  try {
    const response = await axios.get(baseUrl + `/api/question/`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export {
  singup,
  login,
  getUserById,
  updateUser,
  logout,
  getArticles,
  getArticleById,
  addNewChild,
  deleteChild,
  getChildrenRelatedToParent,
  getQuestions,
};
