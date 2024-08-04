export default function Nav(){
    return(
        <nav className="sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row p-8  items-center  justify-between bg-gradient-to-r from-pridark to-prilight">
            <div className=" flex flex-row gap-4 items-center">
            <img className="w-16 h-auto " src="/trollface.png" alt="Trollface" />
            <h1 className="text-4xl text-white font-semibold">Mene Generator</h1>
            </div>
            <h1 className="text-3xl text-white">React Course - project 3</h1>
        </nav>
    )
} 