"use client"
import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import React from 'react'
import { Form, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Label } from '@radix-ui/react-label'
import axios from 'axios'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { itim } from '@/styles/fonts'
import { useToast } from '@/hooks/use-toast'

const contactSchema = z.object({
  username: z.string().min(1, { message: "Please enter your username" }),
  email: z.string().email().min(1, { message: "Please enter your email" }),
  message: z.string().min(1, { message: "Please enter your message" }),
})

const ContactForm = () => {

  const [formSubmit, setFormSubmit] = React.useState(false)

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    }
  })

  const onSubmit = async (data: z.infer<typeof contactSchema>, e: any) => {
    setFormSubmit(true);
    e.preventDefault();
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_APP_URL as string + "api/contactemail", {
        name: data.username,
        email: data.email,
        message: data.message
      })
      if (response.status === 200 && response.data.message === "Success") {
        toast.success('Message sent successfully.')
        form.reset()
      }
      setFormSubmit(false);
      console.log(response)
    } catch (error) {
      toast.error('Something went wrong. Please try again later.')

      setFormSubmit(false);
    }
  }

  return (
    <Form {...form}>
      <Toaster />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name={"username"}
          render={({ field }) => {
            return (
              <FormItem className='inputContainer'  >
                <FormLabel className={`text-xl ${itim.className} `}  >Username</FormLabel>
                <Input placeholder='Please Enter Your Name.' className={`text-xl h-10 ${itim.className} `}  {...field} />
                {form.formState.errors.username && <p className="text-red-500">{form.formState.errors.username.message}</p>}
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
                <Input placeholder='Please Enter Your Email.' className={`text-xl h-10 ${itim.className} `}  {...field} />
                {form.formState.errors.email && <p className="text-red-500">{form.formState.errors.email.message}</p>}
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
                <FormLabel className={`text-xl ${itim.className}  `}   >Message</FormLabel>
                <Textarea rows={10} placeholder='Please Enter Your Message.' className={`text-xl h-10 ${itim.className} `}  {...field} />
                {form.formState.errors.message && <p className="text-red-500">{form.formState.errors.message.message}</p>}
              </FormItem>
            )
          }}
        />
        <Button className={`text-xl ${itim.className} w-full  `} disabled={formSubmit} type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ContactForm
