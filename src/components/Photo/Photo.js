import React, { useEffect } from "react";
import { useParams } from "react-router";
import { PHOTO_GET } from "../../api/api";
import useFetch from "../../hooks/useFetch";
import { Error } from "../Error/Error";
import Loading from "../Loading/Loading";
import PhotoContent from "./PhotoContent";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <section className="container mainContainer">
      <PhotoContent single data={data} />
    </section>
  );
};

export default Photo;
