import axios from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const { APIKEY } = process.env

interface RequestBody {
  path?: string
  data?: {
    [key: string]: unknown
  }
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const { path = '' } = req.body as Partial<RequestBody>
  const { data: responseValue } = await axios({
    url: `https://omdbapi.com?apikey=${APIKEY}&${path}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  res.status(200).json(responseValue)
}
