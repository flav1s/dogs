import React, { useEffect } from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import { Error } from "../Error/Error";

import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../api/api";
import Loading from "../Loading/Loading";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
    }

    fetchPhotos();
  }, [request]);

  if (error) {
    return <Error error={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!data) {
    return null;
  }

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem key={photo.id} photo={photo} />
      ))}
    </ul>
  );
};

export default FeedPhotos;
