import { EditProvider } from "@/context/EditContext";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import RouteTimeline from "@/components/RouteTimeline";
import ItinerarySection from "@/components/ItinerarySection";
import BudgetDashboard from "@/components/BudgetDashboard";
import BookingsSection from "@/components/BookingsSection";
import AccommodationSection from "@/components/AccommodationSection";
import TransportSection from "@/components/TransportSection";
import KidsWishlist from "@/components/KidsWishlist";
import PackingList from "@/components/PackingList";
import FoodBucketList from "@/components/FoodBucketList";
import TipsSection from "@/components/TipsSection";
import SpendSaveSection from "@/components/SpendSaveSection";
import PhrasesSection from "@/components/PhrasesSection";
import AdminPanel from "@/components/AdminPanel";
import ChatAssistant from "@/components/ChatAssistant";

export default function Home() {
  return (
    <EditProvider>
      <NavBar />
      <main className="bg-[#0a0a1a] min-h-screen">
        <Hero />
        <RouteTimeline />
        <ItinerarySection />
        <BudgetDashboard />
        <BookingsSection />
        <AccommodationSection />
        <TransportSection />
        <KidsWishlist />
        <PackingList />
        <FoodBucketList />
        <TipsSection />
        <SpendSaveSection />
        <PhrasesSection />

        {/* Floating UI */}
        <AdminPanel />
        <ChatAssistant />

        {/* Footer */}
        <footer className="py-12 text-center border-t border-white/5">
          <div className="text-pink-300/60 text-sm tracking-widest mb-2">日本 ・ 家族旅行 ・ 2026</div>
          <p className="text-white/20 text-xs">
            Japan Family Adventure · 18 May – 3 June 2026 · Family of 4
          </p>
        </footer>
      </main>
    </EditProvider>
  );
}
