
import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import useForm from "../../hooks/form";
import "./style.less";
import "../../../../../../../styles/control/bf-base.css";
function index(props) {

  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [wysiwygData, setWysiwygData] = useState(null);
  const [uploadType, setUploadType] = useState("image");
  const [videoURL, setVideoURL] = useState("");

  useEffect(() => {
    // set up WYSIWYG -->
    tinymce.init({
      selector: "#wysiwygContent",
      setup: editor => {
        editor.on('input', (e) => setWysiwygData(tinymce.activeEditor.getContent()));
        editor.on('change', (e) => setWysiwygData(tinymce.activeEditor.getContent()));
      }
    });
  }, []);

  useEffect(() => {
    handelImage({ thumbnailImage, wysiwygData, videoURL });
  }, [thumbnailImage, wysiwygData, videoURL])

  useEffect(() => {
    if (uploadType == "image") {
      //  set up thumbnail -->
      let thumbnail = new buildfire.components.images.thumbnail(".thumbnail", {
        imageUrl: "",
        title: " ",
        dimensionsLabel: "Recommended: 1200 x 675",
        multiSelection: false,
      });
      
      if (thumbnailImage) {
        thumbnail.loadbackground(thumbnailImage);
      }
      // thumbnail Change image -->
      thumbnail.onChange = (imageUrl) => {
        let croppedImage = buildfire.imageLib.cropImage(
          imageUrl,
          { size: "full_width", aspect: "16:9" }
        );
        setThumbnailImage(croppedImage);
      };
      // thumbnail Delete Image -->
      thumbnail.onDelete = (imageUrl) => {
        setThumbnailImage(null);
      };
    }
  }, [uploadType])
  // submit form function 
  function submitForm(values) {
    console.log(`Submit function in layout${props.selectedLayout + 1} ->`, values);
    props.saveData(values);
  }

  function uploadVideoFunc(e) {
    if (e.target.name != "videoURL-Input") {
      let progressPercentage = document.getElementById("progressPercentage");
      let progressContainer = document.getElementById("progress");

      buildfire.services.publicFiles.showDialog(
        { filter: ["video/mp4"], allowMultipleFilesUpload: true },
        (onProgress) => {
          progressContainer.style.display = "block";

          progressPercentage.innerText = `${onProgress.file.percentage}%`;
          progressPercentage.style.width = `${onProgress.file.percentage}%`;
        },
        (onComplete) => {
          progressPercentage.style.background = "var(--bf-theme-success)";
          progressPercentage.innerText = "Uploaded Sucessfully";
          setTimeout(()=>{
            progressContainer.style.display = "none";
          }, 4000)
        },
        (err, files) => {
          if (err) return console.error(err);
          setVideoURL(files[0].url);

          let urlContainer = document.getElementById("videoURL");
          urlContainer.value = files[0].url;
        }
      );
    } else {
      setVideoURL(e.target.value);
    }
  }

  const { handleChange, handleSubmit, handelImage } = useForm(submitForm);
  function handleChangeInputType(e) {
    setUploadType(e.target.value);
    handleChange(e);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Page Details</h1>
      <div className="layOutContainer">
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Top Media Type</label>
          </div>
          <div className="col-md-9">
            <input onChange={handleChangeInputType} className="checkBox" type="radio" name="topMediaType" value="image" defaultChecked />
            <label className="lable">Image</label>
            <input onChange={handleChangeInputType} className="checkBox" type="radio" name="topMediaType" value="video" />
            <label className="lable">Video</label>
          </div>
        </div>

        {
          uploadType == "image" ?
            (<div className="row">
              <div className="col-md-3">
                <label className="lable">Top Image</label>
              </div>
              <div className="col-md-9">
                <div className="thumbnail horizontal-rectangle"></div>
              </div>
            </div>) : (
              <>
                <div className="row">
                  <div className="col-md-3">
                    <label className="lable">Main Video</label>
                  </div>
                  <div className="col-md-9">
                    <button type="button" onClick={uploadVideoFunc} className="uploadVideo-btn btn btn-success">
                      + Upload Video
                    </button>
                    <div id="progress" className="progress">
                      <div className="progress-bar" id="progressPercentage" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                    </div>

                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <label className="lable">Video URL</label>
                  </div>
                  <div className="col-md-9">
                    <input defaultValue={videoURL} placeholder="Video URL" onChange={uploadVideoFunc} id="videoURL" name="videoURL-Input" className="form-control fullWidth"></input>
                  </div>
                </div>
              </>
            )
        }

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Enable Full Screen</label>
          </div>
          <div className="col-md-9">
            <input placeholder="Enable Full Screen" onChange={handleChange} className="checkBox" type="checkBox" name="enableFullScreen" id="enableFullScreen" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Title</label>
          </div>
          <div className="col-md-9">
            <input placeholder="Title" onChange={handleChange} id="title" name="title" className="form-control fullWidth"></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <label className="lable">Subtitle</label>
          </div>
          <div className="col-md-9">
            <input placeholder="Subtitle" onChange={handleChange} id="subTitle" name="subTitle" className="form-control fullWidth"></input>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <label className="lable">Body Contant</label>
          </div>
        </div>
        <textarea placeholder="Body Contant ..." className="margin-bottom" id="wysiwygContent" name="wysiwygContent"></textarea>
      </div>
      <div className="bottom-actions">
        <button type="button" className="btn btn-default" id="layoutBackBtn">
          Cancel
        </button>
        <button type="submit" className="btn btn-success" id="layoutSaveBtn">
          Save
        </button>
      </div>
    </form>
  );
}

export default hot(index);
