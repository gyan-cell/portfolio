"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import "./profile.scss";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="signIn">
          Please sign in{" "}
          <Button variant="default">
            <Link href="/login">Sign In</Link>
          </Button>{" "}
        </div>
      </div>
    );
  }

  return (
    <div className="profile  flex justify-center items-center h-screen flex-col gap-4 text-center">
      <div className="formCard">
        <p>Name: {session.user.name}</p>
        <p>Email: {session.user.email}</p>
        <p>Role: {session.user.role}</p>
        <Button variant="default"> Edit Profile</Button>
        <Button variant="default"> Change Password</Button>
        <Button variant="default"> Delete Account</Button>
        <Button variant="default" onClick={() => signOut()}>
          {" "}
          Sign Out
        </Button>
      </div>
    </div>
  );
}
