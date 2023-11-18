import "./applyform.css";
import React, { useState } from 'react';



function ApplyForm() {
    const [sent, useSent] = useState(false)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Assuming formData is an object with your form data
        // fetch("https://formbold.com/s/3LKkR", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => {
        //     if (!response.ok) {
        //         throw new Error("Network response was not ok");
        //     }
        //     return response.json();
        // })
        // .then(data => {
        //     console.log("Success:", data);
        // })
        // .catch(error => {
        //     console.error("There was a problem with the fetch operation:", error.message);
        // });
        useSent(true);
     
    };
    

    return (
        
        <div className="applyContainer">
            <form className='applyform' onSubmit={handleSubmit}>
                {!sent?(
                    <>
                    <h1>Apply</h1>
                    <h1></h1>
                    <div>
                        <label>First Name:</label>
                        <input placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>

                    <div>
                        <label>Phone Number:</label>
                        <input placeholder="Phone Numbe" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>

                    <div>
                        <label>Email:</label>
                        <input placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <button className="button" type="submit">Submit</button>
                    </>
                    ):(<h1>Your Done</h1>)
                }

        </form>

        </div>
        
    );
}

export default ApplyForm;
