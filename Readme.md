# Student Management System

Este é um sistema de gerenciamento de estudantes feito com React, Webpack e Bootstrap. Ele fornece funcionalidades para pesquisar estudantes, visualizar suas notas e status de aprovação, além de exibir listas de estudantes filtrados e classificados por matéria.

## Funcionalidades

- **StudentSearch**: Permite buscar um estudante pelo número de matrícula e exibe seus dados (notas, nome, matrícula e status de aprovação).
- **ApprovedFailed**: Exibe listas de estudantes aprovados e reprovados, com base nas suas notas.
- **Students**: Mostra todos os estudantes cadastrados.
- **SortedStudents**: Exibe os estudantes classificados por média geral de notas.
- **BestBySubject**: Exibe os melhores estudantes por matéria.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface.
- **Webpack**: Empacotador de módulos para o frontend.
- **Bootstrap**: Framework CSS para estilo e componentes responsivos.
- **Axios**: Biblioteca para realizar requisições HTTP para a API.

## Instalação

### 1. Iniciar o Backend

Antes de rodar o frontend, você precisa iniciar o backend. O backend está disponível no seguinte repositório:

[Backend - Ifficient School API](https://github.com/gilyssa/ifficient-school-api)

Clone o repositório do backend e siga as instruções para configurá-lo e rodá-lo localmente. Após iniciar o backend, ele ficará disponível para o frontend se comunicar.

### 2. Clonar o repositório do frontend

```bash
git clone https://github.com/seu-usuario/student-management-system.git
cd student-management-system
```

### 3. Instalar as dependências do frontend

```bash
npm install
```

### 4. Rodar o frontend

Após iniciar o backend, execute o servidor do frontend:

```bash
npm start
```

Acesse o frontend em [http://localhost:3000](http://localhost:3000).

## Estrutura de Pastas

A estrutura do projeto é organizada da seguinte maneira:

```
/student-management-system
├── /src
│   ├── /Components       # Componentes reutilizáveis
│   ├── /Pages           # Páginas (StudentSearch, ApprovedFailed, etc.)
│   ├── /Services        # Funções auxiliares para interagir com a API
├── /public
│   └── index.html       # Arquivo HTML principal
├── webpack.config.js     # Configuração do Webpack
|__ .babelrc
├── package.json          # Gerenciamento de dependências e scripts
└── README.md             # Documentação do projeto
```

## Como Funciona

1. **StudentSearch**: Permite ao usuário buscar um estudante pelo número de matrícula. O componente exibe os dados do aluno, como nome, matrícula, notas de cada matéria e status de aprovação.

2. **ApprovedFailed**: Exibe listas de estudantes aprovados e reprovados, com base nas suas notas.

3. **Students**: Mostra todos os estudantes cadastrados no sistema.

4. **SortedStudents**: Exibe os estudantes ordenados pela sua média geral de notas.

5. **BestBySubject**: Exibe os melhores estudantes por matéria, mostrando o nome do melhor aluno e suas notas.

### Exemplo de uso

- Na página **StudentSearch**, basta digitar a matrícula de um estudante e clicar no botão "Buscar" para visualizar os detalhes do estudante.
- Na página **ApprovedFailed**, o sistema exibe automaticamente os estudantes aprovados e reprovados com base nas suas notas.

## Dependências

Este projeto utiliza as seguintes dependências:

- **React**: Framework para a criação da interface de usuário.
- **Bootstrap**: Framework CSS para layout e componentes responsivos.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Webpack**: Ferramenta de empacotamento de módulos para o frontend.

Você pode verificar todas as dependências no arquivo `package.json`.

