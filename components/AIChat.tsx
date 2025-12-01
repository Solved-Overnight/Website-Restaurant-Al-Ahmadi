import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { askConcierge } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

const AIChat: React.FC = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset welcome message on language change
    setMessages([
        { 
            sender: 'bot', 
            text: language === 'ar' 
                ? "مرحباً! أنا المساعد الذكي لمطعم الأحمدي. كيف يمكنني مساعدتك في القائمة أو خدماتنا اليوم؟"
                : "Marhaba! I am the Al Ahmadi Concierge. How can I assist you with our menu or services today?" 
        }
    ]);
  }, [language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askConcierge(userMsg, language);
    
    setMessages(prev => [...prev, { sender: 'bot', text: response }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${isOpen ? 'rotate-90 bg-gray-800 text-white' : 'bg-kuwait-gold text-kuwait-dark hover:scale-110'}`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 border border-kuwait-gold/20 flex flex-col overflow-hidden animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-kuwait-dark p-4 flex items-center gap-3 border-b-2 border-kuwait-gold">
            <div className="w-10 h-10 rounded-full bg-kuwait-gold flex items-center justify-center">
                <Sparkles size={20} className="text-kuwait-dark" />
            </div>
            <div>
                <h3 className="text-white font-serif font-medium">{t('aiTitle')}</h3>
                <p className="text-xs text-gray-400">{t('aiSubtitle')}</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-kuwait-cream/30 space-y-4" ref={scrollRef}>
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-kuwait-dark text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {loading && (
                <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 p-3 rounded-xl rounded-bl-none shadow-sm flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                    </div>
                </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t('aiPlaceholder')}
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-kuwait-gold"
            />
            <button 
                onClick={handleSend}
                disabled={loading}
                className="p-2 bg-kuwait-gold text-kuwait-dark rounded-full hover:bg-opacity-80 transition disabled:opacity-50"
            >
                <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
