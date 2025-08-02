import Image from "next/image"
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Empresária",
    rating: 5,
    text: "Excelente atendimento! A Dra. Ana transformou meu sorriso com implantes. Profissionalismo e cuidado em cada detalhe. Recomendo de olhos fechados!",
    image: "https://images.unsplash.com/photo-1635763244406-3b82b6e62823?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "João Santos",
    role: "Professor",
    rating: 5,
    text: "Meu filho ama vir aqui! O atendimento infantil é excepcional. Ambiente acolhedor e profissionais que sabem lidar com crianças. Nota 10!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    role: "Advogada",
    rating: 5,
    text: "Clareamento dental perfeito! Resultado surpreendente em poucas sessões. Tecnologia de ponta e atendimento humanizado. Muito satisfeita!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Carlos Oliveira",
    role: "Engenheiro",
    rating: 5,
    text: "Tratamento ortodôntico com alinhadores invisíveis foi perfeito. Pontualidade, tecnologia avançada e resultados excepcionais. Recomendo!",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Fernanda Lima",
    role: "Designer",
    rating: 5,
    text: "Equipe fantástica! Facetas de porcelana ficaram naturais e lindas. Atendimento cuidadoso desde a primeira consulta até o resultado final.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Roberto Ferreira",
    role: "Comerciante",
    rating: 5,
    text: "Tratamento de canal sem dor! Tecnologia moderna e profissionais experientes. Superou todas as minhas expectativas. Muito obrigado!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  }
];
export const CardContent=() =>{
return(
    <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
{testimonials.map((t, index) => (
        <div key={index} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
          <Image
            src={t.image}
            alt={t.name}
            width={80}
            height={80}
            className="rounded-full mb-4"
          />
          <h3 className="font-semibold text-lg">{t.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{t.role}</p>
          <div className="flex gap-1 mb-4">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-gray-700">{t.text}</p>
        </div>
))}
    </article>
)
}