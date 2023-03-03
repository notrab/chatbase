import { signIn, useSession } from "next-auth/react";

import { Header } from "@/components/header";
import { MessageList } from "@/components/message-list";
import { NewMessageForm } from "@/components/new-message-form";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col">
      <Header />
      {session ? (
        <>
          <div className="flex-1 overflow-y-scroll p-6 bg-[#131316]">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center">
                {/* <pre className="text-white">{JSON.stringify(session, null, 2)}</pre> */}
                <MessageList />
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#1c1c1f] border-t border-[#363739]">
            <div className="max-w-4xl mx-auto">
              <NewMessageForm />
            </div>
          </div>
        </>
      ) : (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      )}
    </div>
  );
}
