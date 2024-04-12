
export default function Footer() {

    return (
        <div className="bg-purple-800 text-white py-4 flex justify-center ...">
            <div>
                <h1 className="text-center font-lexend">Talento Tech Project</h1>
                <p>
                    <h2 className="font-lexend">Desarrollado con 💖 por <a href="https://www.linkedin.com/in/miller-systemsengineer/" target="_blank"> Miller Ladino</a></h2>
                </p>
                <div className=" m-auto w-9 flex justify-center items-center mt-5">
                    <img className="w-[40px] mr-2 cursor-pointer" src="..//..//..//public/icons/github.svg" alt="" />
                    <img className="w-[40px] mr-2 cursor-pointer" src="..//..//..//public/icons/linkedin.svg" alt="" />
                    <img className="w-[40px] mr-2 cursor-pointer" src="..//..//..//public/icons/instagram.svg" alt="" />
                </div>
            </div>

        </div>
    );
}