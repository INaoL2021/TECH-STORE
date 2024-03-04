import './Loading.css'
import React from 'react';
import { Spinner } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Loading() {
    return (
        <div className='load-container'>
            <div className='lod-logo'>
                <Spinner color='primary' className='spinnerReactstrap' />
            </div>
        </div>
    )
}

export default Loading;