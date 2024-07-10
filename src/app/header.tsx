import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Header() {
    return  <div className="border-b y-4 bg-50">
        <div className="container mx-auto justify-between flex">
            <div>
                Filelify-Drive
            </div>

            <div className="flex gap-2">
                <OrganizationSwitcher/>
                <UserButton />
            </div>
        </div>

    </div>
}