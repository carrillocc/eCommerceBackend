const URL = "http://localhost:5001";

//fetch all users.
export const fetchUsers = async () => {
  try {
    const response = await fetch(`${URL}/users`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    return response;
  } catch (error) {
    console.error(
      "There was an error fetching the users in the api call",
      error
    );
  }
};

//fetch all posts.

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${URL}/posts`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    return response;
  } catch (error) {
    console.error(
      "There was an error fetching the posts in the api call",
      error
    );
  }
};

//fetch products

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${URL}/products`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    return response;
  } catch (error) {
    console.error(
      "There was an error fetching the products in the api call",
      error
    );
  }
};

//fetch order

export const fetchOrders = async () => {
  try {
    const response = await fetch(`${URL}/orders`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());

    return response;
  } catch (error) {
    console.error(
      "There was an error fetching the orders in the api call",
      error
    );
  }
};

//login user
export const loginAdminUsers = async (email, password) => {
  try {
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("There was an error logging in the user", error);
    throw error;
  }
};
