import { useState } from "react";
import BasicFigure from "./BasicFigure";
import "./FigureList.css"; // Import CSS for styling

const initialImages = [
  { src: "https://imgs.search.brave.com/XomcxLD1aQOJoTGriW8xK2mNe3KXGRRL8QDncEZKGmw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/NjM1OTg1NS9waG90/by92aWV3LWZyb20t/ZGVhZC1zZWEuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTBx/WXlYTVNhbVJlNmo3/Rm42aEpKRFBKaWho/bGI0QXZ5RjV4UXFY/a3cxRzQ9", caption: "Image 1" },
  { src: "https://media.istockphoto.com/id/509710948/photo/dead-sea-salt-shore.jpg?s=612x612&w=0&k=20&c=Sg8r0tS7cWCfZG1N_-E6J6ZavsuHuBv0x3SnceZrr1M=", caption: "Image 2" },
  { src: "https://media.istockphoto.com/id/1805478220/photo/the-dead-sea-jordan.jpg?s=612x612&w=0&k=20&c=uKQ92Da5dMrLIaqrR7-kEkO2Y0Ab9OnMfxh22lHexko=", caption: "Image 3" }
];

const FigureList = () => {
  const [images, setImages] = useState(initialImages);

  const addImage = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newImage = {
      src: `https://picsum.photos/400/300?random=${randomId}`,
      caption: `Image ${images.length + 1}`
    };
    setImages([...images, newImage]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Dynamic Image Gallery</h1>
      <div className="buttons">
        <button onClick={addImage}>Add Image</button>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <BasicFigure key={index} src={image.src} caption={image.caption} onRemove={() => removeImage(index)} />
        ))}
      </div>
    </div>
  );
};

export default FigureList;
