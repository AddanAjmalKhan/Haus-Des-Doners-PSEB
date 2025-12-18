export const registerUser = (email, password) => {
  localStorage.setItem(
    "user",
    JSON.stringify({ email, password })
  );
};

export const loginUser = (email, password) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return false;

  if (user.email === email && user.password === password) {
    localStorage.setItem("isAuthenticated", "true");
    return true;
  }

  return false;
};

export const logoutUser = () => {
  localStorage.removeItem("isAuthenticated");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuthenticated") === "true";
};
