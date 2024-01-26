'use client'
import React from 'react';

import Tiptap from './TipTap';
import { RichTextEditorProvider } from 'mui-tiptap';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from "@tiptap/extension-character-count";
import { Button } from "@mui/material";

const InputPost = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: 10000
      }),],
    content: "<p>Hello <b>world</b>!</p>",
  });

  const submit = editor?.getJSON();
  
  return (
    <>
      <h1 className="">PERN POST</h1>
      <RichTextEditorProvider editor={editor}>
        <Tiptap />
        <Button onClick={() => console.log(submit)}>
          Save
        </Button>
      </RichTextEditorProvider>
    </>
  )
};

export default InputPost;