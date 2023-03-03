import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { getServerSession } from "next-auth/next";

import { authOptions } from "./[...nextauth]";

const secret = process.env.NEXTAUTH_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }

  const token = await getToken({ req, secret, raw: true });

  res.json({ token });
}
