import Image from "next/image"
import Logo from "../../img/logo.png"
export const Navbar = () =>{
    return(
        <nav className="flex justify-evenly mt-8">
            <div className="flex flex-col">
                <div className="flex items-center space-x-3">
                <Image
                src={Logo}
                alt="Dental Logo"
                width={40}
                height={50}
                />
                <div className="flex flex-col">
                <p>Dental Care</p>
                <p>Clínica Odentológica</p>
                </div>
                </div>
            </div>
            <li className="list-none">Início</li>
            <li className="list-none">Serviços</li>
            <li className="list-none">Sobre</li>
            <li className="list-none">Depoimentos</li>
            <li className="list-none">Contato</li>
            <button className="flex  bg-[linear-gradient(to_right,#5E7DF2,#2ECC71)] text-white px-15 py-3 shadow-md rounded-2xl">Agendar Consulta</button>
        </nav>
    )
}