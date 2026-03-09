"use client";

import { useRouter } from "next/navigation";
import { EditProvider } from "@/context/EditContext";
import NavBar from "@/components/NavBar";
import AdminPanel from "@/components/AdminPanel";
import ChatAssistant from "@/components/ChatAssistant";

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <EditProvider>
      <NavBar onLogout={handleLogout} />
      <main className="bg-[#0a0a1a] min-h-screen">
        {children}
      </main>
      <AdminPanel />
      <ChatAssistant />
    </EditProvider>
  );
}
