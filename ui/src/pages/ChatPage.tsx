import React, { useState } from "react";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    // Clear previous messages as per requirements
    setMessages([{ text: inputMessage, isUser: true }]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "FinInsight Agent is currently offline. Please try later.",
          isUser: false,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Chat Messages */}
        <div className="h-[calc(100vh-200px)] overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}
            >
              <div
                className={`inline-block p-3 rounded-lg max-w-[80%] ${
                  message.isUser
                    ? "bg-primary text-white"
                    : "bg-lightGray text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="text-center text-gray-500">
              FinInsight is thinking...
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              disabled={isLoading}
              placeholder="Ask about any stock or crypto..."
              className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90
                       disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
