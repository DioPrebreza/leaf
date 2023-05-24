import { projectStorage } from "../firebase/config";

export const useImageUpload = () => {
  const uploadImage = async (image, id) => {
    const uploadPath = `images/${id}/${image.name}`;
    const img = await projectStorage.ref(uploadPath).put(image);
    const imgUrl = await img.ref.getDownloadURL();
  };
  return { uploadImage };
};
