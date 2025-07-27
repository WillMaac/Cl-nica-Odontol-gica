export const Navbar = () =>{
    return(
        <nav className="flex justify-evenly mt-8">
            <div className="flex flex-col">
                <p>Dental Care</p>
                <p>Clínica Odentológica</p>
            </div>
            <li>Início</li>
            <li>Serviços</li>
            <li>Sobre</li>
            <li>Depoimentos</li>
            <li>Contato</li>
            <button className="flex  bg-[linear-gradient(to_right,#5E7DF2,#2ECC71)] text-white px-15 py-3 shadow-md rounded-2xl">Agendar Consulta</button>
        </nav>
    )
}