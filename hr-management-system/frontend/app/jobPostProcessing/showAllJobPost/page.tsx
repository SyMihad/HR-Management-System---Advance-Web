'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

type Post = {
  id: number;
  Title: string; 
  Description: string; 
  JobId: string; 
  SubmissionDate: string; 
  CloseDate: string; 
  Status: string; 
};

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [editedPost, setEditedPost] = useState<Post | null>(null);
  const statusOptions = ['Open', 'Close'];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('http://localhost:3001/job/showAllJobPost');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts', error);
      }
    };

    fetchPosts();
  }, []);

  const handleUpdate = (post: Post) => {
    setSelectedPost(post);
    setEditedPost({ ...post });
  };

  const handleCancelUpdate = () => {
    setSelectedPost(null);
    setEditedPost(null);
  };

  const handleSaveUpdate = async () => {
    try {
      if (editedPost && editedPost.id !== undefined) {
        const { id, ...updateData } = editedPost;
  
        await axios.put(`http://localhost:3001/job/updateJobPost/${editedPost.id}`, updateData);
  
        const response = await axios.get<Post[]>('http://localhost:3001/job/showAllJobPost');
        setPosts(response.data);
        setSelectedPost(null);
        setEditedPost(null);
      }
    } catch (error) {
      console.error('Error updating post', error);
    }
  };

  const handleDelete = async (postId: number) => {
    try {
      await axios.delete(`http://localhost:3001/job/deleteJobPost/${postId}`);
      const response = await axios.get('http://localhost:3001/job/showAllJobPost');
      setPosts(response.data);
    } catch (error) {
      console.error('Error deleting post', error);
    }
  };

  // const handleSaveUpdate = async () => {
  //   try {
  //     const { id, ...updateData } = editedPost;
  //     await axios.put(`http://localhost:3001/job/updateJobPost/${editedPost.id}`, updateData);
  //     const response = await axios.get<Post[]>('http://localhost:3001/job/showAllJobPost');
  //     setPosts(response.data);
  //     setSelectedPost(null);
  //     setEditedPost(null);
  //   } catch (error) {
  //     console.error('Error updating post', error);
  //   }
  // };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedPost((prevPost) => {
      if (!prevPost) return null;
  
      return {
        ...prevPost,
        [name]: name === 'id' ? (value ? parseInt(value, 10) : undefined) : value,
      };
    });
  };

  return (
    <div>
      <h1>Posts</h1>
      <table>
      <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Job ID</th>
            <th>Submission Date</th>
            <th>Close Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.Title}</td>
              <td>{post.Description}</td>
              <td>{post.JobId}</td>
              <td>{post.SubmissionDate}</td>
              <td>{post.CloseDate}</td>
              <td>{post.Status}</td>
              <td>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
                {selectedPost === post ? (
                  <>
                    <button onClick={handleSaveUpdate}>Save</button>
                    <button onClick={handleCancelUpdate}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleUpdate(post)}>Update</button>
                  
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editedPost && (
        <div>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="Title"
                value={editedPost.Title}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                name="Description"
                value={editedPost.Description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Job ID:</label>
              <input
                type="text"
                name="JobId"
                value={editedPost.JobId}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Submission Date:</label>
              <input
                type="text"
                name="SubmissionDate"
                value={editedPost.SubmissionDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Close Date:</label>
              <input
                type="text"
                name="CloseDate"
                value={editedPost.CloseDate}
                onChange={handleInputChange}
              />
            </div>
            <div>
            <label>Status:</label>
            <select
              name="Status"
              value={editedPost.Status}
              onChange={handleInputChange}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          </form>
          <div>
            <button onClick={handleSaveUpdate}>Save</button>
            <button onClick={handleCancelUpdate}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Posts;
