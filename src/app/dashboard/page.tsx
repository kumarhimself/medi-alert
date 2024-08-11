import { Button } from "@/components/ai-chat-sidebar.tsx"; 

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <Button text="Click me!" />
    </main>
    
  );
}
