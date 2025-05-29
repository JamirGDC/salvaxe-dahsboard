import Provider from "./provider"
import {helvetica} from "./fonts/fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={helvetica.className} suppressHydrationWarning>
      <head></head>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
