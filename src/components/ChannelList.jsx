import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Hash, Volume2 } from "lucide-react";

const channels = [
  { id: 1, name: 'general', type: 'text' },
  { id: 2, name: 'voice-chat', type: 'voice' },
  { id: 3, name: 'announcements', type: 'text' },
];

const ChannelList = () => {
  return (
    <div className="w-64 bg-gray-800 p-4">
      <h2 className="text-lg font-semibold mb-4 text-white">Channels</h2>
      <ScrollArea className="h-[calc(100vh-8rem)]">
        {channels.map((channel) => (
          <Button
            key={channel.id}
            variant="ghost"
            className="w-full justify-start mb-1 text-gray-300 hover:text-white hover:bg-gray-700"
          >
            {channel.type === 'text' ? (
              <Hash className="mr-2 h-4 w-4" />
            ) : (
              <Volume2 className="mr-2 h-4 w-4" />
            )}
            {channel.name}
          </Button>
        ))}
      </ScrollArea>
    </div>
  );
};

export default ChannelList;