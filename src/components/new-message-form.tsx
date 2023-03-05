import { gql, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useSound from "use-sound";

const AddNewMessageMutation = gql`
  mutation AddNewMessage($username: String!, $avatar: URL, $body: String!) {
    messageCreate(
      input: { username: $username, avatar: $avatar, body: $body }
    ) {
      message {
        id
      }
    }
  }
`;

export const NewMessageForm = () => {
  const { data: session } = useSession();
  const [play] = useSound("sent.wav");
  const [body, setBody] = useState("");
  const [addNewMessage] = useMutation(AddNewMessageMutation, {
    onCompleted: () => play(),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (body) {
          addNewMessage({
            variables: {
              username: session?.username ?? "",
              avatar: session?.user?.image,
              body,
            },
          });
          setBody("");
        }
      }}
      className="flex items-center space-x-3"
    >
      <input
        autoFocus
        id="message"
        name="message"
        placeholder="Write a message..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="flex-1 h-12 px-3 rounded bg-[#222226] border border-[#222226] focus:border-[#222226] focus:outline-none text-white placeholder-white"
      />
      <button
        type="submit"
        className="bg-[#222226] rounded h-12 font-medium text-white w-24 text-lg border border-transparent"
        disabled={!body || !session}
      >
        Send
      </button>
    </form>
  );
};
