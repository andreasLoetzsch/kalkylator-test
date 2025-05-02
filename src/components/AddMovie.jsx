import { login } from "../services/login";
import { postNewMovie } from "../services/movieApi";
import { useEffect, useState } from "react";

export const AddMovie = () => {
  const addMovie = async (e) => {
    e.preventDefault();
    const res = await login();
    const token = await res.text();
    const title = e.target.title.value;
    const productionYear = e.target.productionYear.value;
    const description = e.target.description.value;
    const director = e.target.director.value;
    console.log(title);
    const result = await postNewMovie(
      token,
      title,
      productionYear,
      description,
      director
    );
  };

  return (
    <>
      <form onSubmit={addMovie}>
        <input
          name="title"
          placeholder="Write the title of the movie"
          type="text"
        />
        <input
          name="productionYear"
          placeholder="Write the production year"
          type="text"
        />
        <input
          name="description"
          placeholder="Write the description"
          type="text"
        />
        <input name="director" placeholder="Write the director" type="text" />
        <input type="submit" placeholder="Submit" />
      </form>
    </>
  );
};
