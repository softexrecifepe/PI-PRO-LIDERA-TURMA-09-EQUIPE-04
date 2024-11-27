
# Plataforma de Avaliação de Liderança

## Descrição do Projeto

Esta aplicação é uma plataforma desenvolvida em **Next.js**, **React** e **TypeScript** para ajudar os usuários a avaliar suas competências de liderança. Através de um formulário interativo, os usuários podem responder a perguntas que determinam seu nível de liderança. O sistema categoriza os resultados e fornece uma análise detalhada com base nas pontuações obtidas.

A plataforma também oferece recursos adicionais, como autenticação de usuário, páginas de ajuda, exportação de resultados em PDF e uma interface moderna e intuitiva.

## Funcionalidades Principais

- **Formulário de Avaliação**: Os usuários podem responder a perguntas sobre suas habilidades de liderança.
- **Análise de Resultados**: O sistema classifica os usuários em níveis de liderança e apresenta explicações detalhadas.
- **Exportação de Resultados**: Os usuários podem baixar os resultados em formato PDF.
- **Autenticação**: Registro e login para acessar funcionalidades personalizadas.
- **Interface Amigável**: Navegação intuitiva com páginas dedicadas para suporte e gerenciamento de perfil.

## Estrutura de Rotas

Abaixo estão as rotas da aplicação e suas funcionalidades:

### `/`
- **Descrição**: Página inicial da aplicação (pode ser usada como um dashboard ou introdução ao sistema).
- **Componentes Incluídos**: Layout principal e links para navegação.

---

### `/help`
- **Descrição**: Página de suporte com informações e respostas para dúvidas frequentes.
- **Arquivos**: 
  - `page.tsx`: Renderiza o conteúdo da página.
  - `styles.css`: Estilização específica para a página.

---

### `/test`
- **Descrição**: Página que hospeda o formulário de teste.
- **Arquivos**:
  - `page.tsx`: Exibe o formulário de teste para o usuário.
  - `styles.css`: Estilos para a página do teste.

---

### `/test/result`
- **Descrição**: Página de resultados do teste.
- **Funcionalidade**: 
  - Exibe a pontuação final do usuário.
  - Mostra a categoria de liderança correspondente.
  - Oferece a opção de baixar o resultado como PDF.
- **Arquivos**:
  - `page.tsx`: Lida com a lógica e exibição dos resultados.
  - `styles.css`: Estilização da página de resultados.

---

### `/user/login`
- **Descrição**: Página de login para autenticação do usuário.
- **Funcionalidade**: Permite que os usuários façam login na plataforma.
- **Arquivos**:
  - `page.tsx`: Formulário de login.
  - `styles.css`: Estilos da página de login.

---

### `/user/signup`
- **Descrição**: Página de cadastro para novos usuários.
- **Funcionalidade**: Permite que os usuários se registrem na plataforma.
- **Arquivos**:
  - `page.tsx`: Formulário de cadastro.
  - `styles.css`: Estilos da página de cadastro.

---

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web modernas e rápidas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superconjunto do JavaScript que adiciona tipagem estática ao projeto.
- **CSS**: Estilização personalizada para as páginas.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação em:
   ```
   http://localhost:3000
   ```

## Próximos Passos

- Adicionar testes automatizados.
- Melhorar a acessibilidade.
- Adicionar suporte para múltiplos idiomas.

---
