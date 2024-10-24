"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import React from 'react'
import { Form, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { itim } from '@/styles/fonts'

const contactSchema = z.object({
  username: z.string().min(1, { message: "Please enter your username" }),
  email: z.string().email().min(1, { message: "Please enter your email" }),
  message: z.string().min(1, { message: "Please enter your message" }),
})

const ContactForm = () => {

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    }
  })

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name={"username"}
          render={({ field }) => {
            return (
              <FormItem className='inputContainer'  >
                <FormLabel className={`text-xl ${itim.className} `}  >Username</FormLabel>
                <Input placeholder='Please Enter Your Name.' className={`text-xl h-10 ${itim.className} `}  {...field} />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => {
            return (
              <FormItem className='inputContainer'  >
                <FormLabel className={`text-xl ${itim.className} `}  >Email</FormLabel>
                <Input placeholder='Please Enter Your Name.' className={`text-xl h-10 ${itim.className} `}  {...field} />
              </FormItem>
            )
          }}
        />

        <FormField
          control={form.control}
          name={"message"}
          render={({ field }) => {
            return (
              <FormItem className='inputContainer'  >
                <FormLabel className={`text-xl ${itim.className} `}   >Messsage</FormLabel>
                <Textarea rows={10} placeholder='Please Enter Your Message.' className={`text-xl h-10 ${itim.className} `}  {...field} />
              </FormItem>
            )
          }}
        />
        <Button className={`text-xl ${itim.className} w-full `} type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm
