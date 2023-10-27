
import NavBar from '../components/NavBar/NavBar'
import "./globals.css";
import { Inter, Kantumruy_Pro } from "next/font/google";
import Footer from '../components/Footer/Footer'
import Providers from '../store/Provider'

const inter = Inter({ subsets: ["latin"] });
const kantumruypro = Kantumruy_Pro({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Brachnha",
  description: "istad-co Education Game",
  image: "/thumbnail.jpg",
};

export default function RootLayout({ children }) {
 

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="manifest" href="/manifest.json" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </head>
      <body className={kantumruypro.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.7.0/flowbite.min.js"></script>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </Providers>
      </body>
    </html>
  );
}
