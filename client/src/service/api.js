const addUser = async (data) => {
  try {
    const response = await fetch("http://localhost:5000/adduser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error("Error while calling add user API", error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:5000/alluser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error while calling get users API", error);
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON response
  } catch (error) {
    console.log("Error while calling get user API", error);
    throw error;
  }
};

const editUser = async (user, id) => {
  try {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log("Error while calling edit user API", error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log("Error while calling delete user API", error);
    throw error;
  }
};

module.exports = { addUser, getUsers, getUser, editUser, deleteUser };
