import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  Brain, 
  Target, 
  Bot, 
  TrendingUp, 
  Database,
  Clock,
  FolderKanban,
  MessageSquare,
  BarChart3,
  Rocket,
  ArrowRight,
  Check,
  X
} from "lucide-react";

// Import images
import leadbrainHeroModules from "@/assets/leadbrain-hero-modules.jpg";
import leadbrainJourneyFunnel from "@/assets/leadbrain-journey-funnel.jpg";
import leadbrainImpactBenefits from "@/assets/leadbrain-impact-benefits.jpg";
import leadbrainModularTiers from "@/assets/leadbrain-modular-tiers.jpg";

export const LeadBrain = () => {
  const handleWhatsAppContact = () => {
    const message = "Olá! Quero conhecer melhor o LeadBrain – Hub de Leads Modular.";
    const whatsappUrl = `https://wa.me/5514996392637?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleActivate = () => {
    const message = "Quero ativar o LeadBrain agora!";
    const whatsappUrl = `https://wa.me/5514996392637?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const modules = [
    {
      icon: Target,
      title: "Captação",
      description: "Capture leads de múltiplos canais automaticamente"
    },
    {
      icon: FolderKanban,
      title: "Classificação",
      description: "Organize e segmente leads por critérios inteligentes"
    },
    {
      icon: Bot,
      title: "Qualificação com IA",
      description: "IA conversa e qualifica leads 24/7"
    },
    {
      icon: TrendingUp,
      title: "Vendas",
      description: "Automatize follow-ups e agendamentos"
    },
    {
      icon: MessageSquare,
      title: "Pós-venda",
      description: "Mantenha relacionamento após a conversão"
    },
    {
      icon: Database,
      title: "Dados",
      description: "Insights e métricas para otimizar resultados"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Economia de tempo",
      description: "Automatize tarefas repetitivas e foque no que importa"
    },
    {
      icon: FolderKanban,
      title: "Organização",
      description: "Todos os leads organizados em um só lugar"
    },
    {
      icon: Bot,
      title: "Inteligência conversacional",
      description: "IA que qualifica e nutre leads automaticamente"
    },
    {
      icon: BarChart3,
      title: "Dados integrados",
      description: "Métricas e insights em tempo real"
    },
    {
      icon: Rocket,
      title: "Conversões em escala",
      description: "Aumente resultados sem aumentar equipe"
    }
  ];

  const tiers = [
    {
      name: "Start",
      price: "R$ 997,00",
      description: "Comece com o essencial",
      modules: ["Captação", "Classificação"],
      features: [
        "Captura automática de leads",
        "Segmentação básica",
        "Integração com formulários",
        "Relatório básico"
      ]
    },
    {
      name: "Growth",
      price: "R$ 1.997,00",
      description: "Acelere com IA",
      modules: ["Start", "+ Qualificação IA"],
      features: [
        "Tudo do Start",
        "Qualificação automática com IA",
        "Scoring de leads",
        "Respostas inteligentes 24/7",
        "Integração CRM"
      ],
      highlighted: true
    },
    {
      name: "Scale",
      price: "R$ 3.997,00",
      description: "Solução completa",
      modules: ["Growth", "+ Vendas + Pós-venda + Insights"],
      features: [
        "Tudo do Growth",
        "Automação de vendas",
        "Follow-up inteligente",
        "Pós-venda automatizado",
        "Dashboard completo",
        "Análises preditivas"
      ]
    }
  ];

  const faqs = [
    {
      question: "O que é o LeadBrain?",
      answer: "Um hub modular que automatiza toda a jornada do lead — da captação ao fechamento — com IA e automações inteligentes."
    },
    {
      question: "Quais módulos estão disponíveis?",
      answer: "Start: captação e classificação. Growth: qualificação com IA. Scale: vendas, pós-venda e relatórios de dados."
    },
    {
      question: "Posso contratar por etapas?",
      answer: "Sim. O LeadBrain é 100% modular. Você começa pequeno e cresce conforme sua operação."
    },
    {
      question: "Integra com meu CRM atual?",
      answer: "Sim. Integrações disponíveis via n8n/API com Pipedrive, HubSpot, RD Station, Kommo e outros."
    },
    {
      question: "É compatível com LGPD?",
      answer: "Sim. Inclui coleta de consentimento, opt-out e logs de uso, em conformidade com LGPD."
    },
    {
      question: "Qual o prazo de ativação?",
      answer: "De 10 a 30 dias, conforme módulos contratados e materiais enviados."
    },
    {
      question: "O que está incluído no setup inicial?",
      answer: "Configuração dos módulos, parametrização de fluxos, templates de mensagens e 1 sessão de treinamento."
    },
    {
      question: "Há custos adicionais?",
      answer: "Sim, conforme uso de APIs, infraestrutura e plano de manutenção (opcional)."
    },
    {
      question: "Posso personalizar perguntas e regras de qualificação?",
      answer: "Sim. O fluxo de qualificação e scoring é totalmente personalizável por segmento e campanha."
    },
    {
      question: "O time recebe treinamento?",
      answer: "Sim. Inclui sessão de handover e guia prático de operação."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
                <Brain className="w-4 h-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Hub Modular Inteligente</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                LeadBrain – Hub de Leads Modular
              </h1>
              
              <p className="text-xl text-muted-foreground">
                Da prospecção ao pós-venda, tudo em um só lugar. 
                Automação, IA e dados para escalar seu processo comercial com inteligência.
              </p>
              
              <p className="text-lg text-foreground/80">
                Economize tempo, priorize os leads certos e aumente conversões com o poder da automação modular. 
                O LeadBrain é o cérebro que conecta sua captação, qualificação e vendas em um fluxo único e inteligente.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Consultorias e Agências", "Startups", "Clínicas e Franquias", "Times Comerciais B2B e SaaS"].map((segment) => (
                  <Badge key={segment} variant="secondary">{segment}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-primary">A partir de R$ 997,00</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleActivate}
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg"
                >
                  Quero meu LeadBrain agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={handleWhatsAppContact}
                  size="lg" 
                  variant="outline"
                  className="text-lg"
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={leadbrainHeroModules} 
                alt="LeadBrain Hub Modular"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              O tempo do seu time é valioso demais para ser desperdiçado com tarefas manuais
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: X, text: "Prospecção manual" },
              { icon: X, text: "Conversas repetitivas" },
              { icon: X, text: "Leads desorganizados" },
              { icon: X, text: "Falta de follow-up" }
            ].map((pain, index) => (
              <Card key={index} className="border-destructive/50">
                <CardContent className="pt-6 text-center">
                  <pain.icon className="w-12 h-12 text-destructive mx-auto mb-4" />
                  <p className="font-medium text-foreground">{pain.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is LeadBrain */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              O Que é o LeadBrain?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              O LeadBrain é um hub modular que automatiza toda a jornada do lead — da captação ao pós-venda — com inteligência artificial e dados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <module.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Impacto Direto no Seu Negócio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <img 
              src={leadbrainImpactBenefits} 
              alt="Impacto do LeadBrain"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Journey Example */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Jornada Automatizada
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja como o LeadBrain transforma 100 leads em oportunidades reais
            </p>
          </div>

          <div className="relative mb-12">
            <img 
              src={leadbrainJourneyFunnel} 
              alt="Jornada do Lead"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          <Card className="bg-gradient-primary/10 border-primary/20">
            <CardContent className="pt-6 text-center">
              <p className="text-2xl font-bold text-foreground">
                💬 De 100 leads → 35 oportunidades qualificadas → sem esforço humano
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modular Tiers */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Modelos Modulares
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Você escolhe os módulos que fazem sentido agora e cresce junto com seu time
            </p>
            <img 
              src={leadbrainModularTiers} 
              alt="Tiers Modulares"
              className="rounded-2xl shadow-2xl w-full mb-12"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`${tier.highlighted ? 'border-primary shadow-xl scale-105' : ''} relative`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-primary-foreground">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="text-3xl font-bold text-primary mt-4">
                    {tier.price}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-4">
                    {tier.modules.map((module, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {module}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleWhatsAppContact}
                    className="w-full mt-6 bg-gradient-primary hover:opacity-90"
                  >
                    Contratar {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforme a forma como sua empresa gera, nutre e fecha negócios
          </h2>
          <p className="text-2xl text-primary font-bold mb-8">
            💡 A partir de R$ 997,00
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleActivate}
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg"
            >
              Ativar meu LeadBrain agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={handleWhatsAppContact}
              size="lg" 
              variant="outline"
              className="text-lg"
            >
              Falar com Especialista
            </Button>
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

      <WhatsAppButton />
    </div>
  );
};