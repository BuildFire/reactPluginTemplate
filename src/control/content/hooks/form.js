import { useState, useEffect } from "react";
import useMessages from "./messages";

const useForm = (callback) => {
  const { handleSendMessage } = useMessages();

  const [values, setValues] = useState({});

  useEffect(() => {
    handleSendMessage(values);
  }, [values]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  };

  const handleChange = (event, imageData) => {
    event.persist();
    setValues((values) => ({
      ...values,
      ...imageData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    }));
    console.log("My values->", {
      ...values,
      ...imageData,
      [event.target.name]: event.target.type === "checkbox"
      ? event.target.checked
      : event.target.value,
    });
  };

  const handelChangeImage = (imageData) => {
    setValues((values) => ({ ...values, ...imageData }));
    console.log("My values->", {
      ...values,
      ...imageData,
      [event.target.name]: event.target.value,
    });
  };

  return {
    handleChange,
    handleSubmit,
    handelChangeImage,
    values,
  };
};

export default useForm;
