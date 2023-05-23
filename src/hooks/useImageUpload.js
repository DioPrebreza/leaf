import React from "react";
import { projectStorage } from "../firebase/config";

export const useImageUpload = () => {
  const uploadImage = async (image) => {
    const uploadPath = `thumbnails/test/${image.name}`;
    const img = await projectStorage.ref(uploadPath).put(image);
    const imgUrl = await img.ref.getDownloadURL();
  };
  return { uploadImage };
};
