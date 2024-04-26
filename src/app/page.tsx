"use client";
// import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { SignInButton, useSession } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";

import Image from "next/image";
import { api } from "../../convex/_generated/api";


export default function Home() {

  const session = useSession();

  const createFile = useMutation(api.files.createFile);
  const getFiles = useQuery(api.files.getFiles);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal" >
          <Button>Sign In</Button>
        </SignInButton >
      </SignedOut>

      {getFiles?.map((file) => {
        return <div key={file.id}>{file.name}</div>
      })}

      <Button onClick={() => {
        createFile({
          name: "test"
        })
      }}> Add file</Button>



    </main>
  );
}
