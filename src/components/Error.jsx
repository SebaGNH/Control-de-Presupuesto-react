import React from 'react';
import PropTypes from 'prop-types'
import Styles from './Error.module.css';


const Error = ({mensaje}) => {
    return (
        <>
            <p className={`${Styles.alert} alert-danger ${Styles.error}`}>{mensaje}</p>

        </>
    );
}

//'alert alert-danger error'

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
export default Error;