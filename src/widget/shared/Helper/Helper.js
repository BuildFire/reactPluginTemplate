const useHelper = () => {
  const imagePreviewer = (imageUrl) => {
    buildfire.imagePreviewer.show(
      {
        images: [imageUrl],
      },
      () => {
        console.log("Image previewer closed");
      }
    );
  };
  const fullScreenVideoHandler=(data,enableFullScreen,mediaType,videoId)=> {
    if (
      Object.keys(data).length !== 0 &&
      enableFullScreen === true &&
      mediaType === "video"
    ) {
      document.getElementById(videoId).classList.add("fullScreenVideo");
    }
    if (
      Object.keys(data).length !== 0 &&
      enableFullScreen === false &&
      mediaType=== "video"
    ) {
      document.getElementById(videoId).classList.remove("fullScreenVideo");
    }
  }
  return { imagePreviewer,fullScreenVideoHandler };
};

export default useHelper;
