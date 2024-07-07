import React from 'react';
import ServerSidebar from '../components/ServerSidebar';
import ChannelList from '../components/ChannelList';
import ChatArea from '../components/ChatArea';
import UserInfo from '../components/UserInfo';

const DiscordClone = () => {
  return (
    <div className="flex h-screen">
      <ServerSidebar />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-grow">
          <ChannelList />
          <ChatArea />
        </div>
        <UserInfo />
      </div>
    </div>
  );
};

export default DiscordClone;