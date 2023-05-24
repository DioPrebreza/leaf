import React, { useState } from "react";
import uuid from "react-uuid";
import { useFirestore } from "../../hooks/useFirestore";
import { useHistory } from "react-router-dom";
import { useImageUpload } from "../../hooks/useImageUpload";
import { projectStorage } from "../../firebase/config";

const AddItem = () => {
  const history = useHistory();
  const { addDocument, response } = useFirestore("items");
  const { uploadImage } = useImageUpload();
  const [perfumeName, setPerfumeName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageError, setImageError] = useState(null);

  const handleFileChange = (e) => {
    setImageUpload(null);
    let selected = e.target.files[0];
    console.log(selected);

    if (!selected) {
      setImageError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setImageError("Selected file must be an image");
      return;
    }
    if (selected.size > 100000) {
      setImageError("Image file size must be less than 100kb");
      return;
    }

    setImageError(null);
    setImageUpload(selected);
    console.log("thumbnail updated");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // generate random uuid for the item
    const itemId = uuid();

    // upload image to the database
    const uploadPath = `images/${itemId}/${imageUpload.name}`;
    const img = await projectStorage.ref(uploadPath).put(imageUpload);
    const imgUrl = await img.ref.getDownloadURL();

    const item = {
      itemId,
      perfumeName,
      price,
      brand,
      imgUrl,
    };

    console.log(item);
    console.log(imageUpload);

    // uploadImage(imageUpload, itemId);
    await addDocument(item);
    if (!response.error) {
      history.push("/");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={perfumeName}
          onChange={(e) => setPerfumeName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
