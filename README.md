<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body>
  <h1>PowerUp</h1>
  <p>PowerUp é uma aplicação web focada em armazenar ferramentas para usuários poderem utilizá-las. A aplicação permite que os usuários cadastrem seus treinos e refeições semanais, criem um perfil para servir de base para calcular o IMC, além de consultar suplementos e requisitar treinos e dietas prontas.</p>
  <h2>Desenvolvedores:</h2>
  <ul>
    <li>David Emmanoel Lopes Rocha - <a href="https://www.instagram.com/davidemmannoel/">@davidemmannoel</a></li>
    <li>Jamuelton Angelim - <a href="https://www.instagram.com/jamuelton/">@jamuelton</a></li>
  </ul>
  <h2>Tecnologias utilizadas</h2>
  <ul>
    <li>Node.js</li>
    <li>Docker</li>
    <li>React</li>
    <li>Prisma</li>
    <li>JavaScript</li>
    <li>Express</li>
    <li>Axios</li>
    <li>JWT</li>
    <li>PostgreSQL</li>
  </ul>
  
  <h2>Funcionalidades</h2>
  <ul>
    <li>Cadastro de treinos semanais</li>
    <li>Cadastro de refeições semanais</li>
    <li>Criação de um perfil para cálculo do IMC</li>
    <li>Consulta de suplementos</li>
    <li>Requisição de treinos e dietas prontas</li>
  </ul>
  
  <h2>Como usar</h2>
  <p>Para usar o PowerUp, você precisará clonar o repositório e instalar as dependências:</p>
  <pre><code>git clone https://github.com/seu-usuario/powerup.git
cd powerup
npm install
  </code></pre>
  
  <p>Em seguida, você precisará configurar as variáveis de ambiente:</p>
  <pre><code>cp .env.example .env
  </code></pre>
  
  <p>Edite o arquivo <code>.env</code> para fornecer as informações necessárias, como as credenciais do banco de dados.</p>
  <p>Para rodar a aplicação, você precisará ter o Docker e o Docker Compose instalados em sua máquina.</p>
<ol>
  <li>Navegue até a pasta raiz do projeto</li>
  <li>Execute o seguinte comando no terminal: <code>docker-compose up -d</code></li>
  <li>Aguarde alguns minutos até que os containers sejam iniciados</li>
</ol>
  
  <p>Por fim, execute o comando para iniciar o servidor no back-end:</p>
  <pre><code>npm run dev
  </code></pre>
  <p>Execute para rodar o front-end:</p>
  <pre><code>npm start
  </code></pre>
  
  <p>A aplicação estará disponível em <a href="http://localhost:3000">http://localhost:3000</a>.</p>
  
  <h2>Contribuindo</h2>
  <p>Se você deseja contribuir com o PowerUp, por favor abra uma issue para discutir suas ideias e sugestões.</p>
  <p>Você pode também contribuir da seguinte forma:</p>
  <ol>
  <li>Faça um fork deste repositório</li>
  <li>Clone o seu fork em sua máquina</li>
  <li>Crie uma nova branch com o nome da sua feature: <code>git checkout -b nome-da-feature</code></li>
  <li>Faça as alterações necessárias</li>
  <li>Faça o commit das suas alterações: <code>git commit -m 'feat: minha nova feature'</code></li>
  <li>Faça o push para o seu fork: <code>git push origin nome-da-feature</code></li>
  <li>Crie um novo Pull Request</li>
</ol>
  
  <h2>Licença</h2>
  <p>Este projeto está licenciado sob a <a href="LICENSE">Licença MIT</a>.</p>
</body>
</html>
