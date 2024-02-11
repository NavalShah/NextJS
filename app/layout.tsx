import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* @Naval in the future, the backticks and curly braces are used to add js code*/}
      <body className={`${inter.className} antiliased`}>{children}</body>
    </html>
  );
}
