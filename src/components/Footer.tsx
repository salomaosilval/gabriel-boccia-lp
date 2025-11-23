export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">
              As Chaves Internas da Oratória
            </h3>
            <p className="text-gray-400">Foco para candidatos políticos</p>
            <p className="text-gray-400 mt-2">Por Gabriel Boccia</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="hover:text-orange-500 transition-colors"
                >
                  Sobre o Produto
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-orange-500 transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#autor"
                  className="hover:text-orange-500 transition-colors"
                >
                  Sobre o Autor
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="hover:text-orange-500 transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-orange-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <p className="text-gray-400">
              Para mais informações sobre o livro e treinamentos, entre em
              contato.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} As Chaves Internas da Oratória -
            Gabriel Boccia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
