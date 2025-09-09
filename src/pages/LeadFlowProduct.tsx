import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckoutPopup } from "@/components/CheckoutPopup";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  ArrowLeft, 
  Check, 
  Users, 
  Zap, 
  Target, 
  Star, 
  TrendingUp, 
  Shield, 
  Sparkles,
  AlertTriangle,
  CheckCircle,
  MessageCircle,
  Heart,
  Share2,
  Gift,
  Crown,
  Settings,
  BarChart3
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import new images
import heroIngressoVip from "@/assets/hero-ingresso-vip.jpg";
import ingressosMultiplos from "@/assets/ingressos-multiplos.jpg";
import antesDepoisEngajamento from "@/assets/antes-depois-engajamento.jpg";
import comoFunciona3Passos from "@/assets/como-funciona-3-passos.jpg";
import segmentosCarrossel from "@/assets/segmentos-carrossel.jpg";
import compartilhandoStories from "@/assets/compartilhando-stories.jpg";
import provaSocialGrafico from "@/assets/prova-social-grafico.jpg";

const beneficiosChave = [
  {
    icon: Crown,
    title: "Exclusividade que gera desejo",
    description: "Cada seguidor recebe um ingresso digital único e personalizado"
  },
  {
    icon: Share2,
    title: "Viralização orgânica",
    description: "Seguidores compartilham nos Stories, gerando prova social automática"
  },
  {
    icon: TrendingUp,
    title: "Escala: até 2.000 leads no Basic",
    description: "Transforme seguidores que já interagem com você em leads valiosos, prontos para receber suas ofertas e participar dos seus eventos"
  },
  {
    icon: Settings,
    title: "Automação 100% integrada",
    description: "Do engajamento à captura, tudo acontece automaticamente"
  },
  {
    icon: Sparkles,
    title: "Experiência premium",
    description: "Fortalece sua marca com experiências memoráveis"
  }
];

const aplicacoesPorSegmento = {
  "Infoprodutores": {
    icon: Users,
    casos: [
      "Ingressos como pass VIP para lançamentos e mentorias",
      "Acesso exclusivo a comunidades e desafios"
    ]
  },
  "Criadores de Conteúdo": {
    icon: Heart,
    casos: [
      "Bastidores, drops exclusivos e engajamento nos Stories",
      "Incentivo ao UGC com compartilhamento de ingressos"
    ]
  },
  "E-commerce": {
    icon: Gift,
    casos: [
      "Cupons VIP e acesso antecipado a coleções",
      "Ingressos para eventos de lançamento"
    ]
  },
  "Afiliados": {
    icon: Target,
    casos: [
      "Sorteios e funis de vendas gamificados",
      "Direcionamento para páginas de alta conversão"
    ]
  },
  "Clínicas/Óticas": {
    icon: Shield,
    casos: [
      "Convites digitais para inaugurações e eventos",
      "Agendamentos VIP com experiência premium"
    ]
  },
  "Imobiliárias": {
    icon: Star,
    casos: [
      "Convites para lançamentos de imóveis",
      "Ingressos para open house exclusivo"
    ]
  }
};

const faqItems = [
  {
    question: "O que é o Ingresso VIP Digital para Instagram?",
    answer: "É um ingresso digital personalizado gerado automaticamente quando alguém interage com sua publicação no Instagram."
  },
  {
    question: "O que vem no ingresso?",
    answer: "Foto do usuário, nome personalizado, data do evento e identidade visual da sua marca."
  },
  {
    question: "Qual o limite do plano Basic?",
    answer: "Até 2.000 leads qualificados capturados automaticamente."
  },
  {
    question: "Funciona para quais negócios?",
    answer: "Infoprodutores, criadores, e-commerce, afiliados, clínicas, óticas, imobiliárias, academias, restaurantes e muito mais."
  },
  {
    question: "Preciso fornecer algum material?",
    answer: "Sim, o design do ingresso é responsabilidade do cliente (logo, paleta de cores, identidade visual)."
  },
  {
    question: "Como acompanho os resultados?",
    answer: "Você recebe métricas essenciais como ingressos gerados e leads captados em tempo real."
  }
];

const leadFlowService = {
  id: 1,
  title: "Ingresso VIP Digital para Instagram",
  description: "Transforme seguidores em leads qualificados com experiência exclusiva e personalizada",
  price: "R$ 350,00",
  priceValue: 350,
  category: "Engajamento / Entrada",
  segments: ["Infoprodutores", "Criadores de Conteúdo", "E-commerce", "Afiliados", "Clínicas", "Óticas", "Imobiliárias"],
  image: heroIngressoVip,
  features: ["Até 2.000 leads", "Ingresso VIP personalizado", "Automação completa", "Experiência premium"]
};

export const LeadFlowProduct = () => {
  const navigate = useNavigate();
  const [checkoutPopup, setCheckoutPopup] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAddToCart = () => {
    setCheckoutPopup(true);
  };

  const handleWhatsAppSpecialist = () => {
    const message = "Olá! Gostaria de falar com um especialista sobre o Ingresso VIP Digital para Instagram.";
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
                Ingresso VIP Digital: transforme seguidores em leads qualificados no Instagram
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Crie uma experiência exclusiva para sua audiência: ao interagir com sua publicação, cada seguidor recebe um ingresso VIP digital personalizado com foto, nome e data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  size="lg"
                  className="bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  Quero meu Ingresso VIP agora →
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={handleWhatsAppSpecialist}
                >
                  Falar com especialista
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroIngressoVip} 
                alt="Mockup do Ingresso VIP Digital para Instagram"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Ingresso VIP Digital */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                O que é o Ingresso VIP Digital?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                O Ingresso VIP Digital é a forma mais clara e impactante de transformar engajamento no Instagram em leads reais. Quando um seguidor interage, ele recebe automaticamente um ingresso digital exclusivo e personalizado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esse ingresso gera pertencimento, desejo e direciona sua audiência para o próximo passo do seu funil.
              </p>
            </div>
            <div className="relative">
              <img 
                src={ingressosMultiplos} 
                alt="Mockups de ingressos VIP personalizados"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problema vs Solução */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Problema */}
            <Card className="border-red-300 bg-red-50 shadow-lg rounded-xl p-6" style={{ backgroundColor: '#FDE8E8', borderColor: '#FCA5A5' }}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold" style={{ color: '#B91C1C' }}>
                  ⚠️ Problemas Atuais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: '#B91C1C' }}></div>
                  <p className="text-lg leading-relaxed" style={{ color: '#B91C1C' }}>Seu público interage mas você não captura leads</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: '#B91C1C' }}></div>
                  <p className="text-lg leading-relaxed" style={{ color: '#B91C1C' }}>Engajamento no Instagram sem estratégia se perde</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full mt-1.5" style={{ backgroundColor: '#B91C1C' }}></div>
                  <p className="text-lg leading-relaxed" style={{ color: '#B91C1C' }}>Falta exclusividade que gera desejo real</p>
                </div>
              </CardContent>
            </Card>

            {/* Solução */}
            <Card className="border-green-300 bg-green-50 shadow-lg rounded-xl p-6" style={{ backgroundColor: '#E6F4EA', borderColor: '#86EFAC' }}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-2xl font-bold" style={{ color: '#1B5E20' }}>
                  ✅ Nossa Solução
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1B5E20' }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#1B5E20' }}>Cada interação gera um lead qualificado</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1B5E20' }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#1B5E20' }}>Um ingresso VIP digital personalizado para cada seguidor</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1B5E20' }}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg leading-relaxed" style={{ color: '#1B5E20' }}>Engajamento com valor, escalável até 2.000 leads no plano Basic</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <img 
              src={antesDepoisEngajamento} 
              alt="Comparação antes e depois do engajamento"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Benefícios-Chave */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Benefícios-Chave
            </h2>
            <p className="text-xl text-muted-foreground">
              Transforme seu engajamento em resultados mensuráveis
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiosChave.map((beneficio, index) => {
              const IconComponent = beneficio.icon;
              return (
                <Card key={index} className="text-center border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{beneficio.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{beneficio.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como Funciona (em 3 passos)
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo simples e automatizado
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={comoFunciona3Passos} 
              alt="Infográfico de 3 passos do funcionamento"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  1
                </div>
                <CardTitle>Seguidor Interage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O seguidor interage com a publicação no Instagram (direct e comentário)
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  2
                </div>
                <CardTitle>Ingresso Gerado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Um ingresso VIP digital é gerado automaticamente com foto, nome e data
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  3
                </div>
                <CardTitle>Direcionamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O seguidor é direcionado para live, oferta, comunidade ou evento
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Aplicações por Segmento */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Aplicações por Segmento
            </h2>
            <p className="text-xl text-muted-foreground">
              Versatilidade que se adapta ao seu negócio
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={segmentosCarrossel} 
              alt="Carrossel de ingressos por segmentos"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(aplicacoesPorSegmento).map(([segmento, dados]) => {
              const IconComponent = dados.icon;
              return (
                <Card key={segmento} className="border-border bg-background/80">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-foreground">
                      <IconComponent className="w-5 h-5 text-primary" />
                      {segmento}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {dados.casos.map((caso, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <p className="text-muted-foreground text-sm">{caso}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Marcas e criadores já escalaram seu engajamento
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                — agora é a sua vez.
              </p>
              <Card className="border-primary/20 bg-gradient-card">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Conseguimos capturar 1.500 leads em apenas uma campanha com o Ingresso VIP Digital. O engajamento foi muito além do esperado."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Cliente Real</p>
                      <p className="text-sm text-muted-foreground">Infoprodutor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <img 
                src={provaSocialGrafico} 
                alt="Prova social com gráfico de crescimento"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Esclarecemos todas as suas dúvidas
            </p>
          </div>
          
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <Card key={index} className="border-border">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>{faq.question}</span>
                    <div className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </CardTitle>
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                    {index === 4 && (
                      <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                        <p className="text-amber-800 dark:text-amber-200 text-sm">
                          ⚠️ O design do ingresso é responsabilidade do cliente.
                        </p>
                      </div>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sessão de Urgência */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={compartilhandoStories} 
                alt="Usuário compartilhando ingresso nos Stories"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                👉 Ative hoje o Ingresso VIP Digital
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Crie uma experiência que seus seguidores vão querer compartilhar.
              </p>
              <Button 
                onClick={handleAddToCart}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-4"
              >
                Quero meu Ingresso VIP agora →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center border-primary/20 bg-gradient-card">
            <CardHeader className="pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                👉 Pronto para transformar seu Instagram em uma máquina de leads qualificados?
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                A partir de R$ 350,00 (plano Basic até 2.000 leads)
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
                  Ativar Ingresso VIP Digital →
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
                Transformar seguidores em leads qualificados
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