"use client"

import { MessageSquare } from "lucide-react"

export function WhatsAppCTA() {
  const phoneNumber = "7349710589"
  const message = "Hello Om Sai Enterprises, I am looking for reliable manpower supply services. Please contact me."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/6257f277-0e3c-4892-8cba-be0fbf978a58/Untitled-design-1769544178396.png?width=8000&height=8000&resize=contain" 
            alt="WhatsApp" 
            className="w-8 h-8 object-contain"
          />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
      <span className="font-bold text-sm hidden group-hover:block transition-all duration-300">
        WhatsApp Us
      </span>
    </a>
  )
}
