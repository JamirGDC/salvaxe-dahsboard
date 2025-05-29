import Provider from "./provider"
import {helvetica} from "./fonts/fonts";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${helvetica.className} light`} data-theme="light" suppressHydrationWarning>
      <head></head>
      <body className="light" data-theme="light">
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
