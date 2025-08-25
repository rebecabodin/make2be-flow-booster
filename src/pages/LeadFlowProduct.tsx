import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckoutPopup } from "@/components/CheckoutPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowLeft, Check, Users, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import leadFlowHero from "@/assets/leadflow-instagram-hero.jpg";

const segmentUseCases = {
  "Infoprodutores": [
    {
      title: "Funil de Abertura de Lançamento",
      description: "Use o LeadFlow como \"pass VIP\" para lives, webinars ou pré-lançamentos, gerando senso de exclusividade e aquecendo o público antes de uma campanha."
    },
    {
      title: "Comunidade Exclusiva", 
      description: "Conceda acesso a grupos fechados, desafios ou masterclasses usando o LeadFlow como chave de entrada, aumentando pertencimento e engajamento."
    }
  ],
  "Criadores de Conteúdo": [
    {
      title: "Ativações Interativas",
      description: "Ofereça acesso antecipado a bastidores, vídeos inéditos ou enquetes exclusivas, criando experiências que retêm e fidelizam sua audiência."
    },
    {
      title: "Incentivo ao UGC (Conteúdo Gerado pelo Usuário)",
      description: "Estimule os seguidores a compartilhar seu LeadFlow nos Stories, gerando alcance orgânico e prova social para sua marca."
    }
  ],
  "E-commerce": [
    {
      title: "Descontos VIP",
      description: "Use o LeadFlow como acesso exclusivo a cupons ou promoções-relâmpago, aumentando o senso de urgência e as conversões."
    },
    {
      title: "Lançamentos ou Coleções Exclusivas",
      description: "Crie uma pré-lista para lançamentos e use o LeadFlow como o \"convite\" para acesso antecipado a produtos limitados."
    }
  ],
  "Afiliados": [
    {
      title: "Tráfego Qualificado",
      description: "Transforme o LeadFlow em uma porta de entrada para funis, páginas de vendas ou cupons exclusivos, garantindo leads mais quentes e prontos para converter."
    },
    {
      title: "Campanhas Gamificadas",
      description: "Integre o LeadFlow a sorteios, rankings ou campanhas de engajamento, criando uma dinâmica viral para aumentar o alcance."
    }
  ]
};

const benefits = [
  "Fluxo personalizado e totalmente automatizado",
  "Engajamento estratégico com até 5 mil leads",
  "Direcionamento certeiro para funis, ofertas ou comunidades",
  "Experiência premium que conecta audiência e marca"
];

const leadFlowService = {
  id: 1,
  title: "LeadFlow - Instagram",
  description: "Ative e engaje sua audiência desde o primeiro toque com o LeadFlow — uma solução estratégica que cria um fluxo inteligente e automatizado para transformar seguidores em leads qualificados no Instagram.",
  price: "R$ 350,00",
  priceValue: 350,
  category: "Engajamento / Entrada",
  segments: ["Infoprodutores", "Criadores de Conteúdo"],
  image: leadFlowHero,
  features: ["Até 5mil leads", "Fluxo personalizado e automatizado", "Direcionamento estratégico"]
};

export const LeadFlowProduct = () => {
  const navigate = useNavigate();
  const [checkoutPopup, setCheckoutPopup] = useState(false);

  const handleAddToCart = () => {
    setCheckoutPopup(true);
  };

  const handleWhatsAppSpecialist = () => {
    const message = "Olá! Gostaria de falar com um especialista sobre o LeadFlow - Instagram.";
    const whatsappUrl = `https://wa.me/5514996392637?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto max-w-7xl px-4 pt-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Serviços
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Engajamento / Entrada
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                LeadFlow: transforme seguidores em leads qualificados no Instagram
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Engaje, capture e direcione com o fluxo inteligente que escala seus resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Ative seu LeadFlow agora →
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppSpecialist}
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={leadFlowHero} 
                alt="LeadFlow Instagram Interface"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            O que é o LeadFlow?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Ative e engaje sua audiência desde o primeiro toque com o LeadFlow — uma solução estratégica que cria um fluxo inteligente e automatizado para transformar seguidores em leads qualificados no Instagram. Com ele, você gera interação imediata, direcionamento estratégico e uma entrada personalizada para conteúdos, ofertas ou comunidades exclusivas.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ideal para escalar resultados com até 5 mil leads no plano Basic, garantindo personalização, automações integradas e uma experiência que combina engajamento e performance.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher o LeadFlow?
            </h2>
            <p className="text-xl text-muted-foreground">
              Benefícios que transformam seu engajamento em resultados reais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-lg text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Segment */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como usar em cada segmento
            </h2>
            <p className="text-xl text-muted-foreground">
              Estratégias personalizadas para maximizar seus resultados
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {Object.entries(segmentUseCases).map(([segment, cases]) => (
              <Card key={segment} className="border-border bg-background/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    {segment}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {cases.map((useCase, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        {useCase.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center border-primary/20 bg-gradient-card">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Pronto para começar?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Comece a gerar leads inteligentes hoje mesmo!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">R$ 350,00</div>
                <p className="text-muted-foreground">A partir de</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppSpecialist}
                >
                  Falar com Especialista
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                Marcas e criadores já escalaram seu engajamento com o LeadFlow — agora é a sua vez.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Checkout Popup */}
      <CheckoutPopup
        isOpen={checkoutPopup}
        onClose={() => setCheckoutPopup(false)}
        service={leadFlowService}
      />
    </div>
  );
};