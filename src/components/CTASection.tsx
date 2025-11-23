import Section from './Section';
import Button from './Button';

export default function CTASection() {
  return (
    <Section className="bg-linear-to-br from-orange-600 to-orange-700 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Pronto para Transformar sua Oratória Política?
          </h2>
          <p className="text-xl md:text-2xl text-orange-100">
            Domine a arte da comunicação política e conquiste eleitores com
            confiança e autenticidade
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-orange-100">Focado em Política</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">+500</div>
                <div className="text-orange-100">Candidatos Treinados</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Técnicas</div>
                <div className="text-orange-100">Comprovadas</div>
              </div>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="!bg-white !text-orange-600 hover:!bg-orange-50 hover:!text-orange-700 text-lg px-12 py-4 border-0 shadow-xl"
              >
                Quero Transformar Minha Oratória Agora
              </Button>
            </div>

            <p className="text-sm text-orange-100">
              ⚡ Garantia de conteúdo de alta qualidade focado em resultados
              reais
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
