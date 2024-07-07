import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const messages = [
  { id: 1, user: 'User1', content: 'Hello, everyone!' },
  { id: 2, user: 'User2', content: 'Hi there!' },
  { id: 3, user: 'User3', content: 'How are you all doing?' },
];

const ChatArea = () => {
  return (
    <div className="flex-grow bg-gray-700 flex flex-col">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <span className="font-semibold text-white">{message.user}: </span>
            <span className="text-gray-300">{message.content}</span>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 bg-gray-800 flex">
        <Input
          placeholder="Type a message..."
          className="flex-grow mr-2 bg-gray-700 text-white"
        />
        <Button size="icon">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatArea;