import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function CreateItem() {

    const [itemTitle, setItemTitle] = useState("");
    const [itemLink, setItemLink] = useState("");
    const [resourceName, setResourceName] = useState("");
    const [description, setDescription] = useState("");

    const [formErrors, setFormErrors] = useState({
        itemTitleError: "",
        itemLinkError: "",
        resourceNameError: "",
        descriptionError: ""
    })
    const [success, setSuccess] = useState("")

    const validateInput = (e) => {
        console.log(e.target);
        console.log(itemTitle);
    };

    const onSubmit = (e) => {
        console.log(e);
    };


    // return (<h1> Heyv</h1>);

    return (<>
        <div class="grid-container">
            <div class="grid-child createItemForm">
                <h3>Item Details</h3>
                <Form onSubmit={onSubmit}>
                    <Form.Group controlId="formGridItemTitle">
                        <Form.Label>Item Title</Form.Label>
                        <Form.Control type="text" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setItemTitle(e.target.value) }} />
                        <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                        <Form.Label className='h6 text-danger'>{formErrors.itemTitleError}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formGridName">
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="url" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setItemLink(e.target.value) }} />
                        <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                        <Form.Label className='h6 text-danger'>{formErrors.itemLinkError}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formGridName">
                        <Form.Label>Resource Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setResourceName(e.target.value) }} />
                        <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                        <Form.Label className='h6 text-danger'>{formErrors.resourceNameError}</Form.Label>
                    </Form.Group>

                    <Form.Group controlId="formGridName">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="textarea" onChange={(e) => { setFormErrors({ ...formErrors, emptyFormError: "" }); validateInput(e); setDescription(e.target.value) }} />
                        <Form.Label className='text-danger'>{formErrors.emptyFormError}</Form.Label>
                        <Form.Label className='h6 text-danger'>{formErrors.descriptionError}</Form.Label>
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="success" size="lg" type="submit">
                            Create
                        </Button>
                    </div>
                </Form>
            </div>

            <div class="grid-child sideImage">
                <img src="/Office_Setup.jpg" alt="Filler image" style={{ height: "600px", width: "500px" }} />
            </div>

        </div>
    </>);
}

export default CreateItem;