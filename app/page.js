import Image from "next/image";
import Link from "next/link";
import Navbar from "./pages/navbar/Navbar";
import Starting from "./pages/starting/Starting";
import Footer from "./pages/footer/Footer";
import ImageUploader from "./pages/uploadimage/ImageUploader";
export default function Home() {
  return (
<div className="bg-black text-black">

   <Starting/>
</div>
  );
}
