import { Calendar, MessageCircle } from "lucide-react";

export const Form = () => {
    return (
        <div className="p-6 bg-[#FFFF] rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Agende Sua Consulta
            </h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div>
                    <label className="block font-medium mb-1">Nome Completo</label>
                    <input
                        type="text"
                        placeholder="Seu nome completo"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                
                <div>
                    <label className="block font-medium mb-1">Telefone</label>
                    <input
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">E-mail</label>
                    <input
                        type="email"
                        placeholder="seu@email.com"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                
                <div>
                    <label className="block font-medium mb-1">Serviço de Interesse</label>
                    <div className="relative">
                        <select className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8">
                            <option>Selecione um serviço</option>
                            <option>Clareamento</option>
                            <option>Implante</option>
                            <option>Limpeza</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block font-medium mb-1">Data Preferida</label>
                    <input
                        type="date"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 pr-8"
                        placeholder="dd/mm/aaaa"
                    />
                </div>

                {/* Mensagem */}
                <div className="md:col-span-2">
                    <label className="block font-medium mb-1">Mensagem</label>
                    <textarea
                        placeholder="Conte-nos sobre suas necessidades ou dúvidas..."
                        className="w-full p-2 border border-gray-300 rounded h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Botões */}
                <div className="md:col-span-2 flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <button
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
                    >
                        <Calendar size={18} />
                        Agendar Consulta
                    </button>

                    <a
                        href="https://wa.me/5599999999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
                    >
                        <MessageCircle size={18} />
                        WhatsApp
                    </a>
                </div>
            </form>
        </div>
    );
};