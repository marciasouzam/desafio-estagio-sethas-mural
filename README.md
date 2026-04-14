# Desafio Front-End — SETHAS

<br>

<p align="center">
  <img src="./corp_readme.svg" alt="CORP" height="80">
  <span style="display:inline-block;width:1px;height:70px;background:#cfcfcf;margin:0 18px;"></span>
  <img src="./corp-news.png" alt="CORP NEWS" height="80">
</p>

<br>

A empresa fictícia terceirizada da SETHAS, a CORP., está prestes a lançar o **CORP NEWS**, um novo módulo de comunicação interna exclusivo para os colaboradores. Eles estão precisando dos seus serviços de Front-End para dar vida a essa nova funcionalidade no sistema.

> **Guia de interface:** há um **Figma disponibilizado** para se guiar na estrutura e estilização das telas:
> [Acessar Figma do Projeto](https://www.figma.com/design/VbGFkfWVYSrdC3DFoCGnSC/Untitled?node-id=0-1&t=Lh7oyrcLQ90HnQeL-1)

---

## Orientação para o Desenvolvimento

Para iniciar o desafio, você deve seguir os passos abaixo para garantir que seu progresso seja registrado corretamente:

1. **Criar um Fork:** Antes de começar a desenvolver, é **obrigatório** realizar um **Fork** deste repositório para a sua conta pessoal do GitHub.
2. **Clonar o seu Repositório:** Trabalhe diretamente no seu fork (`git clone https://github.com/SEU_USUARIO/nome-do-repositorio`).
3. **Entrega:** Ao finalizar, certifique-se de que todos os commits foram enviados para o seu fork (Push) e envie o link do repositório para a equipe de avaliação.

---

## Stack que será usada

- **Framework**: React
- **Estilização**: CSS Puro ou Tailwind CSS v4
- **API**: Django (fornecida no repositório)
- **Ferramentas**: Axios (services)

---

## URL da API

**Base URL:** `http://127.0.0.1:8000/corpnews_api/noticias/`

Esta é a URL base para fazer todas as requisições relacionadas às publicações do mural.

---

## Histórias de Usuário

### HU01 - Feed de Notícias
Como usuário do sistema, quero visualizar um feed com as últimas notícias postadas no CORP NEWS para me manter informado sobre o que acontece na secretaria.

**Critérios de Aceite:**
- A página principal deve exibir uma **renderização condicional na saudação**: exibir "Bom dia", "Boa tarde" ou "Boa noite" de acordo com o horário do sistema (conforme detalhado no Figma).
- A página deve exibir as notícias em formato de **Cards** (não em tabela), com **dois tipos de cards**:
  - **Card maior**
  - **Card menor**
- Ambos os cards devem exibir: Título, Autor, Foto do autor, Data da publicação e Categoria (ex: Avisos, Eventos, TI, RH).
- O **Card maior** também deve exibir o resumo do conteúdo.
- Consumir a API via Axios (Necessário criar um arquivo de service).
- Exibir mensagens de erro em caso de falha e um estado de carregamento (*loading*) durante a busca.

### HU02 - Cadastrar e Excluir Notícias
Como usuário do sistema, quero poder cadastrar novas notícias e remover publicações antigas ou incorretas do mural.

**Critérios de Aceite:**
- **Cadastrar:** A interface deve ter um botão para cadastrar uma "Nova Notícia" (modal ou redirecionamento de página). O formulário deve conter os seguintes campos obrigatórios: Título, Resumo, Conteúdo, Imagem da capa, Autor, Foto do autor e Categoria (Select). Realizar um `POST` para a API via Axios.
- **Excluir:** As notícias devem possuir uma opção de exclusão visualmente clara (ex: ícone de lixeira). O sistema deve solicitar uma confirmação do usuário (ex: modal ou *alert*) antes de apagar definitivamente o registro para evitar exclusões acidentais. Realizar um `DELETE` para a API via Axios.
- **Validação:** O sistema deve validar se todos os campos obrigatórios estão preenchidos antes de permitir o envio do formulário de cadastro.
- Após o sucesso de qualquer uma dessas operações (cadastro ou exclusão), o feed de notícias deve ser atualizado automaticamente na tela.

### HU03 - Detalhamento da Notícia
Como usuário do sistema, quero acessar uma página de detalhe para visualizar uma notícia específica por completo.

**Critérios de Aceite:**
- Ao clicar em um card do feed, o usuário deve ser direcionado para a página de detalhe da notícia selecionada via parâmetro de rota.
- A página de detalhe deve buscar os dados específicos da notícia consumindo a API via Axios.
- Exibir estado de carregamento (*loading*) e mensagens de erro.
- Exibir: Título, Resumo, Conteúdo completo, Imagem da capa, Autor, Foto do autor, Data e Categoria.

---

## Extras
- Utilizar biblioteca de validação para o formulário (ex: **React Hook Form + Zod**).
- Utilizar **Tailwind CSS** para a estilização rigorosa conforme o Figma.
