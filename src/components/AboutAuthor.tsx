import Image from 'next/image';
import Section from './Section';

export default function AboutAuthor() {
  return (
    <Section id="autor" className="bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-linear-to-br from-orange-50 to-gray-50 rounded-2xl p-8 border border-orange-100">
            <div className="relative aspect-square max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/gabriel-boccia.jpg"
                alt="Gabriel Boccia - Especialista em Oratória Política"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <div className="inline-block">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Sobre o Autor
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Gabriel Boccia
          </h2>

          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Gabriel Boccia</strong> é um especialista renomado em
              comunicação política e oratória, com uma trajetória dedicada ao
              desenvolvimento de candidatos em todos os níveis eleitorais.
            </p>

            <p>
              Com anos de experiência prática, Gabriel já treinou centenas de
              candidatos políticos, ajudando-os a desenvolver habilidades de
              comunicação que conectam, persuadem e constroem relacionamentos
              genuínos com eleitores.
            </p>

            <p>
              Sua abordagem única combina técnicas de oratória clássica com
              estratégias modernas de comunicação política, sempre priorizando a
              autenticidade e a ética.
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-600 italic">
                &ldquo;Acredito que a oratória política deve ser uma ferramenta
                de conexão genuína, não apenas de persuasão. Quando você fala
                com sinceridade e paixão, as pessoas sentem e respondem.&rdquo;
              </p>
              <p className="text-right text-gray-500 mt-2">— Gabriel Boccia</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
