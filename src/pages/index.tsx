import { useSession } from "next-auth/react";

import { Header } from "@/components/header";
import { MessageList } from "@/components/message-list";
import { NewMessageForm } from "@/components/new-message-form";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col bg-cover">
      <Header />
      {session ? (
        <>
          <div className="flex-1 overflow-y-scroll no-scrollbar p-6">
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
        <div className="h-full flex items-center justify-center flex-col space-y-2.5">
          {status === "loading" ? null : (
            <>
              <p className="text-lg md:text-2xl lg:text-3xl font-medium text-white">
                Sign in with GitHub to join the chat!
              </p>
              <p>
                <a
                  href="https://grafbase.com?ref=chatbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 transition hover:text-[#4a9c6d]/100"
                >
                  Powered by Grafbase &amp; GraphQL Live Queries
                </a>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
