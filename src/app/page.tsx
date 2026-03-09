import { EditProvider } from "@/context/EditContext";
import Hero from "@/components/Hero";
import RouteTimeline from "@/components/RouteTimeline";
import ItinerarySection from "@/components/ItinerarySection";
import BudgetDashboard from "@/components/BudgetDashboard";
import AccommodationSection from "@/components/AccommodationSection";
import TransportSection from "@/components/TransportSection";
import SpendSaveSection from "@/components/SpendSaveSection";
import TipsSection from "@/components/TipsSection";
import AdminPanel from "@/components/AdminPanel";
import ChatAssistant from "@/components/ChatAssistant";

export default function Home() {
  return (
    <EditProvider>
      <main className="bg-[#0a0a1a] min-h-screen">
        <Hero />
        <RouteTimeline />
        <ItinerarySection />
        <BudgetDashboard />
        <AccommodationSection />
        <TransportSection />
        <TipsSection />
        <SpendSaveSection />

        {/* Floating UI */}
        <AdminPanel />
        <ChatAssistant />

        {/* Footer */}
        <footer className="py-12 text-center border-t border-white/5">
          <div className="text-pink-300/60 text-sm tracking-widest mb-2">日本 ・ 家族旅行 ・ 2025</div>
          <p className="text-white/20 text-xs">
            Japan Family Adventure · 18 May – 3 June 2025 · Family of 4
          </p>
        </footer>
      </main>
    </EditProvider>
  );
}
