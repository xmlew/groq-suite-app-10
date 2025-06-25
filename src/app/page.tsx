import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <h1 className="text-3xl font-bold mb-8">OpenAI Chatbot</h1>
      <ChatBot />
    </main>
  );
}
