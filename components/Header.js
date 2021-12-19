import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUserName from './ChangeUserName';

function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-pink-500 border-b-2 border-pink-700">
      <div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 rounded-full border-pink-500 border-8 lg:mx-auto">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to Metaverse</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
