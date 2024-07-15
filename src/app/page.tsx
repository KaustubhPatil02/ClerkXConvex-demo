"use client";

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
  // const files = useQuery(api.files.getFiles,
  //   organization?.id ?{orgId: organization.id} : "skip");
  const files = useQuery(api.files.getFiles, "skip");
  // const deleteFiles = useMutation(api.files.deleteFiles); // Assume this deletes multiple files
  // console.log(getFiles)

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

      {files?.map((file) => {
        return (
          <div key={file._id}>
            {file.name}
          </div>
        );
      })}

<Button onClick={() => {
  if (!organization || !organization.id) return; // Check if organization or organization.id is null
  createFile({
    name: "Hii papa",
    orgId: organization.id, // Use organization.id directly
  })
}}> Add file</Button>
     

    </main>
  );
}