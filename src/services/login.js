export const login = async () => {
  try {
    const response = await fetch(
      "https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: "Andreas22", password: "troll123" }),
      }
    );

    return response;
  } catch (e) {
    throw new Error(e);
  }
};
