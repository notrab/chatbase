import { useSession } from "next-auth/react";

import { Header } from "@/components/header";
import { MessageList } from "@/components/message-list";
import { NewMessageForm } from "@/components/new-message-form";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div
      className="flex flex-col bg-cover"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      <Header />
      {session ? (
        <>
          <div className="flex-1 overflow-y-scroll p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center">
                <MessageList />
              </div>
            </div>
          </div>
          <div className="p-6 bg-white/5 border-t border-[#363739]">
            <div className="max-w-4xl mx-auto">
              <NewMessageForm />
            </div>
          </div>
        </>
      ) : (
        <div className="h-full flex items-center justify-center">
          <p className="text-lg md:text-2xl text-white">
            Sign in to join the chat!
          </p>
        </div>
      )}
    </div>
  );
}
