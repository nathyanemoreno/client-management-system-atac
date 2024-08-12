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

## Setup do Projeto

### Requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [yarn](https://classic.yarnpkg.com/en/docs/install/)
- [PostgreSQL](https://www.postgresql.org/download/)

### Banco de Dados

1. **Crie um banco de dados PostgreSQL com o nome especificado nas variáveis de ambiente.**

2. **Execute o script de criação de tabelas fornecido no repositório, se aplicável.**

### Configuração do Backend

1. **Clone o repositório do projeto:**

   ```bash
   git clone https://github.com/nathyanemoreno/client-management-system-atac.git

   ```

2. **Acesse o diretório do backend:**

   ```bash
   cd api
   ```

3. **Instale as dependências:**

   ```bash
   yarn install
   ```

4. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do diretório `backend` e adicione as seguintes variáveis:

   ```plaintext
   NODE_ENV=development
   POSTGRES_DATABASE=client-management-system
   POSTGRES_HOST=localhost
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_PORT=5433
   JWT_SECRET=CliEntManGementSysteM
   SERVER_PORT=5686
   ```

5. **Execute as migrations do banco de dados:**

   ```bash
   cd infra/database
   ```

   - Execute o arquivo `init_db.sql` para inicializar o banco de dados

- Opcional: Execute os arquivos `migrations.sql` para preencher o banco de dados

6. **Inicie o servidor:**

```bash
  cd api
```

```bash
yarn dev
```

### Configuração do Frontend

1. **Acesse o diretório do frontend:**

   ```bash
   cd app
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```

3. **Configure o endpoint da API:**
   No arquivo `.env` na raiz do diretório `app`, adicione a URL do backend:

   ```plaintext
   VITE_API_HOST=http://localhost:5686
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   yarn dev
   ```
