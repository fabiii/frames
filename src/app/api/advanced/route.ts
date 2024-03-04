import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame'
import { NextRequest, NextResponse } from 'next/server'

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          label: 'Generate!',
        },
      ],
      image: {
        src: `${process.env.NEXT_PUBLIC_SITE_URL}/meme`,
      },
      input: {
        text: 'Text',
      },
      postUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/api/meme/simply`,
    })
  )
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req)
}

export const dynamic = 'force-dynamic'
