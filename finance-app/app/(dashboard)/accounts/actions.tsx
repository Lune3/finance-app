"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Edit, MoreHorizontal } from "lucide-react";
import { useOpenAccount } from "@/features/accounts/hooks/use-open-accounts";

type Props = {
    id: string;
}

export const Action = ({id} : Props) => {
    const {onOpen} = useOpenAccount();
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={"ghost"} className="size-8 p-0">
                        <MoreHorizontal className="size-4"></MoreHorizontal>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem className="flex justify-center bg-slate-50 rounded-md px-3 py-1 cursor-pointer" disabled={false} onClick={() => onOpen(id)}>
                        <Edit className="size-4 mr-2"/>
                        Edit
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}