'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  Name: string;
  Email: string;
  Gender: string;
  DOB: string;
  PhoneNum: string;
  Password: string;
}

const CreateForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    Name: '',
    Email: '',
    Gender: '',
    DOB: '',
    PhoneNum: '',
    Password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name as keyof FormData]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const areAllFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
    if (!areAllFieldsFilled) {
      alert('All fields are required.');
      return;
    }
    try {
      await axios.post('http://localhost:3001/auth/createSuperAdmin', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Form submitted successfully!');
      console.log('Form submitted with data:', formData);
      router.push('/super-admin/all-Super-Admins');
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create Form</h1>
        <form onSubmit={handleSubmit}>
          {['Name', 'Email', 'Gender', 'DOB', 'PhoneNum', 'Password'].map((field) => (
            <div key={field} className="mb-4">
              <label htmlFor={field} className="block text-gray-700 text-sm font-bold mb-2">
                {field}
              </label>
              {field === 'Gender' ? (
                <select
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              ) : field === 'DOB' ? (
                <input
                  type="date"
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              ) : (
                <input
                  type={field === 'Password' ? 'password' : 'text'}
                  id={field}
                  name={field}
                  value={formData[field as keyof FormData]}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              )}
            </div>
          ))}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
