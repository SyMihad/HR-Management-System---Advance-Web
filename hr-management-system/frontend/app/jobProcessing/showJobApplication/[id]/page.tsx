'use client'
import { withRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';



type jobApplicationType = {
    id: number;
    Name: string;
    Email: string;
    PhoneNumber: string;
    Address: string;
    PhoneNo: string;
    UploadFileName: string;
    JobId: number;
    Status: string;
}

const ViewApplication = () => {
  const router = useRouter();
  // const { id } = router.query;

  const param = useParams();
  const id = param.id;
  //const id = 6;

  

  const [jobApplication, setJobApplication] = useState<jobApplicationType | null>(null);

  

  useEffect(() => {
    
    const fetchJobApplication = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/job/showJobApplication/${id}`);
        setJobApplication(response.data);
      } catch (error) {
        console.error('Error fetching job application', error);
      }
    };

    if (id) {
      fetchJobApplication();
    }
  }, [id]);

  const handleMakeShortlist = async () => {
    try {
      if(jobApplication?.Status == "Submitted"){
        await axios.get(`http://localhost:3001/job/makeShortListed/${id}`);
      }
      if(jobApplication?.Status == "Shortlisted"){
        await axios.get(`http://localhost:3001/job/makeSelected/${id}`);
      }
      // Make a request to mark the job application as shortlisted
      

      // Redirect to the showAllJobApplication page
      router.push('/jobProcessing/showAllJobApplication');
    } catch (error) {
      console.error('Error making shortlist', error);
    }
  };

  return (
    <div>
      <h1>View Job Application</h1>
      {jobApplication ? (
        <div>
          <p>ID: {jobApplication.id}</p>
          <p>Name: {jobApplication.Name}</p>
          <p>Email: {jobApplication.Email}</p>
          <p>Phone Number: {jobApplication.PhoneNumber}</p>
          <p>Address: {jobApplication.Address}</p>
          <p>Phone No: {jobApplication.PhoneNo}</p>
          <p>Upload File Name: {jobApplication.UploadFileName}</p>
          <p>Job ID: {jobApplication.JobId}</p>
          <p>Status: {jobApplication.Status}</p>
          <button onClick={handleMakeShortlist}>Make Shortlist</button>
          {/* Display other job application details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewApplication;
