import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços de automação da Make2be.";
    const whatsappUrl = `https://wa.me/5514996392637?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
      size="icon"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Falar no WhatsApp</span>
    </Button>
  );
};