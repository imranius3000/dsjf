import { useState } from "react";
import axios from "axios";

function CatApp() {
  const [CatImage, SetCatImage] = useState("");

  const FetchCatImage = async () => {
    try {
      const response = await axios.get(
        "https://pixabay.com/api/?key=YOUR_API_KEY&q=fantasy&image_type=illustration",
      );
      SetCatImage(response.data[0].url);
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  };

  return (
    <div>
      <img
        src={CatImage}
        alt="Cat"
        style={{ width: "300px", height: "300px" }}
      />
      <button onClick={FetchCatImage}>кошара блохастый</button>
    </div>
  );
}

export default CatApp;
