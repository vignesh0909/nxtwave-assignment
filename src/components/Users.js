import React from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import SwitchTabs from './SwitchTabs';

const Users = () => {

  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios.get('https://media-content.ccbp.in/website/react-assignment/resources.json')
      .then(result => {
        //console.log(result.data)
        let res = (result.data).filter(current => { return current.tag === "user" });
        console.log(res);
        setResources(res)
      }).catch((err) => {
        console.log(err.message);
      })
  }, []);

  return (<>
    <SwitchTabs />
      <div className='row'>
        {resources.map(app => (<>
          <div className='col col-sm-6 col-md-6 col-lg-4'>
            <div id="divLogin" className="m-3 bgImage panel-body-appointment1 d-flex justify-content-center">
              <div className="m-2">
                <Card style={{ width: '25rem', height: '12rem' }}>
                  {/* <Card.Header>Header</Card.Header> */}
                  <Card.Body>
                    <Card.Title>
                      <img src={app.icon_url} className="mr-5 mx-auto card-img-sm text-right" alt="..." />
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      {app.title}
                    </Card.Title>
                    <Card.Text className='mt-4'>
                      <a href="{app.link}" className='text-decoration-none'>{app.link}</a>
                    </Card.Text>
                    <Card.Text className='mt-1'>
                      {app.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </>))}
      </div>
  </>)
}

export default Users