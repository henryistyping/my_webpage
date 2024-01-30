'use client'
import React from 'react';

import Tiptap from './TipTap';
import { RichTextEditorProvider } from 'mui-tiptap';
import { useEditor, EditorContent } from '@tiptap/react'

import StarterKit from '@tiptap/starter-kit'
import CharacterCount from "@tiptap/extension-character-count";

import { Button, FormControl } from "@mui/material";

import { useForm, SubmitHandler } from "react-hook-form"

import { z } from "zod";

const InputPost = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CharacterCount.configure({
        limit: 10000
      }),],
    content: "<p>Hello <b>world</b>!</p>",
  });

  // Form conditioning with zod
  const postSchema = z.object({
    title: z
      .string()
      .min(1, {
        message: "Title is too short."
      })
      .max(100, { message: "Title should be less than 100 characters" }),

    description: z
      .string()
      .min(1, {
        message: "Cannot submit empty post"
      })
      .max(10000, { message: "Writing is too long" })
      .trim(),
  })

  const formCheck = useForm<z.infer<typeof postSchema>>({ // initialize react-hook-form
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: ""
    }
  });

  const onSubmit = (values: z.infer<typeof postSchema>) => {
    // Some random function here
    console.log(editor?.getJSON())
  }

  //TODO: Implement a form that will send to DB upon button click `submit`
  // Need to have react-hook-form to handle Form control
  // Need zod to display error messages
  // Save progress as user writes stuff in TipTap (onChange) => refer to the video
  // Need to REST API call 
  return (
    <>
      <h1 className="">PERN POST</h1>
      <form {...formCheck} onSubmit={formCheck.handleSubmit(onSubmit)} >
        <RichTextEditorProvider editor={editor}>
          <FormControl>
            <Tiptap />
          </FormControl>
        </RichTextEditorProvider >
        <Button type="submit">
          Save
        </Button>
      </form>

    </>
  )
};

export default InputPost;