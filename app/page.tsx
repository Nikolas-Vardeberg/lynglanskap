import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-between h-screen w-full text-center py-12 px-8 container">
        <div>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/logo/logo.png"
              alt="Lyng Langskap"
              height={250}
              width={250}
            />
          </div>
          <div className="flex mt-20 flex-col space-y-[26px]">
            <h2 className="text-[#333333]  text-2xl md:text-left md:text-4xl lg:text-5xl xl:text-6xl">Din Landskapsarkitekt Konsulent</h2>
            <p className="text-[#828282] md:text-left md:text-lg lg:text-xl xl:text-2xl">Vi er to landskapsarkitekter som tilbyr konsulenttjenester innen landskapsarkitektur. Vi skaper vakre og funksjonelle utendørsområder for både private og offentlige prosjekter.</p>
            <input className="p-3 w-full rounded-[8px] bg-transparent border border-[#828282]" placeholder="e-post"/>
            <button className="p-4 w-full bg-[#05668d] text-white rounded-[8px]">Kontakt Oss</button>
          </div>
        </div>
       
        <div className="text-xs md:text-base text-[#828282] text-center">
          &copy; {new Date().getFullYear()} Lyng Langskap AS. Laget av Vertio Webdesign
        </div>

      </div>
      <div className="h-screen w-full">
        <Image
          src="/bg.png"
          alt="Lyng Langskap"
          height={500}
          width={500}
          className="object-fit h-full w-full"
        />
      </div>
    </div>
  )
}
