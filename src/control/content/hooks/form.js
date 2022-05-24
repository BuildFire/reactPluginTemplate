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

    const handleChange = (event) => {
        event.persist();
        if(event.target.type == 'checkbox'){
            setValues(values => ({ ...values, [event.target.name]: event.target.checked}));
        }else{
            setValues(values => ({ ...values, [event.target.name]: event.target.value}));
        }
    };

    const handelImage = (imageData) => {
        setValues(values => ({ ...values, ...imageData}));
    }

    return {
        handleChange,
        handleSubmit,
        handelImage,
        values
    };
};

export default useForm;
