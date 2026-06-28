import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! Welcome to BWI Chauffeur. How can I assist you with your luxury transportation needs today?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          session_id: sessionId,
          history: messages
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setSessionId(data.session_id);
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting right now. Please call us at 877-679-0100 for immediate assistance.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    'What vehicles do you have?',
    'Do you serve DC?',
    'How do I book?'
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-testid="chat-toggle-btn"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-gray-800 hover:bg-gray-700' 
            : 'bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] hover:shadow-xl hover:shadow-[#D4AF37]/50'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-black" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          data-testid="chat-widget"
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-gray-900 rounded-2xl shadow-2xl shadow-black/50 border border-[#D4AF37]/30 overflow-hidden flex flex-col"
          style={{ height: '500px', maxHeight: 'calc(100vh - 150px)' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] p-4 flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-bold text-black">BWI Chauffeur Assistant</h3>
              <p className="text-xs text-black/70">We typically reply instantly</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" data-testid="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black rounded-br-sm'
                      : 'bg-gray-800 text-white rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-white p-3 rounded-2xl rounded-bl-sm">
                  <Loader2 className="h-5 w-5 animate-spin text-[#D4AF37]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (only show at start) */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInputValue(question);
                    inputRef.current?.focus();
                  }}
                  className="text-xs px-3 py-1.5 bg-gray-800 text-[#D4AF37] rounded-full border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                data-testid="chat-input"
                className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 border border-gray-700"
              />
              <Button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                data-testid="chat-send-btn"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E5C3] text-black hover:shadow-lg hover:shadow-[#D4AF37]/50 disabled:opacity-50 disabled:cursor-not-allowed p-0"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
