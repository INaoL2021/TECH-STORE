import './Loading.css'
import React, { useState, useEffect } from 'react';
import { Spinner } from 'reactstrap';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="spinner-container">
            {loading ? (
                <Spinner className='spinnerReactstrap' color="primary" />
            ) : (
                <div>
                    <NavBar />
                    <Footer />
                </div>
            )}
        </div>
    );
}

export default Loading;