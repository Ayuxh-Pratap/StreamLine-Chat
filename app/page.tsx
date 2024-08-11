'use client';
import { useChat } from "ai/react";
import { Send } from "lucide-react";

export default function Home() {
  const { messages, input, handleSubmit, handleInputChange } = useChat({
    api: 'api/genai'
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-12 text-black">
      {/* Form Element */}
      {RenderForm()}
      {RenderMessages()}
    </main>
  );

  function RenderForm() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e, {
          data: {
            prompt: input
          }
        })
      }} className="w-full flex flex-row gap-2 items-center h-full mt-5" action="">
        <input
          value={input}
          onChange={handleInputChange}
          type="text"
          placeholder="ask something..."
          className="border-b border-dashed outline-none w-full py-2 text-[#0842A0] placeholder:text-[#0842A099] text-right focus:placeholder-transparent disabled:bg-transparent"
        />
        <button
          type="submit"
          className="rounded-full shadow-md border flex flex-row">
          <Send className="p-3 h-10 w-10 stroke-stone-500" /></button>
      </form>
    )
  }

  function RenderMessages() {
    return <div></div>
  }
}
