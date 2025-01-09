"use client";

import UploadThingCustom from "@/components/client/dashboard/Dashboard";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";

import React from "react";

const page = () => {
  const { data: session } = useSession();

  console.log("session", session);
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        Please{" "}
        <Button className="ml-2">
          <Link href="/api/auth/signin">Sign In</Link>
        </Button>
      </div>
    );
  }
  if (session.user.role !== "admin") {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        Unauthorized.
      </div>
    );
  }

  return (
    <div>
      <UploadThingCustom />
    </div>
  );
};

export default page;
