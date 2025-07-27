import { Navbar } from "@/components/Navbar/Navbar";
import { HeroHome } from "@/components/Home/Home";
import { Servicos } from "@/components/Servicos/Servicos";
import { Sobre } from "@/components/Sobre/Sobre";
import { Missao } from "@/components/Missao/Missao";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <HeroHome/>
      <Servicos/>
      <Sobre/>
      <Missao/>
    </div>
  );
}
