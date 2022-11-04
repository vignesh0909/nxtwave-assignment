import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateItem = () => {
    const formInitialDetails = {
        itemName: '',
        link: '',
        resourceName: '',
        description: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const [formErrors, setFormErrors] = useState({
        itemTitleError: "",
        itemLinkError: "",
        resourceNameError: "",
        descriptionError: ""
    })

    const onFormUpdate = (category, value) => {
        setFormDetails({ ...formDetails, [category]: value })
    }

    const validateInput = (e) => {
        if (e.target.id === "itemName") {
            let title = e.target.value;
            if (title.length >= 3 && title.length <= 50) {
                setFormErrors({ ...formErrors, itemTitleError: "" })
            } else {
                setFormErrors({ ...formErrors, itemTitleError: "Title should have 3 to 50 characters" });
            }
        }
        else if (e.target.id === "link") {
            let link = e.target.value;
            if (link.length > 10) {
                setFormErrors({ ...formErrors, itemLinkError: "" })
            } else {
                setFormErrors({ ...formErrors, itemLinkError: "Invalid URL" });
            }
        }
        else if (e.target.id === "resourceName") {
            let resource = e.target.value;
            if (resource.length >= 5) {
                setFormErrors({ ...formErrors, resourceNameError: "" })
            } else {
                setFormErrors({ ...formErrors, resourceNameError: "Resource name should have minimum 5 characters" });
            }
        }
        else if (e.target.id === "description") {
            let description = e.target.value;
            if (description.length > 6) {
                setFormErrors({ ...formErrors, descriptionError: "" })
            } else {
                setFormErrors({ ...formErrors, descriptionError: "Description is too short" })
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors({});
        console.log(formDetails);
        if (formDetails.itemName === "" || formDetails.link === "" || formDetails.resourceName === "" || formDetails.description === "") {
            setFormErrors({ ...formErrors, emptyFormError: "Form field cannot be empty" })
            toast.error("Form field cannot be empty!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        } else {
            toast.success("Item created Successfully", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        }
    }

    return (<>
        <div className='row sm-12'>
            <div className="col sm-12 registration-form">
                <form onSubmit={handleSubmit}>
                    <div className="text-center mb-2">
                        <h3>Create Item</h3>
                    </div>
                    <div className="form-group">
                        <label className='m-1'>ITEM NAME</label>
                        <input type="text" className="form-control item" id="itemName" placeholder="Item Name"
                            onChange={(e) => {
                                setFormErrors({ ...formErrors, emptyFormError: "" });
                                validateInput(e); onFormUpdate('itemName', e.target.value)
                            }}
                        />
                        <label className='h6 text-danger'>{formErrors.itemTitleError}</label>
                    </div>
                    <div className="form-group">
                        <label className='m-1'>LINK</label>
                        <input type="text" className="form-control item" id="link" placeholder="Link"
                            onChange={(e) => {
                                setFormErrors({ ...formErrors, emptyFormError: "" });
                                validateInput(e); onFormUpdate('link', e.target.value)
                            }}
                        />
                        <label className='h6 text-danger'>{formErrors.itemLinkError}</label>
                    </div>
                    <div className="form-group">
                        <label className='m-1'>RESOURCE NAME</label>
                        <input type="text" className="form-control item" id="resourceName" placeholder="Resource Name"
                            onChange={(e) => {
                                setFormErrors({ ...formErrors, emptyFormError: "" });
                                validateInput(e); onFormUpdate('resourceName', e.target.value)
                            }}
                        />
                        <label className='h6 text-danger'>{formErrors.resourceNameError}</label>
                    </div>
                    <div className="form-group">
                        <label className='m-1'>DESCRIPTION</label>
                        <input type="text-area" className="form-control desc-item" id="description" placeholder="Description"
                            onChange={(e) => {
                                setFormErrors({ ...formErrors, emptyFormError: "" });
                                validateInput(e); onFormUpdate('description', e.target.value)
                            }}
                        />
                        <label className='h6 text-danger'>{formErrors.descriptionError}</label>
                    </div>
                    <ToastContainer />
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary create-account">Create</button>
                    </div>
                </form>
            </div>
            <div className="col grid-child sideImage m-2 d-flex justify-content-end mx-auto d-none d-md-block">
                <img src="/Office_Setup.jpg" alt="Office_Setup" style={{ height: "700px", width: "100%", marginTop: "30px" }} />
            </div>
        </div>
    </>)
}

export default CreateItem;