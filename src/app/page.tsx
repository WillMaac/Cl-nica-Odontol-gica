import { Navbar } from "@/components/Navbar/Navbar";
import { HeroHome } from "@/components/Home/Home";
import { Servicos } from "@/components/Servicos/Servicos";
import { Sobre } from "@/components/Sobre/Sobre";
import { Missao } from "@/components/Missao/Missao";
import { Depoimentos } from "@/components/Depoimentos/Depoimentos";
import { Estastisticas, Estatisticas } from "@/components/CardEstastisticas/Estastisticas";
import { Contatos } from "@/components/Contatos/Contatos";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <HeroHome/>
      <Servicos/>
      <Sobre/>
      <Missao/>
      <Depoimentos/>
      <Estatisticas/>
      <Contatos/>
    </div>
  );
}
