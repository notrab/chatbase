import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import type { Message as IMessage } from "@/components/message";
import { Message } from "@/components/message";

const GetRecentMessagesQuery = gql`
  query GetRecentMessages($last: Int) @live {
    messageCollection(last: $last) {
      edges {
        node {
          id
          username
          avatar
          body
          likes
          createdAt
        }
      }
    }
  }
`;

export const MessageList = () => {
  const [scrollRef, inView, entry] = useInView({
    trackVisibility: true,
    delay: 500,
  });

  const { loading, error, data } = useQuery<{
    messageCollection: { edges: { node: IMessage }[] };
  }>(GetRecentMessagesQuery, {
    variables: {
      last: 100,
    },
  });

  useEffect(() => {
    if (inView) {
      entry?.target?.scrollIntoView({ behavior: "auto" });
    }
  }, [data, entry, inView]);

  if (loading)
    return (
      <div className="h-full flex items-center justify-center">
        <p className="text-white">Fetching most recent chat messages.</p>
      </div>
    );

  if (error)
    return (
      <p className="text-white">Something went wrong. Refresh to try again.</p>
    );

  return (
    <div className="flex flex-col space-y-3 overflow-y-scroll w-full">
      {!inView && (
        <div className="py-1.5 w-full px-3 z-10 text-xs absolute flex justify-center bottom-0 mb-[120px] inset-x-0">
          <button
            className="py-1.5 px-3 text-xs bg-[#1c1c1f] border border-[#363739] rounded-full text-white font-medium"
            onClick={() => entry?.target?.scrollIntoView({ behavior: "auto" })}
          >
            Scroll to see latest messages
          </button>
        </div>
      )}
      {data?.messageCollection?.edges?.map(({ node }) => (
        <Message key={node?.id} message={node} />
      ))}
      <div ref={scrollRef} />
    </div>
  );
};
