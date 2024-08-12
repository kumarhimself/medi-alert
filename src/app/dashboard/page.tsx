import Button from "@/components/ui/button.tsx"; 
import AIChat from "@/components/ai-chat-sidebar.tsx"; 

export default function Dashboard() {
  
  return (
    <main className="w-screen h-screen flex flex-row">
      <div className="w-1/3 bg-red-100">
        {/* Patient Menu */}
      </div>
      <div className="w-1/3 bg-green-100">
        {/* Current Patient's EMR/EHR */}
      </div>

      <div className="w-1/3 h-screen justify-end bg-blue-100 overflow-auto">
        <AIChat />
      </div>
    </main>

  );
}
