import React from 'react';

// component
import Tiptap from './TipTap';
import { useCurrentEditor } from '@tiptap/react';


import { Button, FormControl } from "@mui/material";

import { useForm, SubmitHandler, Controller } from "react-hook-form"

import { z } from "zod";

const InputPost = () => {
  const { handleSubmit, control } = useForm(); // RHF
  const { editor } = useCurrentEditor(); // FIXME Tiptap 


  // Form conditioning with zod
  const postSchema = z.object({ // ZOD
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

  const formCheck = useForm<z.infer<typeof postSchema>>({ // initialize react-hook-form`
    mode: "onSubmit",
    defaultValues: {
      title: "",
      description: ""
    }
  });

  // const onSubmit = (values: z.infer<typeof postSchema>) => {
  const onSubmit = () => {
    // Some random function here
    console.log(editor?.getJSON())
  }

  //TODO: Implement a form that will send to DB upon button click `submit`
  // Need to have react-hook-form to handle Form control
  // Need zod to display error messages
  // Save progress as user writes stuff in TipTap (onChange) => refer to the video
  // Need to REST API call 
  // TODO: Have TIPTAP editor prop be consumed in child elements (maybe using context?)
  // refer to MUI/TIPTAP for all the properties that can be used, then rend them as fields for React-hook-form, and also implementing functions that go with them
  return (
    <>
      <h1 className="">PERN POST</h1>
      <FormControl onSubmit={handleSubmit(data => console.log(data))}>
        <Controller
          control={control}
          name="TipTap"
          render={({ field }) => (
            //Look at the tip section
            <>
              <Tiptap />
              <Button onClick={() => onSubmit()}>
                Save
              </Button>
            </>
          )}
        />

      </FormControl>
    </>
  )
};

export default InputPost;