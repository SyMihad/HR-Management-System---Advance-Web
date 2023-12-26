'use client'
import { useState } from 'react';
import axios from 'axios';

const SubmitForm = () => {
  const initialFormData = {
    Name: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    PhoneNo: '',
    UploadFileName: '',
    JobId: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/job/createJobApplication', formData);
      console.log('Form submitted successfully!');
      // You may perform additional actions after successful submission
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  

  return (
    <div>
      <h1>Submit Form</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div>
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" name="Email" value={formData.Email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="PhoneNumber" value={formData.PhoneNumber} onChange={handleInputChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="Address" value={formData.Address} onChange={handleInputChange} />
        </div>
        <div>
          <label>Phone No:</label>
          <input type="text" name="PhoneNo" value={formData.PhoneNo} onChange={handleInputChange} />
        </div>
        <div>
          <label>Upload File Name:</label>
          <input type="text" name="UploadFileName" value={formData.UploadFileName} onChange={handleInputChange} />
        </div>
        <div>
          <label>Job ID:</label>
          <input type="text" name="JobId" value={formData.JobId} onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SubmitForm;
