import React from 'react';
import Navbar from '../components/Navbar';

const Profile: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <div className="bg-white p-4 shadow rounded">
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          {/* Add more user profile information */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
