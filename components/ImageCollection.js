import React, { useState } from "react";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

const ImageCollection = () => {
  const images = [
    // Add your image filenames here
    "/resume-image.png",
    "/Certificate-Degree-complete.jpg",
    "/Toeic-Cetificate.jpg",
    "/certificate_lumentum_internship_image.jpg"
  ];

  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleDownload = (image) => {
    router.push(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };
  return (
    <div>
      <div className="grid grid-rows-1 md:grid-cols-2 xl:grid-cols-3 gap-5 px-10 justify-center items-center   ">
        {images.map((image, index) => (
          <div>
            <h1 className="text-base text-center my-2 text-green font-semibold">
          {index === 0? "Resume" :
          index === 1?" Degree complete":
          index === 2? "Toeic Certificate":
          index === 3? "Certificate Internship":""}
          </h1>
          <div key={index} className="hover:scale-110 hover:shadow-2xl">
            
            <img
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(image)}
            />
          </div>
          </div>
          
        ))}
      </div>
      {selectedImage && (
        <div className="fullscreen-overlay">
          <div>
            <button
              onClick={handleClose}
              className="absolute top-5 right-10 text-white cursor-pointer scrollbar-hide hover:underline"
            >
              <CloseIcon />
            </button>
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="md:w-[450px] lg:w-[500px] xl:w-[400px] "
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCollection;
