"use client";
import { AuthProvider } from "@pangeacyber/react-auth";
import AppBar from "../components/AppBar";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hostedLoginURL = process?.env?.NEXT_PUBLIC_AUTHN_HOSTED_LOGIN_URL || "";
  const authConfig = {
    clientToken: process?.env?.NEXT_PUBLIC_AUTHN_CLIENT_TOKEN || "",
    domain: process?.env?.NEXT_PUBLIC_PANGEA_DOMAIN || "",
  };

  return (
    <html lang="en">
      <head />
      <body>
        <AuthProvider loginUrl={hostedLoginURL} config={authConfig}>
          <AppBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
