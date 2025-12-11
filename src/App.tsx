import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AvionBedelia from "./pages/AvionBedelia";
import AvionBedelia16 from "./pages/AvionBedelia16";
import AvionBedelia13 from "./pages/AvionBedelia13";
import AvionBedelia11 from "./pages/AvionBedelia11";
import ClementAder from "./pages/ClementAder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/avion-bedelia" element={<AvionBedelia />} />
          <Route path="/avion-bedelia/1-6" element={<AvionBedelia16 />} />
          <Route path="/avion-bedelia/1-3" element={<AvionBedelia13 />} />
          <Route path="/avion-bedelia/1-1" element={<AvionBedelia11 />} />
          <Route path="/clement-ader" element={<ClementAder />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
