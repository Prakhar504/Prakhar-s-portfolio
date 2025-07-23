import logo from "../../public/img11.webp";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <div className="relative flex items-center justify-center">
          {/* Animated Layered Blobs */}
          <div className="absolute w-[340px] h-[340px] rounded-full bg-[hsl(var(--accent))] opacity-70 blur-2xl -z-10 animate-blob1"></div>
          <div className="absolute w-[260px] h-[260px] rounded-full bg-[#7b2ff2] opacity-60 blur-2xl -z-20 left-20 top-20 animate-blob2"></div>
          <Image
            src={logo}
            alt="logo"
            loading="eager"
            priority
            height={1000}
            width={1000}
          />
        </div>
    )
}
export default HeroImage