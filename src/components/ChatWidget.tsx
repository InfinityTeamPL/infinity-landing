'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Cześć! Jestem asystentem AI Infinity Tech. Jak mogę Ci pomóc? Możesz zapytać mnie o nasze usługi AI, automatyzację procesów, ceny lub umówić się na konsultację.'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input.trim() })
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Przepraszam, wystąpił błąd. Spróbuj ponownie później lub skontaktuj się bezpośrednio przez email: contact@infinityteam.io'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Style theme-aware: dark = dotychczasowe wartości (default),
          light = frosted white po Apple'owsku */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cw-window {
          background: var(--surface-1);
          backdrop-filter: blur(50px);
          -webkit-backdrop-filter: blur(50px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.3), inset 0 1px 1px rgba(var(--ink-rgb),0.1);
        }
        .cw-bubble-assistant {
          background: rgba(var(--ink-rgb),0.08);
        }
        .cw-input {
          background: rgba(var(--ink-rgb),0.08);
          border: 1px solid rgba(var(--ink-rgb),0.1);
        }
        [data-theme="light"] .cw-window.cw-window {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(28px) saturate(1.7);
          -webkit-backdrop-filter: blur(28px) saturate(1.7);
          box-shadow: var(--shadow-card-hover), 0 0 0 1px var(--border-soft);
        }
        [data-theme="light"] .cw-bubble-assistant.cw-bubble-assistant {
          background: #F5F5F7;
        }
        [data-theme="light"] .cw-input.cw-input {
          background: #ffffff;
          border-color: var(--border-soft);
        }
        [data-theme="light"] .cw-fab.cw-fab {
          background: #ffffff;
          color: #2E4AAD;
          box-shadow: 0 0 0 1px var(--border-soft), var(--shadow-card);
        }
        [data-theme="light"] .cw-fab.cw-fab::before {
          display: none;
        }
      ` }} />

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`cw-fab fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full liquid-glass-strong text-white hover:scale-105 active:scale-95 transition-all flex items-center justify-center ${
          isOpen ? 'rotate-90' : ''
        }`}
        aria-label="Otwórz czat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="cw-window fixed bottom-24 right-6 z-50 w-80 md:w-96 h-[500px] rounded-3xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 text-white" style={{ background: 'rgba(46, 74, 173, 0.15)', borderBottom: '1px solid rgba(var(--ink-rgb),0.1)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white">Asystent AI</h3>
                <p className="text-xs text-white/60">Infinity Tech</p>
              </div>
            </div>
            {/* Zastrzeżenie o rozmowie z automatem musi być czytelne — /40 dawało 3,78:1. */}
            <p className="text-[10px] text-white/70 mt-2">Rozmawiasz z systemem AI, nie z człowiekiem. Odpowiedzi mogą zawierać nieścisłości.</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-[#2E4AAD] text-white'
                      : 'cw-bubble-assistant text-white/90'
                  }`}
                  style={message.role === 'user' ? { color: '#fff' } : undefined}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="cw-bubble-assistant rounded-2xl px-4 py-2">
                  <Loader2 className="w-5 h-5 animate-spin text-[#7B9BDB]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4" style={{ borderTop: '1px solid rgba(var(--ink-rgb),0.1)' }}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Napisz wiadomość..."
                className="cw-input flex-1 px-4 py-2 rounded-full text-sm text-white placeholder:text-white/30 focus:outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-full bg-[#2E4AAD] text-white flex items-center justify-center hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                style={{ color: '#fff' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
