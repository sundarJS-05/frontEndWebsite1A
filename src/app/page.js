import Image from "next/image";

import { Button } from "@/components/ui/button"
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import SearchSection from "@/components/ui/SearchSection";
import ProjectSection from "@/components/ui/ProjectSection";



export default function Home() {
  return (
    <div className="min-h-screen w-full m-5 p-2 ">

      <Header/>

      <br></br>

      {/* Search */}

      <SearchSection className='flex flex-col gap-4'/>

      <br></br>

      {/* Project section */}
      <ProjectSection/>


      <br></br>
      
      <Footer/>

    </div>
  );
}
