import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const UserInfo = () => {
  return (
    <div className="bg-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Avatar className="mr-2">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <span className="text-white font-semibold">Username</span>
      </div>
      <Button variant="ghost" size="icon">
        <Settings className="h-5 w-5 text-gray-300" />
      </Button>
    </div>
  );
};

export default UserInfo;