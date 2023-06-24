import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    // Perform registration logic here
    const { email, password } = req.body;
    // Save the user to the database or perform any desired actions
    res.status(200).json({ message: 'User registered successfully!' });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};

export default handler;
