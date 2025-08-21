import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface ServiceFiltersProps {
  selectedSegments: string[];
  selectedPriceRange: string;
  onSegmentChange: (segments: string[]) => void;
  onPriceRangeChange: (range: string) => void;
  onClearFilters: () => void;
}

const segments = [
  "Infoprodutores",
  "Criadores de Conteúdo", 
  "E-commerce",
  "Afiliados",
  "Influencers"
];

const priceRanges = [
  { value: "all", label: "Todos os valores" },
  { value: "0-1000", label: "Até R$ 1.000" },
  { value: "1000-2000", label: "R$ 1.000 - R$ 2.000" },
  { value: "2000-3000", label: "R$ 2.000 - R$ 3.000" },
  { value: "3000+", label: "Acima de R$ 3.000" }
];

export const ServiceFilters = ({
  selectedSegments,
  selectedPriceRange,
  onSegmentChange,
  onPriceRangeChange,
  onClearFilters
}: ServiceFiltersProps) => {
  const toggleSegment = (segment: string) => {
    if (selectedSegments.includes(segment)) {
      onSegmentChange(selectedSegments.filter(s => s !== segment));
    } else {
      onSegmentChange([...selectedSegments, segment]);
    }
  };

  const hasActiveFilters = selectedSegments.length > 0 || selectedPriceRange !== "all";

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center">
        <h3 className="text-lg font-semibold text-foreground">Filtrar Serviços</h3>
        
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          {/* Segmento Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Nicho/Segmento:</label>
            <div className="flex flex-wrap gap-2">
              {segments.map((segment) => (
                <Button
                  key={segment}
                  variant={selectedSegments.includes(segment) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleSegment(segment)}
                  className="text-xs"
                >
                  {segment}
                </Button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2 min-w-[200px]">
            <label className="text-sm font-medium text-foreground">Faixa de Preço:</label>
            <Select value={selectedPriceRange} onValueChange={onPriceRangeChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Limpar Filtros
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {selectedSegments.map((segment) => (
              <Badge
                key={segment}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => toggleSegment(segment)}
              >
                {segment}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            ))}
            {selectedPriceRange !== "all" && (
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => onPriceRangeChange("all")}
              >
                {priceRanges.find(r => r.value === selectedPriceRange)?.label}
                <X className="w-3 h-3 ml-1" />
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
};