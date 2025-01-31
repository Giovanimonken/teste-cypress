# Testes Automatizados com Cypress - Página de Cadastro

## Objetivo

Este projeto tem como objetivo desenvolver testes automatizados utilizando o **Cypress** para verificar o funcionamento de uma página de cadastro de usuários.

## Funcionalidades da Página

- **Formulário de Cadastro** com os campos: Nome, Email, Senha e Botão "Enviar".
- **Lista Dinâmica** que exibe os cadastros.
- **Botão Limpar** para remover os cadastros da lista.

## Testes Desenvolvidos

1. **Verificar Carregamento Inicial**: Verificar se a página e os campos obrigatórios estão visíveis.
2. **Validação de Campos Obrigatórios**: Verificar se o erro é exibido quando os campos obrigatórios não são preenchidos.
3. **Cadastro Bem-Sucedido**: Verificar se o cadastro aparece na lista após preenchimento correto.
4. **Evitar Cadastros Duplicados**: Verificar se o sistema impede o cadastro de duplicatas (mesmo nome e e-mail).
5. **Limpar a Lista**: Verificar se o botão "Limpar" remove todos os cadastros.

## Como Rodar os Testes

1. Clone o repositório:
   ``bash
   git clone https://github.com/seu-usuario/techwave-form-cadastro.git
   

2. Instale as dependências:
   ``bash
   npm install
   

3. Para rodar os testes com o Cypress:
   ``bash
   npx cypress open
   

## Estrutura do Projeto


techwave-form-cadastro/
├── cypress/
│   └── e2e/
│       └── cadastro.spec.js  # Arquivo de testes
├── index.html  # Página de cadastro
├── style.css   # Estilos da página
└── script.js   # Funcionalidade do formulário
