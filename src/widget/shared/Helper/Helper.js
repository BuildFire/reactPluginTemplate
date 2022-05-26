const useHelper = (callback) => {
    const imagePreviewer = (imageUrl) => {
        buildfire.imagePreviewer.show(
            {
              images: [imageUrl],
            },
            () => {
              console.log("Image previewer closed");
            }
          );
    }
    return {imagePreviewer}
}

export default useHelper