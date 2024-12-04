import Image from "next/image"
import HeroPoster from "./Images/hero.webp"
import Button from "./Button"
const Hero = () => {
  return (
<section className="flex flex-col md:flex-row items-center px-4">
<div className="flex-1">      
    <h4 className="text-teal-700 font-bold py-2">
      Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
    <h1 className="text-3xl md:text-4xl  lg:text-5xl font-bold">
      Certified Web 3.0 and Metaverse Developer</h1>
    <p className="text-slate-800 py-4">
      A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet </p>
    <p className="text-slate-800 ">
      Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies </p>
    <div className="mt-4">
      <Button text="Learn More"/>
    </div>
</div>  
<div className="flex-1"> 
   <Image src={HeroPoster} alt="Student Image for Hero Section" className=""></Image>
</div>  
</section>
    
  )
}

export default Hero