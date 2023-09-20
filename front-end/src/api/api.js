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
