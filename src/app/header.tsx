import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Header() {
    return  <div className="border-b py-4 bg-black text-white">
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