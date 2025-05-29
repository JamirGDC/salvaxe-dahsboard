"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import system from "./theme"
import { LightMode } from "../components/ui/color-mode"

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" disableTransitionOnChange>
        <LightMode>
          {props.children}
        </LightMode>
      </ThemeProvider>
    </ChakraProvider>
  )
}
