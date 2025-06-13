'use client'

import { useState, useRef, useEffect } from 'react';
import Header from "../header"; // Import komponen Header
import { CSSProperties } from 'react'; // Import CSSProperties type

// Define types for messages
interface Message {
  text: string;
  sender: 'user' | 'bot' | 'typing';
}

// Define types for themes
interface Theme {
  name: string;
  style: CSSProperties;
}

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Halo! Aku HaloHati, teman curhatmu. Bagaimana perasaanmu hari ini? Ceritakan apa yang sedang kamu rasakan.", sender: 'bot' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Define the list of themes/background options
  const themes: Theme[] = [
    { name: 'Default', style: { backgroundColor: '#f8fafc', backgroundImage: 'none' } }, // Light Grayish Blue
    { name: 'Light Blue', style: { backgroundColor: '#e0f2fe', backgroundImage: 'none' } }, // Light Blue
    { name: 'Light Green', style: { backgroundColor: '#dcfce7', backgroundImage: 'none' } }, // Light Green
    { name: 'Light Purple', style: { backgroundColor: '#ede9fe', backgroundImage: 'none' } }, // Light Purple
    { name: 'Warm Gradient', style: { backgroundImage: 'linear-gradient(45deg, #ff59b2, #7884fb)', backgroundColor: 'none' } } // Your gradient, added backgroundColor: 'none'
  ];
  
  // State for current page background style, initialized to the style of the first theme
  const [currentPageBg, setCurrentPageBg] = useState<CSSProperties>(themes[0].style);

  // State for pop-up visibility, initialized to false
  const [showPageThemePopup, setShowPageThemePopup] = useState(false);

  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const themePopupRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom whenever messages or typing state changes
  useEffect(() => {
    if (chatMessagesRef.current) {
      setTimeout(() => {
        if (chatMessagesRef.current) {
          chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
      }, 0);
    }
  }, [messages, isTyping]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputMessage]);

  // Effect to handle clicking outside the theme popup
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if the popup is visible and the click is outside the popup element
      if (themePopupRef.current && !themePopupRef.current.contains(event.target as Node)) {
        setShowPageThemePopup(false); // Close the popup
      }
    }

    // Add or remove the event listener based on popup visibility
    if (showPageThemePopup) {
        document.addEventListener("mousedown", handleClickOutside);
    } else {
        document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPageThemePopup, themePopupRef]);

  
   // Corrected handleSubmit to send JSON body
   const handleSubmitCorrected = async (e: React.FormEvent) => {
     e.preventDefault();
     const message = inputMessage.trim();

     if (!message) return;

     // Add user message
     setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
     setInputMessage(''); // Clear input

     // Show typing indicator
     setIsTyping(true);

     try {
       // Call API (replace with your actual Azure Functions URL if different)
       const apiUrl = 'https://halohati-func.azurewebsites.net/api/chatgpt'; // Pastikan URL ini benar
       const response = await fetch(apiUrl, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ message }), // Corrected body
       });

       if (!response.ok) {
         throw new Error('Gagal mendapatkan balasan dari server.');
       }

       const reply = await response.text(); // Backend returns text

       // Remove typing indicator and add bot response
       setIsTyping(false);
       setMessages(prevMessages => [...prevMessages, { text: reply, sender: 'bot' }]);

     } catch (error) {
       console.error('Error:', error);
       setIsTyping(false);
       setMessages(prevMessages => [...prevMessages, { text: 'Maaf, terjadi kesalahan saat menghubungi server. Silakan coba lagi nanti.', sender: 'bot' }]);
     }
   };

  // Format message with line breaks
  const formatMessage = (text: string) => {
    // Using dangerouslySetInnerHTML is okay here for basic formatting like br
    return text.replace(/\n/g, '<br>');
  };

  return (
    // Main container for the whole page. Apply page background using inline style.
    <main className="min-h-screen text-gray-900" style={currentPageBg}> {/* Apply selected background style directly */}
      {/* Header Component */}
      <Header /> {/* Header might still have dark mode classes, adjust header.tsx if needed */}

      {/* Container to center the chat box horizontally below the header and add padding */}
      <div className="container mx-auto px-4 pb-10">
        <div className="max-w-5xl mx-auto relative">

          {/* Chat Interface - This flex container has a defined height */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)]">

             {/* Chat Header with Theme Button - This is flex-shrink-0 */}
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 p-4 flex items-center justify-between flex-shrink-0">
              {/* Header content */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  {/* Bot Icon - Removed dark mode text color */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  {/* Removed dark mode text color */}
                  <h2 className="text-xl font-bold text-white">HaloHati</h2>
                  {/* Removed dark mode text color */}
                  <p className="text-sm text-blue-50">Curhatkan isi hatimu di sini</p>
                </div>
              </div>
              {/* Theme Selector Button */}
              <button
                className="p-2 rounded-full text-white hover:bg-white/20 focus:outline-none transition"
                onClick={() => setShowPageThemePopup(!showPageThemePopup)} // Toggle visibility
                title="Ganti Background Halaman"
              >
                 {/* Paint Brush Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l-3.995-1.997A.75.75 0 014 14.25v-2.48m14.25 2.48l-3.995 1.997A.75.75 0 0118 14.25v-2.48m-4.5 0l-3.995-1.997A.75.75 0 009 9.75v-.995c0-.592.535-.967 1.085-.75l3.996 1.997A.75.75 0 0115 11.25v.995c0 .592-.535.967-1.085.75zM9.75 9.75l3.995 1.997M14.25 12l-3.995 1.997M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>


            {/* Chat Messages Area - This is the container that grows */}
            <div className="chat-messages-container flex flex-col flex-grow min-h-0">
              {/* The actual scrollable messages div - flex-1 takes space, overflow-y-auto scrolls */}
              <div id="chatMessages" ref={chatMessagesRef} className="chat-messages flex-1 p-4 overflow-y-auto space-y-4 min-h-0">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                    {/* Bot Avatar - Removed dark mode avatar background */}
                    {msg.sender === 'bot' && (
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                        {/* Removed dark mode text color */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                        </svg>
                      </div>
                    )}
                    {/* Message Bubble - Removed dark mode styles */}
                    <div
                      className={`chat-bubble p-3 ${
                        msg.sender === 'user'
                          ? 'user-bubble bg-blue-200 text-gray-700'
                          : 'bot-bubble bg-gray-200 text-gray-700'
                      }`}
                      dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
                    />
                    {/* User Avatar - Removed dark mode user avatar background */}
                    {msg.sender === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center ml-2 flex-shrink-0">
                        {/* Removed dark mode text color */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator - Removed dark mode styles */}
                {isTyping && (
                  <div className="flex items-start" id="typingIndicator">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                      {/* Removed dark mode typing avatar text color */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                      </svg>
                    </div>
                    {/* Removed dark mode typing bubble and dot color */}
                    <div className="chat-bubble bot-bubble p-3 typing-indicator bg-gray-200">
                      <span>●</span>
                      <span>●</span>
                      <span>●</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Message Input Area - Removed dark mode styles */}
            <div className="p-4 flex-shrink-0" style={{ boxShadow: '0 -5px 2px 0 rgba(0, 0, 0, 0.05)' }}>
              <form onSubmit={handleSubmitCorrected} className="flex flex-row items-center space-x-2">
                {/* Textarea Container */}
                <div className="flex-grow">
                  <textarea
                    ref={textareaRef}
                    id="messageInput"
                    className="message-input w-full border border-gray-300 rounded-2xl px-4 py-3 pr-12 resize-none focus:outline-none focus:border-blue-400 transition-all text-gray-800"
                    placeholder="Ketik pesanmu di sini..."
                    rows={1}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    required
                    style={{ minHeight: '64px' }}
                  ></textarea>
                </div>
                {/* Send Button - Removed dark mode styles */}
                <button
                  type="submit"
                  id="sendButton"
                  className="flex-shrink-0 bg-blue-500 text-white rounded-full p-3 hover:bg-blue-600 focus:outline-none disabled:opacity-50"
                  disabled={inputMessage.trim() === '' || isTyping}
                  aria-label="Kirim pesan" // Added aria-label for accessibility
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Page Theme Selection Pop-up (positioned absolutely) */}
          {/* Use conditional rendering to only render when visible */}
          {showPageThemePopup && ( // Render only if showPageThemePopup is true
            <div
              ref={themePopupRef}
              className={`absolute right-0 top-0 bottom-0 w-64 bg-white rounded-l-2xl shadow-xl p-4 transition-transform ease-out z-10 overflow-y-auto ${
                showPageThemePopup ? 'translate-x-0' : 'translate-x-full' // Use translate-x-full to hide
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Pilih Background Halaman</h3>
                {/* Close Button - Removed dark mode styles */}
                <button
                  onClick={() => setShowPageThemePopup(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Kirim pesan" // Added aria-label for accessibility
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {themes.map((themeOption, index) => (
                  <button
                    key={index}
                    className="w-full h-16 rounded-md border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 overflow-hidden relative group"
                    style={themeOption.style}
                    onClick={() => {
                      setCurrentPageBg(themeOption.style);
                      setShowPageThemePopup(false);
                    }}
                  >
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white bg-black bg-opacity-30% opacity-0% group-hover:opacity-100 transition-opacity">
                      {themeOption.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default ChatPage;