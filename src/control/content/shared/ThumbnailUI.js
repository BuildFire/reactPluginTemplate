import React, { useEffect, useState } from "react";

export default function ThumbnailUI(props) {
  useEffect(() => {
    let thumbnail = new buildfire.components.images.thumbnail(
      `#thumbnail${props.index}`,
      {
        imageUrl: "",
        title: " ",
        dimensionsLabel: `${props.recommended}`,
        multiSelection: false,
      }
    );
    // set background -->
    if (props.thumbnailImage) {
      thumbnail.loadbackground(props.thumbnailImage);
    }
    // thumbnail Change image -->
    thumbnail.onChange = (imageUrl) => {
      let croppedImage = buildfire.imageLib.cropImage(imageUrl, {
        size: "full_width",
        aspect:
          props.aspectRatio === "9x16"
            ? "9:16"
            : props.aspectRatio === "1x1"
            ? "1:1"
            : "16:9",
      });
      props.setThumbnailImage(croppedImage);
    };
    // thumbnail Delete Image -->
    thumbnail.onDelete = (imageUrl) => {
      props.setThumbnailImage(null);
    };
  }, [props]);
  return (
    <div className="row">
      <div className="col-md-3">
        <label className="lable">{props.imageTag}</label>
      </div>
      <div className="col-md-9">
        <div
          id={`thumbnail${props.index}`}
          className={`${props.classList}`}
        ></div>
      </div>
    </div>
  );
}
