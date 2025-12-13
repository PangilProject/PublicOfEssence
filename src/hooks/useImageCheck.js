import { useState, useEffect } from "react";

const checkImageExists = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

export const useImageCheck = (list) => {
  const [imageExists, setImageExists] = useState({});

  useEffect(() => {
    const checkImages = async () => {
      if (!list || list.length === 0) return;

      const promises = list.map((value) => {
        if (value?.image) {
          return checkImageExists(value.image).then((exists) => ({
            [value.image]: exists,
          }));
        }
        return Promise.resolve({ [value?.image]: false });
      });

      const results = await Promise.all(promises);
      const newImageExists = results.reduce(
        (acc, cur) => ({ ...acc, ...cur }),
        {}
      );

      setImageExists(newImageExists);
    };

    checkImages();
  }, [list]);

  return imageExists;
};
