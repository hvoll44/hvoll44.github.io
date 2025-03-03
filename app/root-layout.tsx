import { metadata } from './metadata'
import RootLayout from './layout'

export { metadata }

export default function ServerRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
} 