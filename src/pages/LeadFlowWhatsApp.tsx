import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckoutPopup } from "@/components/CheckoutPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowLeft, Check, Users, Zap, Target, MessageCircle, ArrowRight, Smartphone, HelpCircle, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import whatsappVipTicketHero from "@/assets/whatsapp-vip-ticket-hero.jpg";
import whatsappFlow3Steps from "@/assets/whatsapp-flow-3-steps.jpg";
import whatsappLeadsNotifications from "@/assets/whatsapp-leads-notifications.jpg";
import vipTicketsSegments from "@/assets/vip-tickets-segments.jpg";
import socialProofCarousel from "@/assets/social-proof-carousel.jpg";

const segmentUseCases = {
  "Infoprodutores": [
    {
      title: "Lista VIP para Lançamentos",
      description: "Avisos de carrinho, pré-vendas e mentorias exclusivas via ingresso VIP personalizado.",
      icon: "🎟️"
    },
    {
      title: "Comunidades Exclusivas", 
      description: "Acesso VIP a grupos e conteúdos premium para cursos e mentorias."
    }
  ],
  "Criadores de Conteúdo": [
    {
      title: "Bastidores Exclusivos",
      description: "Drops, conteúdos exclusivos e acesso VIP aos bastidores via WhatsApp.",
      icon: "📸"
    },
    {
      title: "Engajamento Gamificado",
      description: "Ingressos VIP para sorteios, quizzes e experiências interativas exclusivas."
    }
  ],
  "E-commerce": [
    {
      title: "Cupons Relâmpago",
      description: "Ofertas exclusivas e cupons personalizados enviados via ingresso VIP.",
      icon: "🛍️"
    },
    {
      title: "Promoções VIP",
      description: "Acesso prioritário a liquidações e lançamentos com senso de urgência."
    }
  ],
  "Afiliados": [
    {
      title: "Funis Otimizados",
      description: "Ingressos VIP que direcionam para funis de vendas com maior taxa de conversão.",
      icon: "🤝"
    },
    {
      title: "Sorteios e Rankings",
      description: "Campanhas gamificadas com ingressos VIP para engajamento viral."
    }
  ],
  "Clínicas & Consultórios": [
    {
      title: "Pré-agendamentos VIP",
      description: "Convites exclusivos para agendamentos, exames e consultas prioritárias.",
      icon: "🏥"
    },
    {
      title: "Eventos de Saúde",
      description: "Ingressos digitais para palestras, workshops e campanhas de prevenção."
    }
  ],
  "Óticas & Academias": [
    {
      title: "Listas VIP Exclusivas",
      description: "Acesso prioritário a lançamentos de produtos e novas modalidades.",
      icon: "👓🎽"
    },
    {
      title: "Eventos Especiais",
      description: "Ingressos VIP para aulas experimentais e workshops exclusivos."
    }
  ],
  "Imobiliárias": [
    {
      title: "Lançamentos Exclusivos",
      description: "Convites VIP para lançamentos de imóveis e open houses privados.",
      icon: "🏠"
    },
    {
      title: "Visitas Prioritárias",
      description: "Agendamento VIP para visitas e apresentações de empreendimentos."
    }
  ]
};

const benefits = [
  "Fluxo automatizado validado pela API Oficial da Meta",
  "Captura inicial de até 250 leads no plano Basic",
  "Conversas personalizadas e segmentadas desde o primeiro contato",
  "Engajamento imediato entre Instagram e WhatsApp",
  "Total conformidade com as regras da Meta"
];

const faqItems = [
  {
    question: "É necessário ter conta WhatsApp Business?",
    answer: "Sim, recomendamos para maior autoridade e clareza na comunicação."
  },
  {
    question: "É obrigatório ter Meta/Business Manager configurado?",
    answer: "Sim. Esse é um requisito da API Oficial da Meta para o funcionamento correto."
  },
  {
    question: "Qual o tempo de ativação?",
    answer: "Até 30 dias, considerando o envio dos materiais pelo cliente."
  },
  {
    question: "Como funciona a manutenção?",
    answer: "O plano Basic cobre apenas a automação inicial. Melhorias e integrações adicionais podem ser contratadas à parte."
  }
];

const leadFlowWhatsAppService = {
  id: 2,
  title: "Ingresso VIP Digital para WhatsApp",
  description: "Transforme interações no Instagram em conversas qualificadas no WhatsApp. Cada comentário, curtida ou direct vira uma oportunidade real de relacionamento e venda.",
  price: "R$ 497,00",
  priceValue: 497,
  category: "Engajamento / Entrada",
  segments: ["Infoprodutores", "Criadores de Conteúdo", "E-commerce", "Afiliados", "Clínicas", "Óticas", "Imobiliárias"],
  image: whatsappVipTicketHero,
  features: ["Até 250 leads", "API Oficial Meta", "Fluxo Instagram + WhatsApp"]
};

export const LeadFlowWhatsApp = () => {
  const navigate = useNavigate();
  const [checkoutPopup, setCheckoutPopup] = useState(false);

  const handleAddToCart = () => {
    setCheckoutPopup(true);
  };

  const handleWhatsAppSpecialist = () => {
    const message = "Olá! Gostaria de falar com um especialista sobre o Ingresso VIP Digital para WhatsApp.";
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
                Ingresso VIP Digital para WhatsApp
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Transforme interações no Instagram em conversas qualificadas no WhatsApp — e conversas em clientes.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ative e capture leads com inteligência usando o Ingresso VIP Digital para WhatsApp. Integra Instagram e WhatsApp para criar um fluxo de entrada otimizado, personalizado e com alto engajamento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Quero meu Ingresso VIP no WhatsApp →
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
                src={whatsappVipTicketHero} 
                alt="Mockup do Ingresso VIP Digital no WhatsApp"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como Funciona o Ingresso VIP Digital para WhatsApp?
            </h2>
            <p className="text-xl text-muted-foreground">
              Fluxo simples, automatizado e inteligente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">1. Lead interage no Instagram</h3>
              <p className="text-muted-foreground">
                📱 O usuário comenta, reage ou envia DM no Instagram.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">2. Recebe convite personalizado no WhatsApp</h3>
              <p className="text-muted-foreground">
                🎟️ Um ingresso VIP digital é disparado automaticamente pelo WhatsApp via API Oficial da Meta.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">3. Conversa qualificada começa</h3>
              <p className="text-muted-foreground">
                💬 O lead inicia uma conversa já segmentada, pronto para ofertas, funis, agendamentos ou suporte.
              </p>
            </div>
          </div>
          
          {/* Visual Flow Image */}
          <div className="mt-16">
            <img 
              src={whatsappFlow3Steps} 
              alt="Fluxo em 3 etapas: Instagram, WhatsApp, Conversa Qualificada"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            O que é o Ingresso VIP Digital para WhatsApp?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O <strong>Ingresso VIP Digital para WhatsApp</strong> é uma solução estratégica que conecta <strong>Instagram e WhatsApp</strong>, transformando interações em leads qualificados.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Cada engajamento no Instagram gera um convite VIP exclusivo enviado via WhatsApp, iniciando uma conversa já segmentada e personalizada — pronta para funis, ofertas, agendamentos ou suporte.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-left">
            <p className="text-amber-800 font-medium">
              ⚠️ <strong>Importante:</strong> O uso da conta Meta/Business Manager é obrigatório. A configuração é um serviço adicional, não incluso no valor base de R$ 497,00.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Por que escolher o Ingresso VIP Digital?
            </h2>
            <p className="text-xl text-muted-foreground">
              Benefícios que transformam seu engajamento em conversões reais
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="grid gap-6">
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
            <div>
              <img 
                src={whatsappLeadsNotifications} 
                alt="Notificações de novos leads no WhatsApp"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases by Segment */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Aplicações por Segmento
            </h2>
            <p className="text-xl text-muted-foreground">
              Estratégias personalizadas para maximizar seus resultados
            </p>
          </div>
          
          {/* Segments Visual */}
          <div className="mb-16">
            <img 
              src={vipTicketsSegments} 
              alt="Ingressos VIP personalizados por segmento"
              className="w-full rounded-2xl shadow-xl"
            />
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
                    <div key={index} className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <span className="text-lg">{useCase.icon || "🎯"}</span>
                        {useCase.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed pl-7">
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

      {/* Social Proof */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Resultados Comprovados
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              "Marcas e criadores já aumentaram sua taxa de conversão em até 40% usando fluxos de entrada integrados ao WhatsApp."
            </p>
            <img 
              src={socialProofCarousel} 
              alt="Depoimentos e resultados de clientes"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o Ingresso VIP Digital
            </p>
          </div>
          
          <div className="grid gap-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    {item.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center border-primary/20 bg-gradient-card">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Pronto para começar?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Ative agora seu Ingresso VIP Digital para WhatsApp
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">R$ 497,00</div>
                <p className="text-muted-foreground">A partir de</p>
                <p className="text-sm text-muted-foreground mt-2">
                  *Configuração Meta/Business Manager não inclusa
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  <Target className="w-5 h-5 mr-2" />
                  Ativar meu Ingresso VIP →
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppSpecialist}
                >
                  Falar com Especialista
                </Button>
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
        service={leadFlowWhatsAppService}
      />
    </div>
  );
};