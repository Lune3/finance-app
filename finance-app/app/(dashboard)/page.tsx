"use client";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";
import { Button } from "@/components/ui/button";

export default function Home(){
  const {isOpen,onClose} = useNewAccount();
  return (
    <div>
      DashBoard Page
    </div>
  )
}
