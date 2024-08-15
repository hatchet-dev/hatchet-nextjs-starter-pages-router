import { hatchet } from '@/lib/workflow'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await hatchet.event.push('trigger:event', {
    hello: 'world',
  })

  res.status(200).json({ ok: true })
}
