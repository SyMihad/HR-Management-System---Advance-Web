'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

type jobApplication = {
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

const ViewJobApplications = () => {
  const [jobApplications, setJobApplications] = useState<jobApplication[]>([]);

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await axios.get('http://localhost:3001/job/showAllJobApplication',{
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          }},);
        setJobApplications(response.data);
      } catch (error) {
        console.error('Error fetching job applications', error);
      }
    };

    fetchJobApplications();
  }, []);

  return (
    <div>
      <h1>Job Applications</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Upload File Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobApplications.map((application) => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.Name}</td>
              <td>{application.Email}</td>
              <td>{application.PhoneNo}</td>
              <td>{application.Address}</td>
              <td>{application.UploadFileName}</td>
              <td>{application.Status}</td>
              <td>
                <Link href={`/jobProcessing/showJobApplication/${application.id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewJobApplications;
