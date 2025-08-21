import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, User, Mail, Phone, MessageSquare } from "lucide-react";

interface CheckoutPopupProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    price: string;
    category: string;
    segments: string[];
    features: string[];
  } | null;
}

export const CheckoutPopup = ({ isOpen, onClose, service }: CheckoutPopupProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate checkout process
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em breve para finalizar seu pedido.",
    });
    
    // Clear form and close popup
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
    onClose();
  };

  const handleWhatsAppCheckout = () => {
    const message = `Olá! Gostaria de contratar o serviço: *${service?.title}* (${service?.price}). Meus dados: Nome: ${formData.name}, Email: ${formData.email}, Telefone: ${formData.phone}`;
    const whatsappUrl = `https://wa.me/5514996392637?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            Finalizar Pedido
          </DialogTitle>
          <DialogDescription>
            Complete seus dados para solicitar o serviço
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Service Summary */}
          <div className="bg-gradient-card p-4 rounded-lg border border-border">
            <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
            <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
            <Badge variant="secondary" className="mb-3">
              {service.category}
            </Badge>
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Inclui:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Digite seu nome completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  WhatsApp *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  placeholder="(14) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa/Negócio</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="Nome da sua empresa"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Observações
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Conte-nos mais sobre seu projeto, dúvidas ou necessidades específicas..."
                rows={3}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="bg-green-600 hover:bg-green-700 text-white flex-1"
                disabled={!formData.name || !formData.email || !formData.phone}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Finalizar via WhatsApp
              </Button>
              <Button
                type="submit"
                variant="outline"
                className="flex-1"
                disabled={!formData.name || !formData.email || !formData.phone}
              >
                Enviar Solicitação
              </Button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground text-center">
            Ao prosseguir, você concorda que nossa equipe entre em contato para finalizar seu pedido.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};