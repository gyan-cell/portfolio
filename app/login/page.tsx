import { auth, signIn } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = async () => {



  return (
    <form
      action={async () => {
        "use server"
        await signIn("github", {
          callbackUrl: "/",
          redirect: true
        })
        console.log("done")
      }}
    >
      <Button variant="default">Default</Button>
    </form>
  )
}

export default page
