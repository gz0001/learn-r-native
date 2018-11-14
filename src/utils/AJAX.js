import axios from "axios";
import CONFIG from "../config/auth";

// ==============================================
// GET

/**
 * Fetch data from given URL.
 * @param {string} url
 * @param {object} options additional options (optional)
 * @returns response.data if successful, else false
 */
export const get = async (
  url,
  { auth = CONFIG.auth, params = {}, token, withCredentials = false } = {}
) => {
  try {
    const config = { url, auth, params, withCredentials };
    if (token) {
      config.headers = { Authorization: "bearer " + token };
    }
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return { error };
  }
};

// ==============================================
// POST

/**
 * Post data to given URL.
 * @param {string} url
 * @param {object} data
 * @param {object} options additional options (optional)
 * @returns response.data if successful, else false
 */
export const post = async (
  url,
  data,
  {
    auth = CONFIG.auth,
    params = {},
    token = null,
    withCredentials = false
  } = {}
) => {
  try {
    const config = {
      method: "post",
      url,
      auth,
      params,
      withCredentials,
      data
    };

    if (token) {
      config.headers = { Authorization: "bearer " + token };
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    return false;
  }
};

// ==============================================
// PUT

/**
 * Fetch data from given URL.
 * @param {string} url
 * @param {object} data
 * @param {object} options additional options (optional)
 * @returns response.data if successful, else false
 */
export const update = async (
  url,
  data,
  { auth = CONFIG.auth, params = {}, withCredentials = false } = {}
) => {
  try {
    const response = await axios({
      method: "patch",
      url,
      auth,
      data,
      params,
      withCredentials
    });
    return response.data;
  } catch (error) {
    return false;
  }
};

// ==============================================
// DELETE

/**
 * Fetch data from given URL.
 * @param {string} url
 * @param {object} options additional options (optional)
 * @returns response.data if successful, else false
 */
export const remove = async (
  url,
  { auth = CONFIG.auth, params = {}, withCredentials = false } = {}
) => {
  try {
    const response = await axios(url, {
      method: "delete",
      auth,
      params,
      withCredentials
    });
    return response.data;
  } catch (error) {
    return false;
  }
};
