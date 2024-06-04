import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { fetchData, setCurrentPage } from "../../store/movieSlice";
import Card from "../../components/Card";
import Category from "../../components/Category";

/**
 * Renders the Home component.
 *
 * @returns JSX.Element
 */
export const Home: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const { data, loading, error, page } =
    useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData(page) as unknown as never);
  }, [dispatch, page]);

  const handlePageChange = (page: number = 1) => {
    dispatch(setCurrentPage(page));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div>
        <Category label="Trending" />

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {data.map((item) => (
            // release_date
            // poster_path
            <Card
              key={item.id}
              id={item.id || 0}
              title={item.title || ""}
              release_date={item.release_date?.toString() || ""}
              poster_path={item.poster_path || ""}
            />
            // <li key={item.id}>{item.title}</li>
          ))}
        </div>
        <button onClick={() => handlePageChange(page ? page + 1 : 1)}>
          next page
        </button>
      </div>
    </>
  );
};
