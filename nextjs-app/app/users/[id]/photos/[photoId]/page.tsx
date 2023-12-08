import React from "react";

interface PhotosProps {
  params: { id: number; photoId: number };
}

const Photos = ({ params: { id, photoId } }: PhotosProps) => {
  return (
    <div>
      Photo {photoId} with ID {id}
    </div>
  );
};

export default Photos;
