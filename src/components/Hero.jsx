export default function Hero()
{
    return (
        <form action="#" className="sm:grid sm:grid-rows-3  md:grid md:grid-cols-2 md:grid-rows-2 lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-x-10 gap-y-5 mx-20 py-10 ">
            <div className="grid grid-rows-2">
            <label className="text-3xl  font-semibold " htmlFor="top">Top Text</label>
            <input className="border rounded-md h-12 border-gray-400 border-spacing-1 p-1" placeholder="Shut Up" type="text" htmlFor="top" />
            </div>
            <div className="grid grid-rows-2">
            <label className="text-3xl  font-semibold " htmlFor="bottom">Bottom Text</label>
            <input className="border rounded-md h-12 border-gray-400 border-spacing-1 p-1" placeholder="Take Your money" type="text" htmlFor="bottom" />
            </div>
            <button className="rounded-lg p-3 text-white text-xl  lg:col-span-2 md:col-span-2 bg-gradient-to-r from-pridark to-prilight" type="button">Get a new meme image  🖼</button>
        </form>
    )
}