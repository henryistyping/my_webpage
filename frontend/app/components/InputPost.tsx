'use client'
import React from 'react';

import Tiptap from './TipTap';
import { RichTextEditorProvider } from 'mui-tiptap';
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CharacterCount from "@tiptap/extension-character-count";
import { Button, FormControl } from "@mui/material";

import { Controller, useForm } from 'react-hook-form';

const InputPost = () => {
  const { handleSubmit, control } = useForm()

  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: 10000
      }),],
    content: "<p>Hello <b>world</b>!</p>",
  });

  const submit = editor?.getJSON();

  //TODO: Implement a form that will send to DB upon button click `submit`
  //TODO more specifically: find what properties should be passed down to Tiptap 
  // refer to MUI/TIPTAP for all the properties that can be used, then rend them as fields for React-hook-form, and also implementing functions that go with them
  return (
    <>
      <h1 className="">PERN POST</h1>
      <FormControl onSubmit={handleSubmit(data => console.log(data))}>
        <Controller
          control={control}
          name="TipTap"
          render={({ field: onChange, value, ref }) => ( //Look at the tip section
            <RichTextEditorProvider onChange={onChange} selected={value} editor={editor}>
              <Tiptap />
              <Button onClick={() => console.log(submit)}>
                Save
              </Button>
            </RichTextEditorProvider>
          )}
        />

      </FormControl>
    </>
  )
};

export default InputPost;