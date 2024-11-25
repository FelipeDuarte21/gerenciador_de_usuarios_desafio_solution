# Sistema de Gerencimento de Usuários

## Descrição do Sistema

Esta API foi desenvolvida para o gerenciamento de usuários em um sistema. Ela permite realizar operações básicas como cadastro, leitura, atualização e exclusão de informações dos usuários. Cada usuário é representado por um conjunto de dados essenciais, incluindo: **id**, **nome**, **CPF**, **CEP**, **logradouro**, **bairro**, **cidade** e **estado**. A API oferece uma interface simples e eficiente para manipulação desses dados, com a garantia de segurança e integridade das informações.

### Funcionalidades principais:
- **Cadastro de usuários**: Adicionar novos usuários com todos os dados necessários.
- **Leitura de dados**: Consultar as informações de um usuário específico ou uma lista de usuários.
- **Atualização de dados**: Modificar as informações de um usuário existente.
- **Exclusão de dados**: Remover um usuário do sistema.

A API é desenvolvida com foco na simplicidade, segurança e flexibilidade, permitindo fácil integração com outros sistemas ou interfaces.


## Tecnologias Utilizadas

### Backend
- **Spring Boot**: Framework Java utilizado para desenvolver a API de forma rápida e eficiente. Fornece uma estrutura robusta para criar aplicações escaláveis e de fácil manutenção.
- **Spring Data JPA**: Utilizado para simplificar o acesso ao banco de dados, facilitando operações como CRUD (Create, Read, Update, Delete) e implementando a comunicação entre a aplicação e o banco de dados PostgreSQL de forma mais eficiente.
- **Spring Validation**: Ferramenta para validação de dados de entrada, garantindo que as informações recebidas pela API atendam aos requisitos necessários antes de serem processadas.
- **Flyway**: Utilizado para versionamento e controle de migrações do banco de dados, permitindo que o banco seja atualizado de forma controlada e sem erros.
- **Lombok**: Biblioteca Java que simplifica a escrita de código, eliminando a necessidade de criar métodos como getters, setters, `toString()`, `equals()`, e `hashCode()` manualmente.
- **Spring Security**: Utilizado para fazer a autenticação da API e deixando a aplicação mais segura.

### Frontend
- **React**: Biblioteca JavaScript para construção da interface do usuário, permitindo criar componentes reutilizáveis e interativos.
- **React Query**: Utilizado para gerenciar o estado da aplicação relacionado às requisições HTTP, facilitando o controle de dados assíncronos e melhorando a performance.
- **React Router DOM**: Biblioteca para gerenciar a navegação entre diferentes páginas da aplicação de maneira dinâmica e baseada em rotas.
- **Bootstrap**: Framework CSS para criação de layouts responsivos e elementos de UI prontos para uso, proporcionando uma interface moderna e atraente.
- **FontAwesome**: Biblioteca de ícones para adicionar facilmente ícones vetoriais e gráficos ao frontend da aplicação.
- **React Hook Form**: Biblioteca para gerenciar formulários em React de forma simples e eficiente, garantindo validação de campos e envio de dados.
- **SweetAlert 2**: Biblioteca para criar alertas bonitos e customizáveis no frontend, proporcionando uma melhor experiência para o usuário.
- **React Input Mask**: Utilizada para aplicar máscaras de entrada em campos específicos, como CPF, CEP e outros campos de texto, garantindo que os dados sejam inseridos no formato correto.

### Docker
- **Docker**: Ferramenta que permite criar contêineres para empacotar a aplicação junto com todas as suas dependências, garantindo que a aplicação possa ser executada de forma consistente em diferentes ambientes. Utilizado para facilitar o deploy e a configuração do sistema.

### Banco de Dados
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar as informações dos usuários de forma segura e escalável.

Essas tecnologias, combinadas, oferecem uma solução robusta para o gerenciamento de usuários, com uma API eficiente no backend, uma interface dinâmica e responsiva no frontend e um banco de dados relacional de alta performance.

## Como Rodar o Projeto Localmente

A maneira mais fácil de rodar é: a partir da pasta raíz do projeto onde se encontram as pastas **api** e **app** você encontrará o arquivo **docker-compose.yaml**, abra o terminal do seu Sistema Operacional nessa pasta raíz e digite o comando: **docker-compose up** espere o docker configurar e subir a aplicação localmente localmente. o Frontend estará rodando no **localhost:80**.

**Obs:** Verifique se está instalado na sua máquina o docker e esteja oline no momento da execução do comando.

Na tela de login digite esses dados para acessar o sistema.

### Dados de Acesso:
**Email:** admin@admin.com
**Senha:** admin123

## Sobre o Desenvolvedor do Sistema
Este sistema foi desenvolvido por **Luiz Felipe Duarte Elias** (quem vos escreve este arquivo), este sistema foi implementado para a realização do **desafio técnico para a Solution**.

**Meu Email Para Contato:** felipe15lfde@gmail.com

## Licença 
MIT
