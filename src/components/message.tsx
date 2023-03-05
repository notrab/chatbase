import { useSession } from "next-auth/react";
import Image from "next/image";

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
        message.username === session?.username
          ? "flex-row-reverse space-x-reverse"
          : "flex-row"
      }`}
    >
      {message?.avatar && (
        <div className="w-12 h-12 overflow-hidden flex-shrink-0 rounded">
          <Image
            width={50}
            height={50}
            src={message.avatar}
            alt={message.username}
          />
        </div>
      )}
      <span
        className={`inline-flex rounded space-x-2 items-start p-3 text-white ${
          message.username === session?.username
            ? "bg-[#4a9c6d]"
            : "bg-[#363739]"
        } `}
      >
        {message.username !== session?.username && (
          <span className="font-bold">{message.username}:&nbsp;</span>
        )}
        {message.body}
      </span>
    </div>
  );
};
