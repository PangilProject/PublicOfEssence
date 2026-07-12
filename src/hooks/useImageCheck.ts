import { useState, useEffect } from "react";

const checkImageExists = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

export const useImageCheck = (list: { image?: string }[]) => {
  const [imageExists, setImageExists] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkImages = async () => {
      if (!list || list.length === 0) return;

      const promises = list.map((value) => {
        if (value?.image) {
          return checkImageExists(value.image).then((exists) => ({
            [value.image as string]: exists,
          }));
        }
        return Promise.resolve({ [String(value?.image)]: false });
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
