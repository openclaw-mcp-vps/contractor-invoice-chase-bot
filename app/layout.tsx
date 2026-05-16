import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'InvoiceChaser – Automate Invoice Follow-ups for Freelancers',
  description: 'Automated email sequences to chase unpaid invoices with escalating urgency and legal language. Built for freelancers and small agencies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e986771f-e16d-494a-b580-9a978d54e882"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
