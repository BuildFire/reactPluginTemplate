import { useState } from 'react';
import {dataHandler} from './messaging'

const useForm = (callback) => {

    const [values, setValues] = useState({});

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        callback(values);
    };

    const handleChange = (event,imageData) => {
        event.persist();
        setValues(values => ({ ...values,...imageData, [event.target.name]: event.target.value}));
        console.log("values >>>",values);
        dataHandler(values);
        messaging("values >>>",values);
    };

    return {
        handleChange,
        handleSubmit,
        values
    };
};

export default useForm;
