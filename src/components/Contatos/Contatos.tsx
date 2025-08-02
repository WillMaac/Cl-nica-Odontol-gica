import { CardContact } from "../CardContatos/CardContatos"
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Form } from "../Form/Form";

export const Contatos = () => {
    return (
        <section className="bg-[#EFFFFA] py-10 px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold text-gray-800">Entre em Contato</h2>
            <p className="text-center max-w-xl mx-auto text-base mt-4 mb-12 text-gray-600">
                Estamos prontos para cuidar do seu sorriso. Agende sua consulta e inicie sua jornada para um sorriso perfeito.
            </p>

            <article className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
                    {/* Container para os cards de contato */}
                    <div className="flex-1 flex flex-col gap-4">
                        <CardContact
                            icone={<Phone size={20} />}
                            title="Telefone"
                            numero="(11) 3456-7890"
                            des="Ligue agora para agendar sua consulta"
                        />

                        <CardContact
                            icone={<MessageCircle size={20} />}
                            title="WhatsApp"
                            numero="(11) 99999-8888"
                            des="Atendimento rápido via WhatsApp"
                        />

                        <CardContact
                            icone={<Mail size={20} />}
                            title="E-mail"
                            numero="contato@dentalcare.com.br"
                            des="Envie suas dúvidas por e-mail"
                        />

                        <CardContact
                            title="Endereço"
                            numero="Av. Paulista, 1000 - São Paulo"
                            des="Região central, fácil acesso"
                            icone={<MapPin size={20} />}
                        />

                        <CardContact
                            title="Horário"
                            numero="Seg a Sáb - 8h às 18h"
                            des="Domingo fechado"
                            icone={<Clock size={20} />}
                        />
                    </div>

                    {/* Container para o formulário */}
                    <div className="flex-1">
                        <Form />
                    </div>
                </div>
            </article>
        </section>
    );
};