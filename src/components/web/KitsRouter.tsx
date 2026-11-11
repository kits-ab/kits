import { RouterProvider } from "@kits-ab/kits-ui"
import { navigate } from "gatsby"
import * as React from "react"

interface KitsRouterProps {
  children: React.ReactNode
}

// Låter kits-ui:s länkar navigera inom sajten utan att ladda om sidan. Externa länkar och
// mailto: hanteras som vanliga länkar av React Aria.
export const KitsRouter = ({ children }: KitsRouterProps) => (
  <RouterProvider navigate={(to) => navigate(to)}>{children}</RouterProvider>
)
