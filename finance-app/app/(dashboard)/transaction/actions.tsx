"use client";

import { Button } from "@/components/ui/button";
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transactions";
import { useDeleteTransaction } from "@/features/transactions/api/use-delete-transactions";
import { useConfirm } from "@/hooks/use-confirm";

type Props = {
    id: string;
}

export const Action = ({id} : Props) => {
    const [ConfirmDialog,confirm] = useConfirm("Are you Sure?","You are about to delete this Transaction.")
    const {onOpen} = useOpenTransaction();
    const deleteMutation = useDeleteTransaction(id);
    const handleDelete = async () => {
        const ok = await confirm();

        if(ok){
            deleteMutation.mutate();
        }
    };
    return (
        <>
            <ConfirmDialog/>
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
                    <DropdownMenuItem className="flex justify-center bg-slate-50 rounded-md px-3 py-1 cursor-pointer" disabled={deleteMutation.isPending} onClick={handleDelete}>
                        <Trash className="size-4 mr-2"/>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}