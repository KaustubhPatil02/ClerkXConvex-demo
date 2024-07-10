"use client";
// import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { SignInButton, useSession, useOrganization } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


export default function Home() {
  const {organization} = useOrganization();
  console.log(organization?.id) 
  // organization.
  // const session = useSession();

  const createFile = useMutation(api.files.createFile);
  const getFiles = useQuery(api.files.getFiles);
  // const deleteFiles = useMutation(api.files.deleteFiles); // Assume this deletes multiple files
  console.log(getFiles)

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
        return (
          <div key={file.id}>
            {file.name}
          </div>
        );
      })}

      <Button onClick={() =>{
        if(!organization) return; // This is a bug, but it's fine for now
        createFile({
          name: "Hii there",
          orgId: organization.id,
        })
      }}> Add file</Button>

      <Button style={{backgroundColor: 'red', color: 'white'}} onClick={() => deleteFiles({ ids: getFiles.map(file => file.id) })}>
        Delete All Files
      </Button>

    </main>
  );
}