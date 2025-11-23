import Section from './Section';
import Button from './Button';

export default function AboutProduct() {
  return (
    <Section id="sobre" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Sobre o Produto
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Transforme sua Comunicação Política
          </h2>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>As Chaves Internas da Oratória</strong> é um guia completo
              desenvolvido especificamente para candidatos políticos que desejam
              dominar a arte da comunicação assertiva e persuasiva.
            </p>

            <p>
              Este livro foi criado por <strong>Gabriel Boccia</strong>,
              especialista em comunicação política com anos de experiência
              treinando candidatos em todos os níveis eleitorais.
            </p>

            <p>
              Você aprenderá técnicas práticas para construir credibilidade,
              desenvolver confiança e se comunicar de forma sincera e impactante
              com seus eleitores.
            </p>

            <p className="text-gray-600 italic">
              &ldquo;As pessoas não lembram apenas do que você disse, mas de
              como se sentiram ao ouvir você.&rdquo;
            </p>
          </div>

          <div className="pt-4">
            <Button size="lg">Quero Aprender Agora</Button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-linear-to-br from-orange-50 to-gray-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              O que você vai aprender:
            </h3>

            <ul className="space-y-4">
              {[
                'Comunicação assertiva para candidatos políticos',
                'Construção de credibilidade e confiança',
                'Técnicas de persuasão honesta e ética',
                'Domínio de debates e entrevistas',
                'Formação de opinião pública',
                'Gestão de crises de comunicação',
                'Oratória que conecta e emociona',
                'Estratégias para influenciar eleitores',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
