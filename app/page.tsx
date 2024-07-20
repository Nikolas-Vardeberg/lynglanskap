import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#CDD8E4]">
      <div className="flex flex-col justify-between h-screen w-full text-center py-12 2xl:py-10 2xl:px-40  px-10  container">
        <div>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/assets/logo/logo.png"
              alt="Lyng Langskap"
              height={300}
              width={300}
              draggable={false}
            />
          </div>
          <div className="flex mt-28 flex-col space-y-[26px]">
            <h2 className="text-[#333333]  text-3xl sm:text-4xl md:text-left md:text-4xl lg:text-5xl">Din Landskapsarkitekt Konsulent</h2>
            <p className="text-gray-400 md:text-left text-lg sm:text-2xl md:text-lg lg:text-[24px]">Vi er to landskapsarkitekter som tilbyr konsulenttjenester innen landskapsarkitektur. Vi skaper vakre og funksjonelle utendørsområder for både private og offentlige prosjekter.</p>
            <div className="flex flex-col gap-[26px] items-center w-full md:items-start">
              <input className="p-3 w-full rounded-[8px] bg-transparent border border-[#828282] max-w-[400px]" placeholder="e-post"/>
              <button className="group w-full relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#05668d] px-6 font-medium text-white max-w-[400px] duration-500"><div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Kontakt Oss</div><div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></div></button>     
            
            </div>
               </div>
        </div>
       
        <div className="text-xs md:text-left text-center md:text-base text-[#828282]">
          &copy; {new Date().getFullYear()} Lyng Langskap AS. Laget av Vertio Webdesign
        </div>

      </div>
      <div className="h-screen w-full">
        <Image
          src="/bg.jpg"
          alt="Lyng Langskap"
          draggable={false}
          height={900}
          quality={100}
          width={900}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  )
}
