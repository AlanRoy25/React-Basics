import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-400 text-white p-3 text-3xl'>
      
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const userResponse = await fetch('https://api.github.com/users/AlanRoy25');
  const userData = await userResponse.json();

  const followersResponse = await fetch('https://api.github.com/users/AlanRoy25/followers');
  const followersData = await followersResponse.json();

  const finalData = { Data: userData, followers: followersData };

  return finalData;
};
