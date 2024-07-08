import { UserButton, UserProfile } from "@clerk/nextjs";

export function Header() {
    return  <div className="border-b y-4 bg-50">
        <div className="container mx-auto justify-between flex">
            This is a header
            <UserButton />
        </div>

    </div>
}