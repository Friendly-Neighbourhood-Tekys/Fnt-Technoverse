import React from 'react';
const RegistrationPage: React.FC = () => {
  return (
    <div>
      
      <div className="text-black ">
        <h1 className="mb-2 mt-7 text-3xl text-white leading-tight text-primary font-semibold">Registration Form</h1>
      </div>
      <div className='mt-0'>
      <div>
      <label className='block pt-2 pb-0  font-medium text-left'>Name</label>
        
        
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div>
      <label className='block pt-2 pb-0 text-black font-medium text-left'>Email</label>
        <input
          type="text"
          placeholder="Email"
          className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div>

      <label className='block pt-2 text-black font-medium text-left'>Password</label>
        <input
          type="text"
          placeholder="Password"
          className="w-full px-4 text-black py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>
      <div>
      <label className='block pt-2 text-black font-medium text-left mp-1'>Confirm Password</label>
        <input
          type="text"
          placeholder="Password"
          className="w-full px-4 py-2 text-black mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
        <div className=' text-xs text-rose-700 text-left mt-1'>
        <a className=" hover:text-red text-red-600">Password must be same!</a>
        </div>
        <div className="flex">
                    <button className="w-full px-6 py-2 mt-4 text-white bg-black rounded-lg hover:bg-slate-800">Create
                        Account</button>
                </div>
                <div className="mt-4 text-black">
                    Already have an account ?
                    <a className="hover:underline text-blue-800" href="#"> Login</a>
                          

                </div>
         
      </div>
    </div>
    </div>
  );
};

export default RegistrationPage;