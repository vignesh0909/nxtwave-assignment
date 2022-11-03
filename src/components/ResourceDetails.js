import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import Table from './Table';

const ResourceDetails = () => {

    const [resDetails, setResDetails] = useState([]);
    const id = useParams().id;

    useEffect(() => {
        console.log(id)
        axios.get(`https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`)
            .then(result => {
                //console.log(result.data.resource_items)
                setResDetails(result.data.resource_items);
            }).catch((err) => {
                console.log(err.message);
            })
        // eslint-disable-next-line
    }, []);

    return (<>
        <Table data={resDetails} />
    </>)
}

export default ResourceDetails