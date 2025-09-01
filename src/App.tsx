import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ServicesLanding } from "./pages/ServicesLanding";
import { LeadFlowProduct } from "./pages/LeadFlowProduct";
import { LeadFlowWhatsApp } from "./pages/LeadFlowWhatsApp";
import { CheckoutPage } from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ServicesLanding />} />
          <Route path="/leadflow-instagram" element={<LeadFlowProduct />} />
          <Route path="/leadflow-whatsapp" element={<LeadFlowWhatsApp />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
