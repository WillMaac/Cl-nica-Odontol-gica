import { ThumbsUp, GraduationCap, Users, MapPin, CheckCircle2} from "lucide-react";
export const Sobre = () => {
  return (
    <section className="container mx-auto px-4 py-16"> 
      <article className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-[20em]">
        
        
        <div className="lg:w-1/2"> 
          <h2 className="text-4xl font-bold text-gray-800 mb-4"> {/* Ajuste o tamanho da fonte e mb */}
            Sobre a <span className="text-blue-600">DentalCare</span> {/* Use blue-600 para corresponder à imagem */}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-12 max-w-lg"> {/* mb-12 para mais espaço abaixo do parágrafo, max-w-lg para as 3 linhas */}
            Há mais de 15 anos cuidando do seu sorriso com excelência, tecnologia
            e muito carinho. Nossa clínica é referência em tratamentos
            odontológicos humanizados e personalizados.
          </p>
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
            
            
            <div className="shadow-md rounded-2xl bg-white p-6 flex items-start"> 
              <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Equipe Especializada</h3> 
                <p className="text-gray-600 text-sm">Profissionais altamente qualificados e atualizados</p>
              </div>
            </div>

            
            <div className="shadow-md rounded-2xl bg-white p-6 flex items-start">
              <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Tecnologia Avançada</h3>
                <p className="text-gray-600 text-sm">Equipamentos modernos e técnicas inovadoras</p>
              </div>
            </div>

            
            <div className="shadow-md rounded-2xl bg-white p-6 flex items-start">
              <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Atendimento Humanizado</h3>
                <p className="text-gray-600 text-sm">Cuidado personalizado e ambiente acolhedor</p>
              </div>
            </div>

            
            <div className="shadow-md rounded-2xl bg-white p-6 flex items-start">
              <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> 
              <div>
                <h3 className="font-semibold text-gray-800 text-lg mb-1">Garantia de Qualidade</h3>
                <p className="text-gray-600 text-sm">Compromisso com resultados excepcionais</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="lg:w-1/2 mt-12 lg:mt-0 grid grid-cols-2 gap-6"> 
          
          
          <div className="flex flex-col items-center justify-center bg-white p-6 text-center shadow-md rounded-2xl">
            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center bg-blue-100/50"> 
              <GraduationCap className="w-10 h-10 text-blue-600" /> 
            </div>
            <p className="text-3xl font-bold text-gray-800">15+</p>
            <p className="text-sm text-gray-500">Anos de Experiência</p>
          </div>

          
          <div className="flex flex-col items-center justify-center bg-white p-6 text-center shadow-md rounded-2xl">
            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center bg-blue-100/50">
              <Users className="w-10 h-10 text-blue-600" /> 
            </div>
            <p className="text-3xl font-bold text-gray-800">5000+</p>
            <p className="text-sm text-gray-500">Pacientes Atendidos</p>
          </div>

          
          <div className="flex flex-col items-center justify-center shadow-md rounded-2xl bg-white p-6 text-center">
            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center bg-emerald-100/50"> 
              <ThumbsUp className="w-10 h-10 text-emerald-600" /> 
            </div>
            <p className="text-3xl font-bold text-gray-800">98%</p>
            <p className="text-sm text-gray-500">Satisfação</p>
          </div>

          
          <div className="flex flex-col items-center justify-center shadow-md rounded-2xl bg-white p-6 text-center">
            <div className="w-16 h-16 mb-2 rounded-full flex items-center justify-center bg-blue-100/50">
              <MapPin className="w-10 h-10 text-blue-600" /> 
            </div>
            <p className="text-3xl font-bold text-gray-800">10+</p>
            <p className="text-sm text-gray-500">Especialidades</p>
          </div>
        </div>
      </article>
      <button className="text-center bg-[linear-gradient(to_right,#5E7DF2,#2ECC71)] text-white px-6 py-3 shadow-md rounded-2xl mt-5">Conheça nossa Equipe</button>
    </section>
  );
};