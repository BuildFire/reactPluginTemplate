import { useState, useEffect } from 'react';
import useMessages from './messages'

const useForm = (callback) => {

    const {handleSendMessage} = useMessages();

    const [values, setValues] = useState({});

    useEffect(()=>{
        handleSendMessage(values)
    }, [values])

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback(values);
    };

    const handleChange = (event, imageData) => {
        event.persist();
        if(event.target.type == 'checkbox'){
            setValues(values => ({ ...values, ...imageData, [event.target.name]: event.target.checked}));
        }else{
            setValues(values => ({ ...values, ...imageData, [event.target.name]: event.target.value}));
        }
    };

    const handelChangeImage = (imageData) => {
        setValues(values => ({ ...values, ...imageData}));
    }

    return {
        handleChange,
        handleSubmit,
        handelChangeImage,
        values
    };
};

export default useForm;
