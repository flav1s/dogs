import React from "react";
import Image from "../Helper/Image";

import styles from "./FeedPhotosItem.module.css";

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClickPhotos() {
    setModalPhoto(photo);
  }

  return (
    <li className={styles.photo} onClick={handleClickPhotos}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
