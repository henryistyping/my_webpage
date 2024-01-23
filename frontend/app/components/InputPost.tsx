'use client'
import React from 'react';

import Tiptap from './TipTap';


const InputPost = () => {
  return (
    <>
      <h1 className="text-center mt-8">PERN POST</h1>
      <form className='text-center mt-5'>
        <Tiptap />
        <button className='btn btn-success'>Submit</button>
      </form>
    </>
  )
};

export default InputPost;