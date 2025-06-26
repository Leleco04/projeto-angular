# Projeto: Lista de Tarefas

Uma aplicação web moderna e responsiva para gerenciamento de tarefas, desenvolvida com Angular, Angular Material e Tailwind CSS.

## Integrantes

* **Leandro Hideki Tsuchida** 

---

## Resumo do Projeto

Este projeto consiste no desenvolvimento de um sistema em Angular para gerenciamento de uma lista de tarefas. A aplicação permite que um usuário, após se autenticar, crie, remova, exiba e edite as tarefas.

O sistema foi projetado com foco em boas práticas utilizando componentes e rotas, assim como uma interface de usuário limpa e moderna, seguindo os princípios do Material Design.

### Funcionalidades Implementadas

* **Autenticação de Usuário:** Tela de login com credenciais fictícias locais para proteger o acesso à lista de tarefas.
* **Gerenciamento de Tarefas (CRUD):**
    * **Cadastro:** Adição de novas tarefas com título e descrição.
    * **Listagem:** Exibição de todas as tarefas cadastradas.
    * **Edição:** Alteração de título, descrição e status de uma tarefa existente.
    * **Remoção:** Exclusão de tarefas.
* **Alteração de Status:** Interface prática para modificar o status de uma tarefa entre "Pendente", "Em Andamento" e "Concluído".
* **Compartilhamento:** Cada tarefa possui um link único que pode ser compartilhado, levando a uma página de visualização de detalhes (somente leitura).
* **Persistência de Dados:** As informações são mantidas em memória durante a sessão do usuário, utilizando um serviço singleton do Angular.

---

## Tecnologias Utilizadas

O projeto foi construído utilizando as tecnologias mais modernas do ecossistema front-end:

* **Framework Principal:** **Angular**
    * Pela sua arquitetura robusta baseada em componentes, injeção de dependências e um ecossistema completo para construir aplicações escaláveis e de fácil manutenção.

* **UI e Estilização:** **Angular Material** **CSS** **Tailwind**
    * Angular Material fornece uma biblioteca de componentes de alta qualidade, acessíveis e prontos para uso, acelerando o desenvolvimento de uma interface bonita e consistente.

* **Roteamento:** **Angular Router**
    * Para criar uma experiência de navegação fluida de Single-Page Application, com rotas protegidas por Guards de autenticação.

* **Formulários:** **Angular Reactive Forms**
    * Para uma abordagem mais explícita, robusta e testável na criação de formulários complexos, como os de login e edição de tarefas.

* **Controle de Versão:** **Git & GitHub**
    * Para o gerenciamento de todo o histórico de desenvolvimento do código.

---

## Outras Informações Relevantes

### Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

**Pré-requisitos:**
* **Node.js** (versão 18 ou superior)
* **Angular CLI** 

**Passos:**

1.  Clone o repositório para a sua máquina:
    ```bash
    git clone https://github.com/Leleco04/projeto-angular.git
    ```

2.  Navegue até o diretório do projeto:
    ```bash
    cd projeto-angular
    ```

3.  Instale todas as dependências do projeto:
    ```bash
    npm install
    ```

4.  Execute o servidor de desenvolvimento:
    ```bash
    ng serve --open
    ```
    A aplicação será aberta automaticamente no seu navegador no endereço `http://localhost:4200/`.

### Credenciais de Acesso

Para acessar a aplicação, utilize as seguintes credenciais na tela de login:

* **Usuário:** `angular`
* **Senha:** `angular`
