import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckoutPopup } from "@/components/CheckoutPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ArrowLeft, Check, Users, Zap, Target, MessageCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import leadFlowWhatsAppHero from "@/assets/leadflow-whatsapp-hero.jpg";

const segmentUseCases = {
  "Infoprodutores": [
    {
      title: "Lançamentos e Pré-vendas",
      description: "Direcione leads para lista VIP com aviso de abertura de carrinho, criando expectativa e senso de exclusividade."
    },
    {
      title: "Comunidades Ativas", 
      description: "Crie grupos exclusivos para cursos ou mentorias, aumentando o engajamento e retenção dos alunos."
    }
  ],
  "Criadores de Conteúdo": [
    {
      title: "Interação Direta",
      description: "Envie conteúdos exclusivos, bastidores e drops via WhatsApp, criando conexão mais próxima com sua audiência."
    },
    {
      title: "Engajamento Gamificado",
      description: "Crie quizzes e sorteios para captar e segmentar leads, aumentando a participação e fidelização."
    }
  ],
  "E-commerce": [
    {
      title: "Promoções Relâmpago",
      description: "Envie cupons personalizados e ofertas exclusivas com senso de urgência para aumentar conversões."
    },
    {
      title: "Suporte Inteligente",
      description: "Redirecione automaticamente para atendimento humano ou chatbot especializado baseado na necessidade."
    }
  ],
  "Afiliados": [
    {
      title: "Tráfego para Funis",
      description: "Capture no WhatsApp e redirecione estrategicamente para páginas de vendas com maior taxa de conversão."
    },
    {
      title: "Campanhas Gamificadas",
      description: "Crie sorteios e rankings para engajamento, gerando alcance viral e leads qualificados."
    }
  ],
  "Clínicas e Consultórios": [
    {
      title: "Pré-agendamentos",
      description: "Capture interesse e direcione para agendamento automatizado, otimizando o processo de marcação de consultas."
    },
    {
      title: "Lembretes Automáticos",
      description: "Configure sequências de follow-up para consultas, exames e retornos, reduzindo faltas."
    }
  ],
  "Óticas e Academias": [
    {
      title: "Listas VIP",
      description: "Crie listas exclusivas para lançamentos de produtos, promoções ou novas modalidades."
    },
    {
      title: "Eventos e Aulas",
      description: "Automatize inscrições para workshops, aulas experimentais ou eventos especiais."
    }
  ]
};

const benefits = [
  "Fluxo automatizado com API Oficial da Meta",
  "Captura inicial de até 250 leads no plano Basic",
  "Segmentação inteligente e personalização de mensagens",
  "Engajamento imediato e direcionado",
  "Total conformidade com as regras da Meta"
];

const leadFlowWhatsAppService = {
  id: 2,
  title: "Ingresso VIP Digital para WhatsApp",
  description: "Transforme interações no Instagram em conversas qualificadas no WhatsApp. Cada comentário, curtida ou direct vira uma oportunidade real de relacionamento e venda.",
  price: "R$ 497,00",
  priceValue: 497,
  category: "Engajamento / Entrada",
  segments: ["Infoprodutores", "Criadores de Conteúdo", "E-commerce", "Afiliados", "Clínicas", "Óticas"],
  image: leadFlowWhatsAppHero,
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
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transforme interações no Instagram em conversas qualificadas no WhatsApp. Cada comentário, curtida ou direct vira uma oportunidade real de relacionamento e venda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Quero meu Ingresso VIP Digital →
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
                src={leadFlowWhatsAppHero} 
                alt="LeadFlow WhatsApp Interface"
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
              Como funciona o Ingresso VIP Digital?
            </h2>
            <p className="text-xl text-muted-foreground">
              Fluxo simples e inteligente em 3 passos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">1. Lead interage no Instagram</h3>
              <p className="text-muted-foreground">
                O usuário interage com seu conteúdo, stories ou posts no Instagram através de comentários, DMs ou CTAs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">2. Recebe convite no WhatsApp</h3>
              <p className="text-muted-foreground">
                Automaticamente, enviamos uma mensagem personalizada via WhatsApp usando a API Oficial da Meta.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">3. Conversa qualificada</h3>
              <p className="text-muted-foreground">
                O lead inicia uma conversa já segmentada, pronta para funis, ofertas, agendamentos ou suporte.
              </p>
            </div>
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
            O <strong>Ingresso VIP Digital para WhatsApp</strong> é uma solução estratégica que integra <strong>Instagram e WhatsApp</strong> para criar um fluxo de entrada otimizado e personalizado. O lead interage com sua marca no Instagram, recebe um convite personalizado via WhatsApp e inicia uma conversa qualificada, já segmentada, pronta para funis, ofertas, agendamentos ou suporte.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Ideal para automatizar a captação inicial de até <strong>250 leads no plano Basic</strong>, com mensagens disparadas pela API Oficial da Meta, respeitando os limites diários da plataforma.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-left">
            <p className="text-amber-800 font-medium">
              ⚠️ <strong>Importante:</strong> O uso da conta Business Manager/Meta é obrigatório, e sua configuração é um serviço adicional, não incluso no valor base de R$ 497,00.
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
      <section className="py-20 px-4">
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
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center border-primary/20 bg-gradient-card">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Pronto para começar?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Ativar agora meu fluxo de leads!
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
                Marcas e criadores já aumentaram sua taxa de conversão em até 40% com fluxos de entrada integrados ao WhatsApp.
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