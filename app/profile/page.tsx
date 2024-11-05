'use client';

import { useSession } from "next-auth/react";


export default function Profile() {
  const { data: session } = useSession();


  if (!session) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>User ID: {session.user.id}</p>
      <p>Name: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <p>Role: {session.user.role}</p>
    </div>
  );
}
