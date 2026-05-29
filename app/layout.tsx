import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lamborghini Miura SV 1972 | Timeless Italian Masterpiece',
  description:
    'Experience the legendary 1972 Lamborghini Miura SV. Explore stunning photographs and discover the story behind this iconic supercar.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
