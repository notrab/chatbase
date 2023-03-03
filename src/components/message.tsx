import { useSession } from "next-auth/react";

// import { Like } from "./like";

export type Message = {
  id: string;
  username: string;
  avatar?: string;
  body: string;
  likes: number;
  createdAt: string;
};

interface Props {
  message: Message;
}

export const Message = ({ message }: Props) => {
  const { data: session } = useSession();

  return (
    <div
      className={`flex relative space-x-1 ${
        message.username === session?.user?.username
          ? "flex-row-reverse"
          : "flex-row"
      }`}
    >
      {message?.avatar && (
        <div className="w-12 h-12 overflow-hidden flex-shrink-0 rounded">
          <img src={message.avatar} alt={message.username} />
        </div>
      )}
      <span
        className={`inline-flex rounded space-x-2 items-center p-3 text-white ${
          message.username === session?.user?.username
            ? "bg-[#4a9c6d]"
            : "bg-[#363739]"
        } `}
      >
        {message.username !== session?.username && (
          <span className="font-bold">{message.username}:&nbsp;</span>
        )}
        {message.body}
      </span>
      {/* <Like likes={message.likes} messageId={message.id} /> */}
    </div>
  );
};
