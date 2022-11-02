import React from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const Requests = () => {

    const [resources, setResources] = useState([]);

    useEffect(() => {
        axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
            .then(result => {
                console.log(result.data)
                let res = (result.data).map(current => { return { tag: "request" } });
                console.log(res);
                setResources(res)
            }).catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className='container m-5'>
            requests
        </div>

    )
}

export default Requests