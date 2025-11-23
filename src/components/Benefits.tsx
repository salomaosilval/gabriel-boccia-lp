import Section from './Section';

const benefits = [
  {
    icon: '🎯',
    title: 'Foco Específico',
    description:
      'Conteúdo desenvolvido exclusivamente para candidatos políticos, com técnicas aplicáveis em campanhas reais.',
  },
  {
    icon: '💬',
    title: 'Comunicação Assertiva',
    description:
      'Aprenda a se expressar com clareza, confiança e impacto, conquistando a atenção e o respeito dos eleitores.',
  },
  {
    icon: '🏆',
    title: 'Construção de Credibilidade',
    description:
      'Desenvolva uma imagem sólida e confiável que ressoa com os eleitores e constrói relacionamentos duradouros.',
  },
  {
    icon: '🤝',
    title: 'Persuasão Ética',
    description:
      'Técnicas de influência baseadas em honestidade e transparência, criando conexões genuínas com o público.',
  },
  {
    icon: '⚡',
    title: 'Gestão de Debates',
    description:
      'Domine a arte de debater, formular argumentos sólidos e responder com agilidade e inteligência.',
  },
  {
    icon: '🛡️',
    title: 'Gestão de Crises',
    description:
      'Aprenda a navegar situações difíceis, manter a calma e comunicar efetivamente mesmo sob pressão.',
  },
];

export default function Benefits() {
  return (
    <Section id="beneficios" className="bg-gray-50">
      <div className="text-center mb-12">
        <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
          Benefícios
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Por que escolher este livro?
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Um guia completo que transforma sua capacidade de comunicação política
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="text-4xl mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
