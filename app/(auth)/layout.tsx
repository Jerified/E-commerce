

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-whit'>
      <body>{children}</body>
    </html>
  )
}