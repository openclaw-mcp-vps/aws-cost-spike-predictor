import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AWS Cost Spike Predictor — Predict AWS cost spikes before they happen',
  description: 'Analyzes usage patterns, predicts monthly costs, alerts before hitting budget limits, and suggests optimizations for developers and startup CTOs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fe23444d-6a3c-4013-910d-48c6b6cd44bd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
