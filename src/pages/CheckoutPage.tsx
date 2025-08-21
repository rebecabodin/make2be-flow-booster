import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ShoppingCart, User, Mail, Phone, MessageSquare, CreditCard, Shield, Clock } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Ingresso Personalizado para Instagram",
    price: "R$ 1.200,00",
    priceValue: 1200,
    category: "Engajamento / Entrada",
    segments: ["Infoprodutores", "Criadores de Conteúdo"],
    features: ["Até 5mil leads", "Segmento técnico incluído", "Configuração Manychat + N8N"]
  },
  {
    id: 2,
    title: "Ingresso Personalizado para WhatsApp", 
    price: "R$ 1.200,00",
    priceValue: 1200,
    category: "Engajamento / Entrada",
    segments: ["Infoprodutores", "E-commerce", "Afiliados"],
    features: ["Até 5mil leads", "Integração WhatsApp", "Configuração Meta + N8N"]
  },
  {
    id: 3,
    title: "Fluxo de Engajamento para Comentários",
    price: "R$ 500,00",
    priceValue: 500,
    category: "Engajamento",
    segments: ["Criadores de Conteúdo", "Influencers"],
    features: ["Resposta automática", "Segmento técnico incluído", "Configuração Manychat"]
  },
  {
    id: 4,
    title: "Captação de Leads - Boas-Vindas WhatsApp",
    price: "R$ 3.000,00",
    priceValue: 3000,
    category: "Captação de Leads",
    segments: ["Infoprodutores", "E-commerce"],
    features: ["Até 5mil leads", "Integração LP + WhatsApp", "Webhook + N8N + Cloud API"]
  },
  {
    id: 5,
    title: "Captação Avançada - Boas-Vindas + Perseguição",
    price: "R$ 4.000,00",
    priceValue: 4000,
    category: "Captação de Leads", 
    segments: ["Infoprodutores", "E-commerce"],
    features: ["Até 5mil leads", "Sequência de follow-up", "Automação avançada completa"]
  }
];

export const CheckoutPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const serviceId = searchParams.get('service');
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const service = services.find(s => s.id === Number(serviceId));

  useEffect(() => {
    if (!service) {
      navigate('/');
    }
  }, [service, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Pedido realizado com sucesso!",
      description: "Nossa equipe entrará em contato em até 24h para dar prosseguimento.",
    });
    
    // Redirect to success or home
    setTimeout(() => navigate('/'), 2000);
  };

  const handleWhatsAppCheckout = () => {
    const message = `Olá! Gostaria de contratar o serviço: *${service?.title}* (${service?.price}). 

Meus dados:
• Nome: ${formData.name}
• Email: ${formData.email}
• WhatsApp: ${formData.phone}
• Empresa: ${formData.company || 'Não informado'}

${formData.message ? `Observações: ${formData.message}` : ''}

Por favor, me enviem mais detalhes sobre o processo de contratação.`;
    
    const whatsappUrl = `https://wa.me/5514996392637?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!service) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos Serviços
          </Button>
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">Finalizar Pedido</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h3 className="font-bold text-foreground">{service.title}</h3>
                  <Badge variant="secondary">{service.category}</Badge>
                  
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

                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total:</span>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-green-600" />
                    Pagamento seguro
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Entrega em até 15 dias
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MessageSquare className="w-4 h-4 text-primary" />
                    Suporte via WhatsApp
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Seus Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="h-12"
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
                        className="h-12"
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
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa/Negócio</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Nome da sua empresa"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Observações sobre seu projeto
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Conte-nos mais sobre seu projeto, necessidades específicas, prazos, etc..."
                      rows={4}
                    />
                  </div>

                  {/* Payment Options */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Formas de Pagamento
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button
                        type="button"
                        onClick={handleWhatsAppCheckout}
                        className="bg-green-600 hover:bg-green-700 text-white h-14 text-base"
                        disabled={!formData.name || !formData.email || !formData.phone}
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Finalizar via WhatsApp
                      </Button>
                      
                      <Button
                        type="submit"
                        variant="outline"
                        className="h-14 text-base border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        disabled={!formData.name || !formData.email || !formData.phone}
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Solicitar Orçamento
                      </Button>
                    </div>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      Aceitamos PIX, transferência bancária e parcelamento no cartão
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};