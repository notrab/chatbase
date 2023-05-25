import { formatRelative, formatDistance, differenceInHours } from "date-fns";
import { useSession } from "next-auth/react";
import Image from "next/image";

export type Message = {
  id: string;
  username: string;
  avatar?: string;
  body: string;
  createdAt: string;
};

interface Props {
  message: Message;
}

export const Message = ({ message }: Props) => {
  const { data: session } = useSession();

  return (
    <div
      className={`flex flex-col relative space-x-1 space-y-1 ${
        message.username === session?.username ? "text-right" : "text-left"
      }`}
    >
      <div
        className={`flex relative space-x-1 ${
          message.username === session?.username
            ? "flex-row-reverse space-x-reverse"
            : "flex-row"
        }`}
      >
        {message?.avatar && (
          <div className="w-12 h-12 overflow-hidden flex-shrink-0 rounded">
            <a
              href={`https://github.com/${message.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={50}
                height={50}
                src={message.avatar}
                alt={message.username}
                title={message.username}
              />
            </a>
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
          <span className="max-w-sm">{message.body}</span>
        </span>
      </div>
      <p className="text-xs text-white/50">
        {differenceInHours(new Date(), new Date(message.createdAt)) >= 1
          ? formatRelative(new Date(message.createdAt), new Date())
          : formatDistance(new Date(message.createdAt), new Date(), {
              addSuffix: true,
            })}
      </p>
    </div>
  );
};
