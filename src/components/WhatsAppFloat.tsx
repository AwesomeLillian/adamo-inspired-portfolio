import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/27761964617?text=How%20can%20I%20help%20you%3F"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground shadow-lg sm:block">
        Need Help? Chat with us
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-xl transition-transform group-hover:scale-105">
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </span>
    </a>
  );
}
