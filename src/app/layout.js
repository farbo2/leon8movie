import "./globals.css";
import { Victor_Mono } from "next/font/google";
const victor = Victor_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={victor.className}>
        <div className="logoWrapper">
          <h1 style={{ fontWeight: "900" }}>Leon8 Movies</h1>
          <span>Unlocking a world of movies, anytime, anywhere</span>
        </div>
        {children}
      </body>
    </html>
  );
}
