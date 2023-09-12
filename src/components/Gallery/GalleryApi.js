import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryApi = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numColumns, setNumColumns] = useState(getInitialNumColumns()); // Initial number of columns

  // Function to calculate the initial number of columns based on screen width
  function getInitialNumColumns() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 960) {
      // Large screens: 4 columns
      return 4;
    } else if (screenWidth >= 768) {
      // Medium screens: 3 columns
      return 3;
    } else if (screenWidth >= 576) {
      // Small screens: 2 columns
      return 2;
    } else {
      // Extra small screens: 1 column
      return 1;
    }
  }

  useEffect(() => {
    // Define your Unsplash API key here
    const apiKey = "pFv5vpeIX0qhfcP5HVdJHWTSY04tCliBqhIYRewquEI";

    // Fetch images from Unsplash API
    axios
      .get("https://api.unsplash.com/photos", {
        headers: {
          Authorization: `Client-ID ${apiKey}`,
        },
        params: {
          per_page: 9, // Number of images to fetch per request
          query: "gym",
        },
      })
      .then((response) => {
        setGalleryData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
        setLoading(false);
      });
  }, []);

  // Function to handle resizing and adjust the number of columns
  function handleResize() {
    const screenWidth = window.innerWidth;
    let newNumColumns = 4; // Default to 4 columns for large screens

    if (screenWidth < 960 && screenWidth >= 768) {
      newNumColumns = 3; // Medium screens: 3 columns
    } else if (screenWidth < 768 && screenWidth >= 576) {
      newNumColumns = 2; // Small screens: 2 columns
    } else if (screenWidth < 576) {
      newNumColumns = 1; // Extra small screens: 1 column
    }

    if (newNumColumns !== numColumns) {
      setNumColumns(newNumColumns);
    }
  }

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial number of columns

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [numColumns]);

  return (
    <div
      id="gallery-container"
      className={`grid grid-cols-1 md:grid-cols-${numColumns} lg:grid-cols-3 gap-4 p-4 bg-Tiger-black`}
    >
      {loading ? (
        <p>Loading...</p>
      ) : (
        galleryData.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.urls.regular}
              alt={item.alt_description || "Image"}
              className="w-full h-auto max-h-64 object-cover"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default GalleryApi;
