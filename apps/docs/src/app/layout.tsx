import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "U2y Components Library(React, Web Components)",
  description: "U2y components library docs site",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
        lang="en"
        // Required to be set
        dir="ltr"
        // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
        suppressHydrationWarning
    >
        <Head
            // ... Your additional head options
        >
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>

        <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Layout
                banner={banner}
                navbar={navbar}
                pageMap={await getPageMap()}
                docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
                footer={footer}
                // ... Your additional layout options
                >
                {children}
            </Layout>
        </body>
    </html>
  );
}

const banner = <Banner storageKey="replace-with-release-unique-key">Uway 1.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={<b>Uway</b>}
    // ... Your additional navbar options
  />
)
const footer = <Footer>© {new Date().getFullYear()} Pwog.io Team</Footer>
