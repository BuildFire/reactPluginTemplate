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
  const fullScreenVideoHandler=(data,enableFullScreen,videoId)=> {
    if (
      Object.keys(data).length !== 0 &&
      enableFullScreen === true
    ) {
      document.getElementById(videoId).classList.add("fullScreenVideo");
    }
    if (
      Object.keys(data).length !== 0 &&
      enableFullScreen === false
    ) {
      document.getElementById(videoId).classList.remove("fullScreenVideo");
    }
  }
  return { imagePreviewer,fullScreenVideoHandler };
};

export default useHelper;
