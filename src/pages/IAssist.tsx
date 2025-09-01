import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckoutPopup } from "@/components/CheckoutPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Check, Clock, Users, MessageCircle, TrendingUp, Shield, Zap, HeadphonesIcon } from "lucide-react";
import iassistHero from "@/assets/iassist-hero.jpg";

const faqData = [
  {
    question: "É necessário ter conta WhatsApp Business?",
    answer: "Não é obrigatório, mas é altamente recomendado ter o WhatsApp Business configurado, pois transmite autoridade, confiança e clareza para o seu cliente."
  },
  {
    question: "Posso integrar com minha base atual de CRM?",
    answer: "Sim, e é o ideal para automatizar ainda mais o processo. No entanto, o plano Start não contempla essa integração. Caso queira, esse serviço pode ser contratado à parte."
  },
  {
    question: "Qual o tempo de ativação do IAssist?",
    answer: "O prazo é de até 30 dias, considerando que você nos envie os materiais necessários (informações da empresa, tom de voz, fluxos e conteúdos base) para treinarmos o agente corretamente."
  },
  {
    question: "Como funciona a manutenção corretiva?",
    answer: "A manutenção corretiva garante suporte exclusivo para corrigir falhas, indisponibilidades ou problemas técnicos. SLA de 1 hora para início do atendimento após abertura do chamado."
  },
  {
    question: "Posso usar API Oficial e não Oficial?",
    answer: "Sim! API Oficial: mais segurança, conformidade e escalabilidade. API não Oficial: mais flexibilidade e menor custo inicial, porém sem suporte oficial da Meta."
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Nunca mais perca um lead, atenda seus clientes 24 horas por dia, 7 dias por semana"
  },
  {
    icon: MessageCircle,
    title: "Respostas Humanizadas",
    description: "Tom ajustado à sua marca com conversas naturais e inteligentes"
  },
  {
    icon: Users,
    title: "Escalabilidade",
    description: "Atenda 10, 100 ou 10.000 clientes ao mesmo tempo sem sobrecarregar a equipe"
  },
  {
    icon: TrendingUp,
    title: "Mais Conversão",
    description: "Leads qualificados chegam prontos para fechar negócio"
  },
  {
    icon: Shield,
    title: "Redução de Custos",
    description: "Menos equipe dedicada ao atendimento inicial, mais eficiência"
  },
  {
    icon: Zap,
    title: "Integração Inteligente",
    description: "Compatível com API Oficial do WhatsApp, Evolution API ou outros canais"
  }
];

const steps = [
  {
    number: "01",
    title: "Configuramos e Conectamos",
    description: "Seu agente é conectado ao WhatsApp e configurado especificamente para seu negócio"
  },
  {
    number: "02",
    title: "Ele Aprende",
    description: "O IAssist aprende sobre seus produtos, serviços e tom de comunicação da sua marca"
  },
  {
    number: "03",
    title: "Começa a Atender",
    description: "Inicia o atendimento, qualificação e direcionamento automático de leads"
  }
];

const segments = [
  "E-commerce", "Infoprodutores", "Varejo", "Clínicas", "Imobiliárias", 
  "Óticas", "Academias", "Escolas", "Restaurantes", "Profissionais Liberais"
];

export const IAssist = () => {
  const [checkoutPopup, setCheckoutPopup] = useState({
    isOpen: false,
    service: null as any
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = {
    id: 6,
    title: "IAssist – Agente de IA para Atendimento no WhatsApp",
    description: "O seu atendente digital inteligente, disponível 24h por dia no WhatsApp, que responde dúvidas, qualifica leads e direciona clientes para os fluxos certos com agilidade e precisão.",
    price: "R$ 1.200,00",
    priceValue: 1200,
    category: "Marketing / Vendas",
    segments: ["E-commerce", "Infoprodutores", "Varejo", "Clínicas", "Imobiliárias", "Óticas", "Academias"],
    image: iassistHero,
    features: ["Atendimento 24h", "Respostas humanizadas", "Escalabilidade", "API Oficial e não Oficial"]
  };

  const handleAddToCart = () => {
    setCheckoutPopup({
      isOpen: true,
      service: service
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Inteligência Artificial
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  IAssist: O atendente digital que 
                  <span className="text-primary"> nunca dorme</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Transforme conversas no WhatsApp em vendas com inteligência e agilidade. 
                  Atendimento 24h que qualifica leads e aumenta suas conversões.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
                >
                  Quero meu IAssist agora
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Ver como funciona
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={iassistHero} 
                alt="IAssist - Agente de IA para WhatsApp"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">24h Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema & Solução */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                O Problema que Todo Negócio Enfrenta
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Leads ignorados perdendo oportunidades
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Clientes esperando por respostas
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Equipes sobrecarregadas
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  Vendas perdidas por falta de agilidade
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                A Solução Inteligente
              </h2>
              <p className="text-lg text-muted-foreground">
                O IAssist responde, engaja e direciona automaticamente – 24 horas por dia. 
                Seus clientes recebem atendimento imediato e qualificado, enquanto você foca no que realmente importa: fechar vendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Por que Escolher o <span className="text-primary">IAssist?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforme seu atendimento com inteligência artificial e veja seus resultados decolar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border bg-gradient-card hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Como Funciona em <span className="text-primary">3 Passos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo simples e rápido para ativar seu assistente de IA
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ideal para <span className="text-primary">Seu Segmento</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {segments.map((segment, index) => (
              <Badge key={index} variant="secondary" className="px-6 py-3 text-base">
                {segment}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Investimento */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Investimento
            </h2>
          </div>
          
          <Card className="border-primary/20 bg-gradient-card">
            <CardContent className="p-12 text-center">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-primary mb-2">R$ 1.200,00</div>
                  <div className="text-lg text-muted-foreground">Setup inicial (primeiro mês)</div>
                </div>
                
                <div className="h-px bg-border"></div>
                
                <div>
                  <div className="text-3xl font-bold text-foreground mb-2">R$ 500,00/mês</div>
                  <div className="text-lg text-muted-foreground">Manutenção corretiva com SLA de 1 hora</div>
                </div>
                
                <Button 
                  onClick={handleAddToCart}
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-12 py-6"
                >
                  Quero meu IAssist prioritário →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Depoimento */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="border-primary/20 bg-background/95 backdrop-blur">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="flex justify-center">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-foreground italic">
                  "Reduzimos o tempo de resposta em 60% e aumentamos nossas vendas em 35% já no primeiro mês com o IAssist."
                </blockquote>
                <div className="text-muted-foreground">
                  <strong>João Silva</strong> — E-commerce XYZ
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-border bg-gradient-card">
                <CardContent 
                  className="p-6 cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                    <span className="text-primary text-xl">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </div>
                  {openFaq === index && (
                    <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Pronto para Transformar seu WhatsApp em uma Máquina de Vendas?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Ative hoje e garanta prioridade no setup do seu agente inteligente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleAddToCart}
                size="lg" 
                variant="secondary"
                className="text-lg px-12 py-6"
              >
                Quero meu IAssist agora →
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-12 py-6 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Falar com especialista →
              </Button>
            </div>
          </div>
        </div>
      </section>

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