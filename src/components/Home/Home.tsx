import Image from "next/image";
import ilustracao from "../../img/unnamed.png";
import { ShieldCheck, Award, ThumbsUp } from "lucide-react";

export const HeroHome = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-[#e0f7f1]">
      <article className="flex gap-[30em] items-center">
        
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Seu Sorriso é Nossa<span className="bg-gradient-to-r from-[#5E7DF2] to-[#2ECC71] bg-clip-text text-transparent"> Prioridade</span>
          </h1>
          <p className="text-gray-600">
            Cuidados odontológicos de excelência com tecnologia avançada e
            atendimento humanizado. Transformamos sorrisos há mais de 15 anos.
          </p>
          <div className="flex gap-4">
            <button className="bg-[linear-gradient(to_right,#5E7DF2,#2ECC71)] text-white px-6 py-3 shadow-md rounded-2xl">
              Agendar Consulta
            </button>
            <button className="px-6 py-3 text-black  bg-white border-[#cccccc4b] shadow-md rounded-2xl">
              Conheça Nossos Serviços
            </button>
            </div>
            <div className="flex gap-5 justify-center  mt-10">
    <div className="flex flex-col items-center shadow-md rounded-2xl bg-white py-6 px-15">
      <ShieldCheck className="w-8 h-8 text-blue-500" />
      <h2 className="text-lg font-bold">15+</h2>
      <p className="text-sm text-gray-500">Anos de Experiência</p>
    </div>
    <div className="flex flex-col items-center  bg-white py-6 px-15 shadow-md rounded-2xl">
      <Award className="w-8 h-8 text-blue-500" />
      <h2 className="text-lg font-bold">5000+</h2>
      <p className="text-sm text-gray-500">Pacientes Atendidos</p>
    </div>
    <div className="flex flex-col items-center shadow-md rounded-2xl bg-white py-6 px-15">
      <ThumbsUp className="w-8 h-8 text-blue-500" />
      <h2 className="text-lg font-bold">98%</h2>
      <p className="text-sm text-gray-500">Satisfação</p>
    </div>
  </div>
</div>
        

        {/* Imagem com legenda sobreposta */}
        <div className="relative">
          <Image
            src={ilustracao}
            alt="Consultório Odontológico"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute bottom-4 left-4 bg-white/90 px-6 py-4 rounded-xl shadow-lg flex items-start gap-3">
            <div className="bg-[#5E7DF2] text-white rounded-full p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 11.5v2m0 4h.01m-6.938 4h13.856C18.06 20.98 19 19.525 19 18V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12c0 1.525.94 2.98 2.062 3z" />
              </svg>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">
                Tecnologia Avançada
              </h2>
              <p className="text-gray-500 text-sm">
                Equipamentos de última geração
              </p>
            </div>
          </div>
        </div>
      </article>
    </header>
  );
};
