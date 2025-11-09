import "./globals.css";

export const metadata = {
  title: "MODE Property | Phuket Real Estate",
  description: "Luxury villas, condos and land for sale in Phuket – MODE Property",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head />
      <body>{children}</body>
    </html>
  );
}
