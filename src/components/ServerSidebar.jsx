import React from 'react';
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const servers = [
  { id: 1, name: 'Server 1', icon: '/placeholder.svg' },
  { id: 2, name: 'Server 2', icon: '/placeholder.svg' },
  { id: 3, name: 'Server 3', icon: '/placeholder.svg' },
];

const ServerSidebar = () => {
  return (
    <div className="w-16 bg-gray-900 flex flex-col items-center py-4 space-y-4">
      <ScrollArea className="flex-grow w-full">
        {servers.map((server) => (
          <Button key={server.id} variant="ghost" size="icon" className="mb-2">
            <Avatar>
              <AvatarImage src={server.icon} alt={server.name} />
              <AvatarFallback>{server.name[0]}</AvatarFallback>
            </Avatar>
          </Button>
        ))}
      </ScrollArea>
      <Button variant="outline" size="icon">
        <PlusCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ServerSidebar;