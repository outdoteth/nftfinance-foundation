import "./globals.css";

export const metadata = {
  title: "NFT Finance Foundation",
  description:
    "We are a non-profit organistion providing public goods services for NFT finance",
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
