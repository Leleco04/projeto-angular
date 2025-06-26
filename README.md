Projeto: Lista de Tarefas Interativa
Uma aplicação web moderna e responsiva para gerenciamento de tarefas, desenvolvida com Angular e Angular Material.

Integrante(s)
[Seu Nome Completo] - seu.email@exemplo.com

Resumo do Projeto
Este projeto consiste no desenvolvimento de uma Single-Page Application (SPA) para gerenciamento de uma lista de tarefas pessoal. A aplicação permite que um usuário, após se autenticar, realize todas as operações de CRUD (Criar, Ler, Atualizar, Deletar) em suas tarefas.

O sistema foi projetado com foco em boas práticas de desenvolvimento, componentização, reatividade e uma interface de usuário limpa e moderna, seguindo os princípios do Material Design.

Funcionalidades Implementadas
Autenticação de Usuário: Tela de login com credenciais fictícias locais para proteger o acesso à lista de tarefas.

Gerenciamento de Tarefas (CRUD):

Cadastro: Adição de novas tarefas com título e descrição.

Listagem: Exibição de todas as tarefas cadastradas.

Edição: Alteração de título, descrição e status de uma tarefa existente.

Remoção: Exclusão de tarefas.

Alteração de Status: Interface prática para modificar o status de uma tarefa entre "Pendente", "Em Andamento" e "Concluído".

Compartilhamento: Cada tarefa possui um link único que pode ser compartilhado, levando a uma página de visualização de detalhes (somente leitura).

Persistência de Dados: As informações são mantidas em memória durante a sessão do usuário, utilizando um serviço singleton do Angular.

Tecnologias Utilizadas
O projeto foi construído utilizando as tecnologias mais modernas do ecossistema front-end:

Framework Principal: Angular 17+

Por quê? Pela sua arquitetura robusta baseada em componentes, injeção de dependências e um ecossistema completo para construir aplicações escaláveis e de fácil manutenção.

Linguagem: TypeScript

Por quê? Para adicionar segurança de tipos ao JavaScript, o que reduz drasticamente os erros em tempo de desenvolvimento e melhora a produtividade com recursos como autocompletar e análise estática de código.

UI e Estilização: Angular Material & SCSS

Por quê? Angular Material fornece uma biblioteca de componentes de alta qualidade, acessíveis e prontos para uso, acelerando o desenvolvimento de uma interface bonita e consistente. O SCSS foi usado para escrever um CSS mais poderoso, organizado e reutilizável.

Gerenciamento de Estado Reativo: RxJS

Por quê? Utilizamos BehaviorSubject para criar um fluxo de dados reativo. Isso garante que, quando os dados são alterados no serviço, todos os componentes inscritos são atualizados automaticamente, resultando em uma interface sempre sincronizada.

Roteamento: Angular Router

Por quê? Para criar uma experiência de navegação fluida de Single-Page Application, com rotas protegidas por Guards de autenticação.

Formulários: Angular Reactive Forms

Por quê? Para uma abordagem mais explícita, robusta e testável na criação de formulários complexos, como os de login e edição de tarefas.

Controle de Versão: Git & GitHub

Por quê? Para o gerenciamento de todo o histórico de desenvolvimento do código.

Outras Informações Relevantes
Como Executar o Projeto
Para executar este projeto localmente, siga os passos abaixo:

Pré-requisitos:

Node.js (versão 18 ou superior)

Angular CLI (versão 17 ou superior)

Passos:

Clone o repositório para a sua máquina:

Navegue até o diretório do projeto:

Instale todas as dependências do projeto:

Execute o servidor de desenvolvimento:

A aplicação será aberta automaticamente no seu navegador no endereço http://localhost:4200/.

Credenciais de Acesso
Para acessar a aplicação, utilize as seguintes credenciais na tela de login:

Usuário: admin

Senha: admin
