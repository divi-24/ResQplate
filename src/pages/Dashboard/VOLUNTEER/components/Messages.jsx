import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';

const mockChats = [
  {
    id: 1,
    name: 'Fresh Foods Market',
    lastMessage: 'We have some extra produce today',
    time: '10:30 AM',
    unread: 2,
    avatar: 'F',
  },
  {
    id: 2,
    name: 'Hope Community Center',
    lastMessage: 'Thank you for the delivery!',
    time: '9:45 AM',
    unread: 0,
    avatar: 'H',
  },
  {
    id: 3,
    name: 'City Bakery',
    lastMessage: 'Can you pick up at 2 PM?',
    time: 'Yesterday',
    unread: 1,
    avatar: 'C',
  },
];

const mockMessages = [
  {
    id: 1,
    sender: 'Fresh Foods Market',
    content: 'We have some extra produce today. Would you be able to pick it up?',
    time: '10:30 AM',
    isSender: false,
  },
  {
    id: 2,
    sender: 'You',
    content: 'Yes, I can be there in 30 minutes. How much produce do you have?',
    time: '10:32 AM',
    isSender: true,
  },
  {
    id: 3,
    sender: 'Fresh Foods Market',
    content: 'About 50 lbs of mixed vegetables and fruits.',
    time: '10:33 AM',
    isSender: false,
  },
];

export const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(mockChats[0]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="h-screen flex">
      {/* Chat List */}
      <div className="w-80 border-r bg-white">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="overflow-y-auto">
          {mockChats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                selectedChat.id === chat.id ? 'bg-green-50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium">
                  {chat.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-800">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium">
              {selectedChat.avatar}
            </div>
            <div>
              <h2 className="font-medium text-gray-800">{selectedChat.name}</h2>
              <p className="text-sm text-gray-500">Active now</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isSender ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.isSender
                    ? 'bg-green-500 text-white'
                    : 'bg-white text-gray-800'
                }`}
              >
                <p>{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.isSender ? 'text-green-100' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="bg-white p-4 border-t">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};