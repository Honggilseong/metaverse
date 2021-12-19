import Image from 'next/image';
import React from 'react';
import { useMoralis } from 'react-moralis';

function Login() {
  const { authenticate, isInitializing } = useMoralis();
  return (
    <div className="relative overflow-hidden">
      <div className=" z-50 w-1/2 h-full absolute bg-gradient-to-b from-black to-fuchsia-900 origin-bottom animate-bottomToTop "></div>
      <div className=" z-50 right-0 w-1/2 h-full absolute bg-gradient-to-b from-fuchsia-900 to-black ease-in origin-top animate-topToBottom"></div>
      <div
        className={`flex flex-col absolute z-20 items-center w-full justify-center h-4/5 space-y-4 animate-imagePop`}
      >
        <Image
          className="object-cover rounded-full"
          src="https://botusercontent.telegra.ph/ifttt/file/eyJmIjoiQWdBQ0FnVUFBeDBDV05zOGFBQUNQNFJoZTAybVdnV3FhdzVlbEVkTzRfbFRPbEJBOEFBQ1phd3hHMzdVMkZjMG4zMFBHSGlOd1FFQUF3SUFBM2dBQXlFRSIsIm0iOiJpbWFnZVwvanBlZyIsIm4iOiJwaG90by5qcGciLCJkIjoxNjM1NDcwNzU4fQ/345b8d502660d3be8e/photo.jpg"
          height={200}
          width={200}
        />
      </div>
      <div className=" flex flex-col absolute z-20 items-center w-full justify-center h-4/5 space-y-4 mt-44 animate-loginPop">
        <button
          onClick={() => authenticate()}
          className="bg-pink-500 rounded-lg p-5 font-bold z-20 w-52 h-14 items-center flex justify-center"
        >
          Login to Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://www.gannett-cdn.com/presto/2021/03/31/USAT/0ebd3aba-576c-4a8f-8501-fb9cae02de8e-Obelisk_02.jpg?width=2160"
          layout="fill"
        />
      </div>
    </div>
  );
}

export default Login;
