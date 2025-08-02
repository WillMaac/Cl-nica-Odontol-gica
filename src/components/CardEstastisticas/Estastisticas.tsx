export const Estatisticas = () => {
  return (
    <section className="flex justify-center px-4">
      <div className="bg-[#EFFFFA] rounded-2xl p-8 w-full max-w-[110.25em] shadow-xl mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">98%</h3>
            <p className="text-sm text-gray-500">Pacientes Satisfeitos</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">4.9</h3>
            <p className="text-sm text-gray-500">Avaliação Média</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-sm text-gray-500">Avaliações Positivas</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">15+</h3>
            <p className="text-sm text-gray-500">Anos de Confiança</p>
          </div>
        </div>
      </div>
    </section>
  );
};
