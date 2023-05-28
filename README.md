# Firebase

Esta é uma aplicação React criada com o intuito de implementar as tecnologias do Firebase. Para este projeto, foram utilizados o Firebase Auth e o Firebase Database. A aplicação React foi criada usando Vite.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Faça o download ou clone o projeto para o seu ambiente de desenvolvimento.
git clone https://github.com/seu-usuario/Firebase-tests.git
3. Navegue até a pasta do projeto.
cd firebase-app
4. Instale as dependências do projeto.
npm install


## Configuração do Firebase

1. Crie uma conta no [Firebase](https://firebase.google.com/) e crie um novo projeto.

2. No arquivo `src/firebase/firebase.js`, substitua as informações de configuração do Firebase pelas chaves do seu próprio projeto. Você pode encontrar essas informações no painel de configuração do Firebase.

## Uso

1. No terminal, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```
npm run dev
```
    Abra um navegador da web e acesse http://localhost:porta-vite para acessar a página React.

    No aplicativo, você pode utilizar as funcionalidades do Firebase Auth para autenticação de usuários e o Firebase Database para armazenar e recuperar dados.

Tecnologias Utilizadas

    React: Biblioteca JavaScript para construção de interfaces de usuário.
    Vite: Ferramenta de desenvolvimento rápida para projetos React.
    Firebase: Plataforma de desenvolvimento de aplicativos móveis e da web.
    Firebase Auth: Recursos de autenticação do Firebase.
    Firebase Database: Banco de dados em tempo real do Firebase.

Estrutura do Projeto

    src/: Pasta principal do código-fonte do aplicativo.
        components/: Pasta contendo os componentes reutilizáveis do aplicativo.
        pages/: Pasta contendo as páginas principais do aplicativo.
        firebase/: Pasta contendo os arquivos de configuração e inicialização do Firebase.
        App.js: Arquivo principal do aplicativo, contendo a configuração das rotas e a estrutura geral do aplicativo.
        index.js: Arquivo principal que renderiza o aplicativo no navegador.
    public/: Pasta contendo arquivos estáticos, como o arquivo HTML base.
    package.json: Arquivo de manifesto do Node.js com as dependências e scripts do projeto.
