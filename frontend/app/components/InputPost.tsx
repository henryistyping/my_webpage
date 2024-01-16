// 'use client'
import React from 'react';
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

//MDXEditor Component
const EditorComp = dynamic(() => import('./MDXEditorComponent'), { ssr: false })


const InputPost = () => {
  return (
    <>
      <h1 className="text-center mt-8">PERN POST</h1>

      <div style={{ border: "1px solid black" }}>
        <Suspense fallback={null}>
          <EditorComp markdown='Hello world' />
        </Suspense >
      </div>
    </>
  )
};

export default InputPost;