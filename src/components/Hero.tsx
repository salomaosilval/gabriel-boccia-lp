import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-600/20 border border-orange-600/50 rounded-full text-orange-400 text-sm font-semibold">
                Foco para Candidatos Políticos
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-orange-500">As Chaves Internas</span>
              <br />
              <span className="text-white">da Oratória</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Domine a arte da comunicação política e conquiste eleitores com
              oratória assertiva e persuasiva.
            </p>

            <p className="text-lg text-gray-400">
              De{' '}
              <span className="text-orange-400 font-semibold">
                Gabriel Boccia
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-orange-600 text-white hover:bg-orange-700"
              >
                Quero Transformar Minha Oratória
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-sm text-gray-400">
              <div>
                <div className="text-2xl font-bold text-orange-500">100%</div>
                <div>Focado em Política</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">+500</div>
                <div>Candidatos Treinados</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-2xl">
              <div className="flex gap-4 items-start">
                <div className="relative w-1/2 aspect-2/3 rounded-lg shadow-2xl overflow-hidden group">
                  <Image
                    src="/livro-capa.jpg"
                    alt="As Chaves Internas da Oratória - Capa do Livro"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 200px"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative w-1/2 aspect-2/3 rounded-lg shadow-2xl overflow-hidden group">
                  <Image
                    src="/livro-verso.jpg"
                    alt="As Chaves Internas da Oratória - Verso do Livro"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
