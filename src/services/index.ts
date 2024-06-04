import { IMovieResponseModel, Result, OriginalLanguage } from "../models";
import axiosClient from "./axiosClient";

export async function getMovie(page: number = 1, region: OriginalLanguage = "en") {
  const response = await axiosClient.get<IMovieResponseModel<Result[]>>(
    "/discover/movie",
    {
      params: {
        page,
        region,
      },
    }
  );

  return response.data;
}
