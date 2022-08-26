import React from 'react';
import Styles from './Error.module.css';


const Error = ({mensaje}) => {
    return (
        <>
            <p className={`${Styles.alert} alert-danger ${Styles.error}`}>{mensaje}</p>

        </>
    );
}

//'alert alert-danger error'
export default Error;