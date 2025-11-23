'use client';

import { useState } from 'react';
import Section from './Section';

const faqs = [
  {
    question: 'Este livro é adequado para candidatos iniciantes?',
    answer:
      'Sim! O livro foi escrito para candidatos em todos os níveis de experiência. Se você está começando na política ou já tem experiência, encontrará técnicas valiosas e aplicáveis para sua realidade.',
  },
  {
    question: 'O conteúdo é focado apenas em discursos ou também em debates?',
    answer:
      'O livro cobre todas as formas de comunicação política: discursos, debates, entrevistas, reuniões públicas e gestão de crises. Você aprenderá técnicas específicas para cada situação.',
  },
  {
    question: 'Quanto tempo levo para ver resultados?',
    answer:
      'Muitos candidatos relatam melhorias imediatas após aplicar as primeiras técnicas. O livro é estruturado de forma progressiva, permitindo que você desenvolva suas habilidades gradualmente e de forma consistente.',
  },
  {
    question: 'O livro aborda comunicação digital e redes sociais?',
    answer:
      'Embora o foco principal seja oratória presencial e comunicação direta, o livro também oferece insights valiosos sobre como adaptar as técnicas para comunicação digital e redes sociais.',
  },
  {
    question: 'Preciso ter experiência prévia em oratória?',
    answer:
      'Não é necessário. O livro começa com fundamentos e progride para técnicas avançadas, tornando-o acessível tanto para iniciantes quanto para quem já tem alguma experiência.',
  },
  {
    question: 'As técnicas são éticas e alinhadas com valores democráticos?',
    answer:
      'Absolutamente. Gabriel Boccia enfatiza a importância da comunicação honesta, transparente e ética. As técnicas são baseadas em persuasão legítima e construção de relacionamentos genuínos com eleitores.',
  },
  {
    question: 'O livro inclui exercícios práticos?',
    answer:
      'Sim! O livro contém exercícios práticos, exemplos reais e estudos de caso que permitem aplicar imediatamente o que você aprende em sua campanha política.',
  },
  {
    question: 'Posso usar este livro para treinar minha equipe de campanha?',
    answer:
      'Definitivamente! O livro é uma excelente ferramenta para treinar toda a equipe de campanha, garantindo que todos estejam alinhados com as melhores práticas de comunicação política.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-white">
      <div className="text-center mb-12">
        <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
          Perguntas Frequentes
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Tire suas dúvidas
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Respostas para as principais perguntas sobre o livro
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-orange-300 transition-colors duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-orange-600 shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
