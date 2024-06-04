/* eslint-disable @typescript-eslint/no-explicit-any */
import { IParamsUseFetch, NewsResponseModel, Post } from "@/models";
import { getProduct } from "../services";
import { useEffect, useRef, useState } from "react";


export const useFetch = (props: IParamsUseFetch) => {
  const [data, setData] = useState<NewsResponseModel>({ posts: [], total: 0 });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
        try {
          const response = await getProduct({...props});
          const postData: Post[] = [
            ...(data.posts ?? []),
            ...(response?.data?.posts ?? []),
          ];
          const newsApps: NewsResponseModel = {
            ...response.data,
            posts: postData,
          };
        //   cache.current[key] = newsApps;

          setData(newsApps);
          setError("");
        } catch (error) {
          setData({...data});
          setError("Failed to fetch data");
        }
    };
    fetchData();
    console.log(data);

  }, [props]);

  return { data, error };
};
