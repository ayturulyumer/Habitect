const buildOptions = (data) => {
  const accessToken = localStorage.getItem("accessToken");

  const options = {
    credentials: "include", // Ensure cookies are sent with the request
  };

  if (accessToken) {
    options.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      ...options.headers,
      "content-type": "application/json",
    };
  }

  return options;
};

export const request = async (method, url, data) => {
  const response = await fetch(url, {
    ...buildOptions(data),

    method,
  });

  if (!response.ok) {
    const result = await response.json();
    throw result;
  }
  const result = await response.json();
  return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
export const patch = request.bind(null, "PATCH");
