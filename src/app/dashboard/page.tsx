import Button from "@/components/ui/button.tsx"; 
import AIChat from "@/components/ai-chat-sidebar.tsx"; 

export default function Dashboard() {
  
  return (
    <main className="w-screen h-screen flex flex-row">
      <div className="w-3/12 bg-red-100">
        {/* Patient Menu */}
      </div>
      <div className="w-5/12 bg-green-100">
        {/* Current Patient's EMR/EHR */}
      </div>

      <div className="w-4/12 h-screen justify-end bg-blue-100 overflow-auto">
        <AIChat />
      </div>
    </main>

  );
}
