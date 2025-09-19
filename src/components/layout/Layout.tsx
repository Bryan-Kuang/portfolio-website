import { type ReactNode } from 'react'
import { Navigation } from './Navigation'
import { ScrollToTop } from './ScrollToTop'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="relative">{children}</main>
      <ScrollToTop />
    </div>
  )
}
