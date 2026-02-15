import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Calendar, Phone } from 'lucide-react';
import { CONFIG } from '@/config/constants';

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  actions?: { label: string; icon?: string; url: string }[];
}

const SESSION_KEY = 'mostachia-chat-messages';
const SESSION_ID_KEY = 'mostachia-chat-session-id';

const getSessionId = () => {
  let id = sessionStorage.getItem(SESSION_ID_KEY);
  if (!id) {
    id = `web-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem(SESSION_ID_KEY, id);
  }
  return id;
};

const initialBotMessages: Omit<ChatMessage, 'id' | 'timestamp'>[] = [
  { text: '¡Hola! 👋 Soy el asistente de MostachIA.', isBot: true },
  { text: 'Podés preguntarme sobre nuestros servicios, cómo trabajamos, precios, integraciones, o lo que necesites.', isBot: true },
  { text: 'También podés agendar una reunión o hablar con el equipo. ¿En qué te puedo ayudar?', isBot: true },
];

const quickReplies = [
  '💰 Precios y planes',
  '🎯 Ver servicios',
  '📅 Agendar reunión',
  '🔧 Integraciones',
];

const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-mint-400"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  </div>
);

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);
  const [fabVisible, setFabVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const sessionId = useRef(getSessionId());

  // FAB entrance delay
  useEffect(() => {
    const timer = setTimeout(() => setFabVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Load from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setMessages(parsed.map((m: any) => ({ ...m, timestamp: new Date(m.timestamp) })));
        setShowQuickReplies(false);
        setHasInitialized(true);
      } catch { /* ignore */ }
    }
  }, []);

  // Save to sessionStorage
  useEffect(() => {
    if (messages.length > 0) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Show initial messages with stagger on first open
  useEffect(() => {
    if (isOpen && !hasInitialized && messages.length === 0) {
      setHasInitialized(true);
      initialBotMessages.forEach((msg, i) => {
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { ...msg, id: `init-${i}`, timestamp: new Date() },
          ]);
        }, i * 400);
      });
    }
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, hasInitialized, messages.length]);

  const sendMessage = useCallback(async (text: string) => {
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      text,
      isBot: false,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setShowQuickReplies(false);
    setIsTyping(true);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);

      const response = await fetch(CONFIG.N8N_CHAT_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          sessionId: sessionId.current,
          source: 'web-chat',
          timestamp: new Date().toISOString(),
        }),
        signal: controller.signal,
      });

      clearTimeout(timeout);
      if (!response.ok) throw new Error('Network error');

      const data = await response.json();
      const botText =
        data.output || data.message || data[0]?.output || data[0]?.message ||
        'Gracias por tu mensaje. Te contactamos pronto.';

      setMessages(prev => [
        ...prev,
        { id: `bot-${Date.now()}`, text: botText, isBot: true, timestamp: new Date() },
      ]);
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: `bot-err-${Date.now()}`,
          text: 'Parece que tengo problemas para responder ahora. ¿Querés contactarnos directamente?',
          isBot: true,
          timestamp: new Date(),
          actions: [
            { label: '📱 WhatsApp', url: CONFIG.WHATSAPP_URL },
            { label: '📅 Agendar Llamada', url: CONFIG.CALCOM_URL },
          ],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  const handleSend = () => {
    if (!input.trim() || isTyping) return;
    sendMessage(input.trim());
  };

  return (
    <>
      {/* FAB */}
      <AnimatePresence>
        {fabVisible && (
          <motion.button
            initial={{ scale: 0, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(prev => !prev)}
            className="fixed bottom-6 right-6 z-40 w-[60px] h-[60px] rounded-full text-navy-900 shadow-lg shadow-mint-400/30 hover:shadow-xl hover:shadow-mint-400/40 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #73D7CB, #5CB8A5)' }}
            aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <MessageCircle className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
            {/* Online dot */}
            {!isOpen && (
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-green-400 border-2 border-background animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-24px)] md:max-w-[380px] flex flex-col rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40 backdrop-blur-xl bg-background/95
              max-md:bottom-0 max-md:right-0 max-md:w-full max-md:h-full max-md:rounded-none max-md:max-w-full"
            style={{ height: '520px', maxHeight: 'calc(100vh - 150px)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 shrink-0" style={{ background: 'linear-gradient(135deg, #73D7CB, #5CB8A5)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-900/20 flex items-center justify-center">
                  <img src="/isotipo-mint.png" alt="MostachIA" className="w-7 h-7" />
                </div>
                <div className="text-navy-900">
                  <p className="font-display font-semibold text-sm">MostachIA</p>
                  <p className="text-xs opacity-80 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                    Asistente de IA · En línea
                  </p>
                </div>
              </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-navy-900/20 flex items-center justify-center transition-colors text-navy-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-navy-900/40">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className="flex flex-col gap-1 max-w-[85%]">
                    <div
                      className={`px-4 py-3 text-sm leading-relaxed ${
                        msg.isBot
                          ? 'bg-white/10 text-foreground rounded-2xl rounded-bl-sm'
                          : 'bg-primary text-primary-foreground rounded-2xl rounded-br-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.actions && (
                      <div className="flex gap-2 mt-1">
                        {msg.actions.map((action) => (
                          <a
                            key={action.label}
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-xs font-medium px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5 ${
                              action.label.includes('WhatsApp')
                                ? 'bg-[#25D366] text-white hover:bg-[#20bd5a]'
                                : 'bg-primary text-primary-foreground hover:bg-primary/90'
                            }`}
                          >
                            {action.label.includes('WhatsApp') ? <Phone className="w-3 h-3" /> : <Calendar className="w-3 h-3" />}
                            {action.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && <TypingIndicator />}

              {/* Quick Replies */}
              {showQuickReplies && messages.length > 0 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-2 pt-2"
                >
                  {quickReplies.map((qr) => (
                    <button
                      key={qr}
                      onClick={() => sendMessage(qr)}
                      className="text-xs px-3 py-2 rounded-xl bg-white/10 border border-white/10 text-foreground hover:bg-primary/20 hover:border-primary/30 transition-all"
                    >
                      {qr}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/10 bg-background/80 flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribí tu mensaje..."
                disabled={isTyping}
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-mint-400 text-navy-900 hover:bg-mint-300 transition-colors disabled:opacity-30"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
