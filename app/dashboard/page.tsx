"use client";

import { useSession } from "next-auth/react";

import React from "react";

const page = () => {
  const { data: session } = useSession();

  console.log("session", session);
  if (!session) {
    return <div>Please sign in</div>;
  }
  if (session.user.role !== "admin") {
    return <div>Unauthorized</div>;
  }

  return <div>page</div>;
};

export default page;
