import { MessageCircle, Phone, MessageSquare } from "lucide-react";

const WHATSAPP_NUMBER = "254770501786"; // Replace with your WhatsApp number
const PHONE_NUMBER = "+254790578686"; // Replace with your phone number

export default function FloatingContactButtons() {
  const whatsappMessage = encodeURIComponent(
    "Hello Leadforge Studio, I'd like to discuss a website project.",
  );

  return (
    <>
      {/* Bottom Left — Contact Buttons */}
      <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Leadforge Studio on WhatsApp"
          className="
            group flex items-center gap-2
            rounded-full bg-[#25D366]
            px-4 py-3
            text-sm font-semibold text-white
            shadow-lg shadow-black/10
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          <MessageCircle
            size={19}
            strokeWidth={2.2}
            className="transition-transform duration-300 group-hover:scale-110"
          />

          <span className="hidden sm:inline">WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Leadforge Studio"
          className="
            flex items-center gap-2
            rounded-full
            border border-neutral-200
            bg-white
            px-4 py-3
            text-sm font-semibold text-neutral-900
            shadow-lg shadow-black/10
            transition-all duration-300
            hover:-translate-y-1 hover:border-neutral-300
            hover:shadow-xl
          "
        >
          <Phone size={18} strokeWidth={2.2} />

          <span className="hidden sm:inline">Call us</span>
        </a>
      </div>

      {/* Bottom Right — Tawk */}
      <button
        type="button"
        onClick={() => {
          if (window.Tawk_API) {
            window.Tawk_API.maximize();
          }
        }}
        aria-label="Open live chat"
        className="
          fixed bottom-5 right-5 z-50
          flex items-center gap-2
          rounded-full
          bg-[#111111]
          px-4 py-3
          text-sm font-semibold text-white
          shadow-lg shadow-black/15
          transition-all duration-300
          hover:-translate-y-1 hover:bg-neutral-800
          hover:shadow-xl
        "
      >
        <MessageSquare size={18} strokeWidth={2.2} />

        <span className="hidden sm:inline">Chat with us</span>

        <span className="relative ml-1 flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
        </span>
      </button>
    </>
  );
}
