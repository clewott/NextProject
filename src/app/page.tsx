"use client";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session, status} = useSession();
  console.log("status", status);
  console.log("session", session);

  return <div>Client Page</div>;
}