import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              make2Be.
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <p className="text-sm text-primary font-medium">
                Inovação que Transforma. Soluções que Escalam
              </p>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Hero Title */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Serviços Modulares de
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Automação</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transforme seu negócio com nossas soluções personalizadas para Instagram e WhatsApp. 
              Automatize processos, capture leads e acelere o crescimento com eficiência máxima.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explorar Serviços
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};