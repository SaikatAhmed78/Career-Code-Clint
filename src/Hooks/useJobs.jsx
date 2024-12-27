import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJobs = (sort, search) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/jobs`, {
                    params: {
                        sort,
                        title: search
                    }
                });
                setJobs(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            }
        };

        fetchJobs();
    }, [sort, search]);

    return { jobs, loading };
};

export default useJobs;
