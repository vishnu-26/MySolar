import React from 'react'
import loader from './components/ajax-loader.gif'
import CircularProgress from '@mui/material/CircularProgress';

function Spinner() {
    return (
        <div>
            {/* <img src={loader} /> */}
            <CircularProgress color="secondary" />
        </div>
    )
}

export default Spinner
