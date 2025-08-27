// File: src/app/blog/[id]/BlogPost.tsx
'use client'

import { useParams } from 'next/navigation'

export default function BlogPost() {
  const params = useParams()
  const id = params.id as string
  
  // Ваша логика компонента
  return (
    <div>
      <h1>Blog Post {id}</h1>
      {/* остальной контент */}
    </div>
  )
}