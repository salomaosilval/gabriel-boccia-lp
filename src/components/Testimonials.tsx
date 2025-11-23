import Section from './Section';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'Candidato a Prefeito',
    city: 'São Paulo, SP',
    content:
      'Este livro transformou completamente minha forma de me comunicar. As técnicas são práticas e aplicáveis. Consegui me conectar muito melhor com os eleitores durante minha campanha.',
    rating: 5,
  },
  {
    name: 'Ana Paula Silva',
    role: 'Candidata a Deputada Estadual',
    city: 'Rio de Janeiro, RJ',
    content:
      'Gabriel Boccia tem uma forma única de ensinar oratória política. O livro é claro, objetivo e focado no que realmente importa. Recomendo para qualquer candidato sério.',
    rating: 5,
  },
  {
    name: 'Roberto Alves',
    role: 'Candidato a Vereador',
    city: 'Belo Horizonte, MG',
    content:
      'As estratégias de gestão de debates foram fundamentais para mim. Consegui me sair muito melhor nos debates e entrevistas após aplicar o que aprendi no livro.',
    rating: 5,
  },
  {
    name: 'Mariana Costa',
    role: 'Candidata a Deputada Federal',
    city: 'Brasília, DF',
    content:
      'Um guia completo e essencial. A abordagem ética e focada em comunicação honesta ressoou muito comigo. Este livro deveria ser leitura obrigatória para todos os candidatos.',
    rating: 5,
  },
  {
    name: 'João Santos',
    role: 'Candidato a Governador',
    city: 'Porto Alegre, RS',
    content:
      'Excelente investimento. As técnicas são testadas e comprovadas. Minha equipe toda leu e aplicamos várias estratégias durante a campanha com resultados excelentes.',
    rating: 5,
  },
  {
    name: 'Fernanda Lima',
    role: 'Candidata a Senadora',
    city: 'Curitiba, PR',
    content:
      'O livro superou minhas expectativas. A forma como Gabriel explica a construção de credibilidade é brilhante. Minha comunicação política melhorou significativamente.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <Section id="depoimentos" className="bg-gray-50">
      <div className="text-center mb-12">
        <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
          Depoimentos
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          O que dizem os candidatos
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Resultados reais de candidatos que transformaram sua comunicação
          política
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed mb-6 italic">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="border-t border-gray-100 pt-4">
              <div className="font-semibold text-gray-900">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-600">{testimonial.role}</div>
              <div className="text-sm text-gray-500">{testimonial.city}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
