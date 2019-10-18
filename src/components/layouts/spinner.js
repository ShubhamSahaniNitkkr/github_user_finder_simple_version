import React, { Fragment } from 'react';
import Loader from '../../assets/imgs/loading.gif'

const spinner = () =>
    <Fragment>
        <img src={Loader} alt="Spinner" style={{ width: '200px', margin: 'auto', display: 'block' , marginTop:'20%'}} />
    </Fragment>

export default spinner
