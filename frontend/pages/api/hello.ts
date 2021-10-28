// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getRyanName } from "shared";

type Data = {
  name: string;
};

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ryanName = getRyanName();

  res.status(200).json({ name: ryanName });
}
