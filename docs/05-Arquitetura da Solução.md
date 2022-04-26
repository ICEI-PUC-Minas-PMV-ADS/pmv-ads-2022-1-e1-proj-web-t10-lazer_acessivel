# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura XX.

![MicrosoftTeams-image](https://user-images.githubusercontent.com/53317747/165197376-eac00ea9-ca2b-463d-a894-01653a163022.png)
<center> Figura XX - Arquitetura da Solução </center> 

<br/>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Usuários** - todos os usuários cadastrados na tela de login
     - **Avaliações** - registro de opiniões dos usuários sobre os locais
     - **Locais** - lista de locais mantidos para facilitar a busca e o acesso  
     - **Locais preferidos** - lista de locais preferidos escolhidos pelos usuários 
 - **VLibras** - Plataforma que traduz conteúdos digitais em Português para Libras.
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

## Tecnologias Utilizadas

HTML5, CSS3, JavaScript, MySQL, Visual Studio Code, Visual Studio

## Hospedagem

O site utiliza a plataforma do **GitHub Pages** como ambiente de hospedagem do site do projeto.  
