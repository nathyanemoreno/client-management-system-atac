
# Sistema de Gerenciamento de Clientes

## Introdução
Este projeto tem como objetivo desenvolver um sistema de gerenciamento de clientes para uma empresa que realiza limpeza em residências. O sistema permitirá o cadastro e a visualização de clientes, além de fornecer uma funcionalidade para otimizar as rotas de atendimento com base nas coordenadas dos clientes.

## Tecnologias Utilizadas
- **Linguagem:** TypeScript
- **Backend:** Node.js com Express
- **Banco de Dados:** PostgreSQL
- **Frontend:** React 
- **Gerenciamento de Pacotes:** yarn
- **Versionamento:** Git

## Requisitos

### Requisitos Funcionais

1. **Cadastro de Clientes:**
   - O sistema deve permitir o cadastro de clientes com as seguintes informações obrigatórias: nome, email, e telefone.
   - O sistema deve permitir o cadastro opcional de coordenadas X e Y (para localização no mapa).

2. **Listagem de Clientes:**
   - O sistema deve exibir uma lista de clientes cadastrados.
   - O sistema deve permitir a filtragem de clientes com base no nome, email, ou telefone.

3. **Cálculo de Rota Ótima:**
   - O sistema deve calcular a rota de menor distância que passa por todos os clientes cadastrados e retorna ao ponto de origem (0,0).
   - O sistema deve disponibilizar essa rota através de uma API que pode ser chamada pelo frontend.

4. **Visualização da Rota:**
   - O sistema deve exibir a rota calculada em uma modal, listando a ordem de visitação dos clientes na sequência correta.

5. **Persistência de Dados:**
   - O sistema deve salvar todas as informações dos clientes em um banco de dados PostgreSQL.

### Requisitos Não Funcionais

1. **Desempenho:**
   - O sistema deve ser capaz de calcular a rota de menor distância para um número grande de clientes em um tempo razoável.
   - As respostas da API devem ser rápidas, com tempo de resposta inferior a 1 segundo para operações de cadastro e listagem de clientes.

2. **Escalabilidade:**
   - O sistema deve ser escalável para suportar um número crescente de clientes e requisições simultâneas.

3. **Segurança:**
   - O sistema deve proteger as informações dos clientes utilizando práticas de segurança, como criptografia de dados sensíveis.
   - Deve haver controle de acesso para proteger as APIs contra acessos não autorizados.

4. **Usabilidade:**
   - A interface deve ser intuitiva e fácil de usar, permitindo que os usuários gerenciem os clientes e visualizem as rotas sem dificuldades.

5. **Manutenibilidade:**
   - O código deve ser bem documentado e seguir boas práticas de desenvolvimento, facilitando a manutenção e a evolução do sistema.

6. **Compatibilidade:**
   - O sistema deve ser compatível com diferentes navegadores e sistemas operacionais.
   - O backend deve ser compatível com diferentes versões do Node.js, conforme especificado na documentação.

7. **Confiabilidade:**
   - O sistema deve garantir a integridade dos dados durante o processamento das operações.
   - Em caso de falha, o sistema deve ser capaz de se recuperar sem perda de dados.

## Estrutura do Projeto
- **Pasta `src`:** Contém o código-fonte da aplicação.
  - **Pasta `controllers`:** Controladores para manipulação das requisições.
  - **Pasta `models`:** Definição dos modelos de dados (representação das tabelas).
  - **Pasta `services`:** Lógica de negócios, como cálculo de rotas.
  - **Pasta `use-cases`:** Casos de uso, como adição de usuário ao banco de dados.
  - **Pasta `config`:** Configurações do projeto, como a as variáveis de ambiente.
   - **Pasta `infra`:** Configurações do projeto, como a conexão com o banco de dados.
   - **Pasta `types`:** Tipagens, como os DTO's.

## Rotas da API
### Clientes
- **`POST /auth/sign-in`:** Autentica o usuário no servidor.
- **`POST /auth/sign-up`:** Cadastra um novo usuário e retorna um token.

- **`GET /clients`:** Retorna a lista de clientes cadastrados com filtros.
- **`POST /clients`:** Cadastra um novo cliente.

### Rotas
- **`GET /route`:** Calcula e retorna a rota de menor distância.

## Banco de Dados
### Estrutura das Tabelas
- **Tabela `clients`:**
  - `id`: Primary key.
  - `name`: Text, not null.
  - `email`: Text, not null.
  - `phone`: Text, not null.
  - `coordinate_y`: Text, nullable.
  - `coordinate_x`: Text, nullable.
  - `created_at`: Timestamp, nullable.
  - `updated_at`: Timestamp, nullable.

- **Tabela `clients`:**
  - `id`: Primary key.
  - `name`: Text, not null.
  - `email`: Text, not null.
  - `password`: Text, not null.
  - `created_at`: Timestamp, nullable.
  - `updated_at`: Timestamp, nullable.

## Planejamento
### Etapa 1: Configuração do Ambiente
- Configurar o ambiente de desenvolvimento com Node.js e PostgreSQL.
- Criar o repositório no GitHub para controle de versão.

### Etapa 2: Desenvolvimento do Backend
- **Parte 1:** Implementação das rotas de cadastro e visualização de clientes.
- **Parte 2:** Implementação da lógica de cálculo da rota e adaptação das rotas de cadastro/visualização para incluir coordenadas.

### Etapa 3: Desenvolvimento do Frontend
- Implementação do frontend em React para consumir as APIs desenvolvidas.

### Etapa 4: Testes e Documentação
- Testar todas as funcionalidades desenvolvidas.
- Criar a documentação no README explicando como rodar o projeto.

### Etapa 5: Gravação do Vídeo
- Gravar um vídeo de até 5 minutos explicando o que foi desenvolvido.

## Conclusão
Este documento fornece uma visão geral e o planejamento para o desenvolvimento do sistema de gerenciamento de clientes. A próxima etapa será a configuração do ambiente de desenvolvimento e o início da implementação do backend.
