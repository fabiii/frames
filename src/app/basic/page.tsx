import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NBA Award Finalists 2023-24',
  description: 'NBA award finalists list reveal',
  openGraph: {
    title: 'NBA Award Finalists 2023-24',
    description: 'NBA award finalists list reveal',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/nba-awards-24-preview.jpg`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/nba-awards-24-preview.jpg`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=1`,
    'fc:frame:button:1': 'See NBA Award Finalists',
  },
}

export default function Page() {
  return (
    <div>
      <h1>NBA Award Finalists 2023-24</h1>
    </div>
  )
}
