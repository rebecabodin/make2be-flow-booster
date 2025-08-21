import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { HeroSection } from "@/components/HeroSection";
import { ServiceFilters } from "@/components/ServiceFilters";
import { CheckoutPopup } from "@/components/CheckoutPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

// Import images
import instagramAutomation from "@/assets/instagram-automation.jpg";
import whatsappAutomation from "@/assets/whatsapp-automation.jpg";
import engagementAutomation from "@/assets/engagement-automation.jpg";
import leadCaptureBasic from "@/assets/lead-capture-basic.jpg";
import leadCaptureAdvanced from "@/assets/lead-capture-advanced.jpg";

const services = [
  {
    id: 1,
    title: "Ingresso Personalizado para Instagram",
    description: "Criação de fluxo de entrada no Instagram, incentivando engajamento e redirecionamento estratégico para captação de leads qualificados.",
    price: "R$ 1.200,00",
    priceValue: 1200,
    category: "Engajamento / Entrada",
    segments: ["Infoprodutores", "Criadores de Conteúdo"],
    image: instagramAutomation,
    features: ["Até 5mil leads", "Segmento técnico incluído", "Configuração Manychat + N8N"]
  },
  {
    id: 2,
    title: "Ingresso Personalizado para WhatsApp", 
    description: "Fluxo de entrada otimizado com redirecionamento ao WhatsApp para captura eficiente de leads e início do funil de vendas.",
    price: "R$ 1.200,00",
    priceValue: 1200,
    category: "Engajamento / Entrada",
    segments: ["Infoprodutores", "E-commerce", "Afiliados"],
    image: whatsappAutomation,
    features: ["Até 5mil leads", "Integração WhatsApp", "Configuração Meta + N8N"]
  },
  {
    id: 3,
    title: "Fluxo de Engajamento para Comentários",
    description: "Automação inteligente que responde usuários que comentam em posts, direcionando-os estrategicamente para o funil de vendas.",
    price: "R$ 500,00",
    priceValue: 500,
    category: "Engajamento",
    segments: ["Criadores de Conteúdo", "Influencers"],
    image: engagementAutomation,
    features: ["Resposta automática", "Segmento técnico incluído", "Configuração Manychat"]
  },
  {
    id: 4,
    title: "Captação de Leads - Boas-Vindas WhatsApp",
    description: "Sistema completo de automação para envio de mensagens iniciais via WhatsApp após captação de lead, incluindo integração com LP.",
    price: "R$ 3.000,00",
    priceValue: 3000,
    category: "Captação de Leads",
    segments: ["Infoprodutores", "E-commerce"],
    image: leadCaptureBasic,
    features: ["Até 5mil leads", "Integração LP + WhatsApp", "Webhook + N8N + Cloud API"]
  },
  {
    id: 5,
    title: "Captação Avançada - Boas-Vindas + Perseguição",
    description: "Solução premium incluindo mensagem inicial e sequência completa de follow-up automatizado via WhatsApp para maximizar conversões.",
    price: "R$ 4.000,00",
    priceValue: 4000,
    category: "Captação de Leads", 
    segments: ["Infoprodutores", "E-commerce"],
    image: leadCaptureAdvanced,
    features: ["Até 5mil leads", "Sequência de follow-up", "Automação avançada completa"]
  }
];

export const ServicesLanding = () => {
  const { toast } = useToast();
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [checkoutPopup, setCheckoutPopup] = useState<{
    isOpen: boolean;
    service: typeof services[0] | null;
  }>({
    isOpen: false,
    service: null
  });

  const handleAddToCart = (service: typeof services[0]) => {
    setCheckoutPopup({
      isOpen: true,
      service: service
    });
  };

  const filterServicesByPrice = (service: typeof services[0]) => {
    if (selectedPriceRange === "all") return true;
    
    const price = service.priceValue;
    switch (selectedPriceRange) {
      case "0-1000": return price <= 1000;
      case "1000-2000": return price > 1000 && price <= 2000;
      case "2000-3000": return price > 2000 && price <= 3000;
      case "3000+": return price > 3000;
      default: return true;
    }
  };

  const filterServicesBySegment = (service: typeof services[0]) => {
    if (selectedSegments.length === 0) return true;
    return selectedSegments.some(segment => service.segments.includes(segment));
  };

  const filteredServices = services.filter(service => 
    filterServicesByPrice(service) && filterServicesBySegment(service)
  );

  const clearFilters = () => {
    setSelectedSegments([]);
    setSelectedPriceRange("all");
  };

  const handleWhatsAppSpecialist = () => {
    const message = "Olá! Gostaria de falar com um especialista sobre os serviços de automação.";
    const whatsappUrl = `https://wa.me/5514996392637?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
              Nossos Serviços
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Soluções Modulares de
              <span className="text-primary"> Automação</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha as soluções ideais para automatizar seus processos e acelerar o crescimento do seu negócio.
            </p>
          </div>

          {/* Filters */}
          <ServiceFilters
            selectedSegments={selectedSegments}
            selectedPriceRange={selectedPriceRange}
            onSegmentChange={setSelectedSegments}
            onPriceRangeChange={setSelectedPriceRange}
            onClearFilters={clearFilters}
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  category={service.category}
                  segments={service.segments}
                  image={service.image}
                  features={service.features}
                  onAddToCart={() => handleAddToCart(service)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">
                  Nenhum serviço encontrado com os filtros selecionados.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:underline font-medium"
                >
                  Limpar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossas automações podem levar sua empresa ao próximo nível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWhatsAppSpecialist}
              className="bg-gradient-primary hover:opacity-90 transition-opacity px-8 py-4 rounded-lg text-lg font-semibold text-primary-foreground"
            >
              Falar com Especialista
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors px-8 py-4 rounded-lg text-lg">
              Ver Portfólio
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">make2Be.</h3>
            <p className="text-muted-foreground">
              Inovação que Transforma. Soluções que Escalam.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Make2Be. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Checkout Popup */}
      <CheckoutPopup
        isOpen={checkoutPopup.isOpen}
        onClose={() => setCheckoutPopup({ isOpen: false, service: null })}
        service={checkoutPopup.service}
      />
    </div>
  );
};