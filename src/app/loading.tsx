"use client"
import { useEffect, useState } from 'react';
import './Loading.css'; // Import the CSS file

export default function Loading() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000); // Change this to the time it takes for your page to load

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`h-screen w-screen bg-cover overflow-hidden hide-scroll z-50 ${loading ? 'zoom' :""}`} style={{backgroundImage:`url(/loading_image.svg)`}}>
        </div>
    );
}
