import { ServiceCard } from "../ServicosCards/ServiceCard";
import {Smile, Sparkles, Shield, Heart, Zap, Stethoscope} from 'lucide-react';

export const Servicos = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4"> 
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-4"> 
          Nossos <span className="text-blue-600">Serviços</span> 
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto"> 
          Oferecemos uma gama completa de tratamentos odontológicos com tecnologia avançada e cuidado personalizado.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch"> 
          
          <ServiceCard
            iconComponent={Smile} 
            iconBgColor="bg-blue-100/50" 
            iconColor="text-blue-600" 
            title="Implantodontia"
            description="Implantes dentários com tecnologia avançada para restituir sua mordida e sorriso naturais."
            features={["Implantes de titânio", "Cirurgia guiada", "Próteses personalizadas"]}
            price="A partir de R$ 1.200"
            link="#"
          />
          <ServiceCard
            iconComponent={Sparkles}
            iconBgColor="bg-blue-100/50"
            iconColor="text-blue-600"
            title="Estética Dental"
            description="Clareamento, facetas e lentes de contato dental para um sorriso perfeito e natural."
            features={["Clareamento a laser", "Facetas de porcelana", "Harmonização facial"]}
            price="A partir de R$ 800"
            link="#"
          />
          <ServiceCard
            iconComponent={Shield}
            iconBgColor="bg-blue-100/50"
            iconColor="text-blue-600"
            title="Ortodontia"
            description="Aparelhos ortodônticos tradicionais e invisíveis para alinhamento perfeito dos dentes."
            features={["Aparelho tradicional", "Alinhadores invisíveis", "Ortodontia digital"]}
            price="A partir de R$ 300/mês"
            link="#"
          />
          
          <ServiceCard
            iconComponent={Heart}
            iconBgColor="bg-blue-100/50"
            iconColor="text-blue-600"
            title="Odontopediatria"
            description="Cuidados especializados para crianças em ambiente acolhedor e divertido."
            features={["Atendimento infantil", "Prevenção", "Tratamentos lúdicos"]}
            price="A partir de R$ 150"
            link="#"
          />
          <ServiceCard
            iconComponent={Zap}
            iconBgColor="bg-blue-100/50"
            iconColor="text-blue-600"
            title="Endodontia"
            description="Tratamento de canal com tecnologia moderna para preservar seus dentes naturais."
            features={["Tratamento de canal", "Microscopia", "Técnicas modernas"]}
            price="A partir de R$ 400"
            link="#"
          />
          <ServiceCard
            iconComponent={Stethoscope} 
            iconBgColor="bg-blue-100/50"
            iconColor="text-blue-600"
            title="Periodontia"
            description="Tratamento especializado das gengivas e estruturas de suporte dos dentes."
            features={["Limpeza profunda", "Cirurgia periodontal", "Manutenção"]}
            price="A partir de R$ 200"
            link="#"
          />
        </div>

        <div className="flex justify-center mt-12"> 
          <button className="bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-lg">
            Agendar Avaliação Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};