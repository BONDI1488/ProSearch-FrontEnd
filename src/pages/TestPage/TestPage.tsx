import React, { useEffect } from 'react';
import axios from 'axios';

const CityList: React.FC = () => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://secure.geonames.org/searchJSON',
                    {
                        params: {
                            q: 'Ukraine',
                            country: 'UA',
                            maxRows: 10,
                            username: 'bondi1488',
                        },
                    }
                );

                const cities = response.data.geonames;
                console.log('Cities in Ukraine:', cities);
            } catch (error) {
                console.error('Error fetching city data:', error);
            }
        };

        fetchData();
    }, []);

    return <div>Check the console for city data</div>;
};

const TestPage: React.FC = () => {
    return (
        <div>
            <h1>City List</h1>
            <CityList />
        </div>
    );
};

export default TestPage;
