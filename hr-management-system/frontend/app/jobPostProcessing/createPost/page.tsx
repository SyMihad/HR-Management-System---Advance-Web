
'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';




const SubmitForm = () => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    Title: '',
    Description: '',
    JobId: '',
    SubmissionDate: '',
    CloseDate: '',
    Status: 'Open',
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/job/createPost', formData);
      console.log('Form submitted successfully', response.data);
      router.push('/jobPostProcessing/showAllJobPost');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="Description" value={formData.Description} onChange={handleChange} />
        </div>
        <div>
          <label>Job ID:</label>
          <input type="text" name="JobId" value={formData.JobId} onChange={handleChange} />
        </div>
        <div>
          <label>Submission Date:</label>
          <input type="datetime-local" name="SubmissionDate" value={formData.SubmissionDate} onChange={handleChange} />
        </div>
        <div>
          <label>Close Date:</label>
          <input type="datetime-local" name="CloseDate" value={formData.CloseDate} onChange={handleChange} />
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="Status" value={formData.Status} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitForm;
