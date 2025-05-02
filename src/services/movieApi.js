export const getAllMovies = async (token) => {
  const response = await fetch("https://tokenservice-jwt-2025.fly.dev/movies", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export const postNewMovie = async (
  token,
  title,
  productionYear,
  description,
  director
) => {
  console.log(token);
  const response = await fetch("https://tokenservice-jwt-2025.fly.dev/movies", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      productionYear: productionYear,
      description: description,
      director: director,
    }),
  });
  return response;
};
