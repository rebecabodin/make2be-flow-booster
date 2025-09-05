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
      description: "Use o ingresso como \"pass VIP\" para lives e pré-lançamentos, criando exclusividade e aquecendo leads para suas campanhas."
    },
    {
      title: "Comunidade Exclusiva", 
      description: "Acesso a grupos de alunos, mentorias ou desafios usando o ingresso VIP como chave de entrada premium."
    }
  ],
  "Criadores de Conteúdo": [
    {
      title: "Ativações Interativas",
      description: "Bastidores, enquetes, drops exclusivos - incentive seguidores a compartilhar seus ingressos nos Stories."
    },
    {
      title: "UGC (Conteúdo Gerado pelo Usuário)",
      description: "Incentive seguidores a compartilhar seus ingressos nos Stories, gerando prova social e alcance orgânico."
    }
  ],
  "E-commerce": [
    {
      title: "Descontos VIP",
      description: "Ingressos como códigos de desconto exclusivos, criando urgência e aumentando conversões."
    },
    {
      title: "Lançamentos",
      description: "Acesso antecipado a coleções limitadas usando ingressos VIP como porta de entrada exclusiva."
    }
  ],
  "Afiliados": [
    {
      title: "Tráfego Qualificado",
      description: "Ingressos como porta de entrada para páginas de vendas, garantindo leads mais quentes e prontos para converter."
    },
    {
      title: "Campanhas Gamificadas",
      description: "Sorteios, rankings e engajamento viral usando ingressos VIP como elemento de gamificação."
    }
  ]
};

const benefits = [
  "Exclusividade visível: cada seguidor recebe seu ingresso digital único",
  "Automação completa: do engajamento à captura, tudo acontece em segundos",
  "Escalabilidade: até 5.000 leads no plano Basic",
  "Engajamento real: seguidores compartilham seus ingressos nos Stories, gerando prova social",
  "Versatilidade: aplicável para lançamentos, eventos, promoções e comunidades VIP"
];

const leadFlowService = {
  id: 1,
  title: "LeadFlow - Instagram",
  description: "O LeadFlow vai além do engajamento: ele cria uma experiência única para seus seguidores. Quando alguém interage com sua publicação no Instagram, é gerado automaticamente um ingresso VIP digital e personalizado — com foto, nome, data do evento ou benefício exclusivo.",
  price: "R$ 350,00",
  priceValue: 350,
  category: "Engajamento / Entrada",
  segments: ["Infoprodutores", "Criadores de Conteúdo", "E-commerce", "Afiliados"],
  image: leadFlowHero,
  features: ["Até 5.000 leads", "Ingresso VIP personalizado", "Automação completa", "Experiência premium"]
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
                LeadFlow: o ingresso VIP que transforma seguidores em leads qualificados
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
            Quando um seguidor interage com sua publicação no Instagram, o LeadFlow gera automaticamente um ingresso VIP digital e exclusivo. Esse ingresso é personalizado com foto, nome e detalhes do evento, criando uma experiência memorável e um vínculo imediato com sua marca.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Esse ingresso é a chave de entrada para o seu funil: ele desperta exclusividade, incentiva a ação imediata e transforma curiosos em leads quentes e engajados.
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

      {/* Proof Social */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Marcas e criadores já escalaram seu engajamento com o LeadFlow
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Agora é a sua vez de transformar seguidores em leads de alto valor
          </p>
          <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20">
            <p className="text-muted-foreground italic">
              "O LeadFlow revolucionou nossa estratégia no Instagram. A experiência do ingresso VIP criou uma conexão única com nossa audiência e aumentou significativamente nossa taxa de conversão."
            </p>
          </div>
        </div>
      </section>

      {/* Urgency/Special Offer */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ative hoje o LeadFlow e surpreenda sua audiência
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Uma experiência exclusiva que gera leads de verdade
          </p>
          <Button 
            onClick={handleAddToCart}
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-4"
          >
            Quero meu LeadFlow prioritário →
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center border-primary/20 bg-gradient-card">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Pronto para transformar seguidores em leads de alto valor?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                A partir de R$ 350,00 (plano Basic até 5.000 leads)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">R$ 350,00</div>
                <p className="text-muted-foreground">Planos superiores disponíveis sob consulta</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Ativar LeadFlow agora →
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppSpecialist}
                >
                  Falar com especialista →
                </Button>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                Transforme seguidores em leads inteligentes hoje mesmo
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