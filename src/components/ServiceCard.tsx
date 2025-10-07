import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  category: string;
  segments: string[];
  image: string;
  features: string[];
  onAddToCart: () => void;
}

export const ServiceCard = ({ 
  title, 
  description, 
  price, 
  category, 
  segments, 
  image,
  features,
  onAddToCart 
}: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-gradient-card overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
            {category}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {segments.map((segment, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {segment}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            {price}
          </div>
          <div className="text-sm text-muted-foreground">
            A partir de
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onAddToCart}
          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
          size="lg"
        >
          {title === "Ingresso VIP Digital para Instagram" || title === "LeadFlow - Instagram" || title === "LeadFlow – WhatsApp" || title === "IAssist – Agente de IA para Atendimento no WhatsApp" || title === "LeadBrain – Hub de Leads Modular" ? "Saiba mais" : "Adicionar ao Carrinho"}
        </Button>
      </CardFooter>
    </Card>
  );
};