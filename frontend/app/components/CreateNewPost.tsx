import React from 'react';

// component
import Tiptap from './TipTap';
import { useRichTextEditorContext } from 'mui-tiptap'

import { Button, FormControl, TextField } from "@mui/material";

import { useForm, SubmitHandler, Controller, useFormContext } from "react-hook-form"

import { z } from "zod";
import { Exception } from 'sass';

type FormValues = {
  TipTap: string
}

const InputPost = () => {
  // const { handleSubmit, control } = useForm(); // RHF
  const { handleSubmit, control } = useForm<FormValues>()
  const editor = useRichTextEditorContext(); // FIXME Tiptap

  // context is not returning editor property?


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

  if (!editor) {
    return null;
  }

  //TODO: Use type control to set title and body of post as FormValues type
  // https://react-hook-form.com/docs/usecontroller/controller#Tip



  // Submitting new post THIS ONE 
  // FIXME: not working
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // alert(JSON.stringify(data));

    // try {
    //   const body = { title: titleValue, body: editor?.getJSON() }
    //   const response = fetch("http://localhost:5000/posts", {
    //     method: "POST",
    //     headers: { "Content-Type": "applicaiton/json" },
    //     body: JSON.stringify(body)
    //   })
    // } catch (err: unknown) {
    //   if (err instanceof Error) {
    //     console.error(err.message)
    //   }
    // }

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
      <FormControl onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="TipTap"
          render={({ field }) => (
            //Look at the tip section
            <>
              <Tiptap />
              {/* <TextField {...field} /> */}
            </>
          )}
        />
        <Button type="submit">
          Save
        </Button>
      </FormControl >
    </>
  )
};

export default InputPost;