import Axios from 'axios';

export const getDataAPI = async (path, { params, authorization }) => {
  if (authorization) {
    const { data } = await Axios.get(
      `${process.env.REACT_APP_API_URL}${path}`, {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
        params,
      }
    );
    return data;
  }
  const { data } = await Axios.get(
    `${process.env.REACT_APP_API_URL}${path}`,
    { params }
  );
  return data;
}

export const postDataAPI = async (path, { payload, authorization }) => {
  if (authorization) {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}${path}`, payload, {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      }
    );
    return data;
  } else {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}${path}`, payload
    );
    return data;
  }
}

export const putDataAPI = async (path, { payload, authorization }) => {
  if (authorization) {
    const { data } = await Axios.put(
      `${process.env.REACT_APP_API_URL}${path}`, payload, {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      }
    );
    return data;
  } else {
    const { data } = await Axios.put(
      `${process.env.REACT_APP_API_URL}${path}`, payload
    );
    return data;
  }
}