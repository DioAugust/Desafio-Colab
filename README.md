# Teste da Vaga de Desenvolvedor Fullstack

## Introdução:

### Sobre o Colab
O Colab é uma empresa que conecta a população ao governo, dando mais voz ao cidadão e proporcionando uma gestão pública mais colaborativa. Operamos no modelo SaaS (Software as a Service), disponibilizando uma plataforma de gerenciamento de serviços omnichannel, centralizando todos os atendimentos ao cidadão, quer ocorram via balcão de serviços, 156, WhatsApp, totem, redes sociais ou via aplicativo do Colab.

O produto do Colab pode ser dividido em diversas frentes, porém nosso público prioritário são os gestores de prefeituras municipais. Para eles, somos um canal para melhorar o relacionamento com o munícipe e uma plataforma para disponibilizar os serviços da prefeitura na palma da mão do cidadão (via aplicativo), colhendo informações que servem como respaldo para as ações e planejamentos municipais e promovem a gestão transparente.

## O desafio
O objetivo deste teste é avaliar suas habilidades de desenvolvimento Fullstack, especialmente em TypeScript e React. Você será solicitado a criar uma aplicação web que consuma a API Random User Generator para exibir uma lista de usuários e os detalhes de cada usuário. Você deve criar um repositório no Git contendo o código-fonte da sua aplicação e um README.md explicando suas escolhas de arquitetura, paradigmas e quaisquer outras decisões importantes.

### Requisitos:
- A aplicação deve ser escrita em TypeScript.
- O frontend deve ser desenvolvido usando React.
- O back-end deve estar separado, porém no mesmo repo, pode ser utilizado qualquer framework node.js.
- O backend deve consumir a API Random User Generator para obter os dados dos usuários e não o front diretamente.
- Deve haver uma página de listagem de usuários que exiba pelo menos o nome de cada usuário.
- Ao clicar em um usuário da lista, deve ser exibida uma página de detalhes que mostra informações mais detalhadas sobre o usuário selecionado.
- A interface do usuário deve ser atraente e amigável, utilize qualquer framework de UI ou DS que você conheça.
- Os commits no repositório Git devem ser organizados e significativos.
- O README.md deve explicar as decisões de arquitetura, paradigmas e outras escolhas importantes feitas durante o desenvolvimento da aplicação.

## Frontend

### Organização do projeto
- Segue um padrão modular:
	- A parte estática da aplicação se encontra dentro da pasta views, como páginas e a pasta de componentes.
	- Tantos as páginas quanto os componentes tem seus estilos modularizados, de forma a cada elemento ter sua pasta com arquivo .tsx e .css.
	- A parte de dados da aplicação está localizada na pasta model, nele é feito a configuração do axios, constantes e tipos.
	- Na parte de model também é encontrado os serviços, dessa forma separando a aplicação de maneira eficiente.
    - Para estilização foi utilizado bootstrap, para roteamento foi utilizado react-router-dom.
A escolha desse padrão se dá devido a sua simplicidade de implementação, além de eficiência em projetos desse porte, tornando fácil sua manutenabilidade e colaboração com outros desenvolvedores.

### Sobre a aplicação
Foi desenvolvido uma aplicação que consome a nossa api local que é alimentada pela api do random user generator. Foram construídas três páginas, sendo uma página principal com a proposta do desafio e a cara do colab, a página de listagem de cidadãos que contém as funcionalidades principais da aplicação, com a listagem dos cidadãos fictícios em formato de card, dando a opção de clicar, gerando um redirecionamento para uma tela de detalhes do cidadão, ainda na tela de listagem também temos um filtro por nome e uma opção para gerar novos cidadãos fictícios. 

## Backend

### Organização do projeto
- Segue o padrão modular sugerido pelo nest:
	- Tendo a divisão padrão da aplicação entre modulo, serviço e controlador.
	- Foram desenvolvidos testes unitários básicos, que verificam a montagem dos módulos, e um teste unitário para a rota de listagem de usuários. 
	- Existe um sistema de cache que fiz com o propósito de evitar diversas requisições para a api do random user generator, dessa forma evitando novas requisições sempre que a página é recarregada.
	- A tipagem da interface de usuário foi definida em uma pasta direcionada para isso
Segui o modelo recomendando pelo nest pois considerando as necessidades do nosso frontend, ela atenderia bem, tornando desnecessário a aplicação de um modelo mais complexo.

### Sobre a aplicação
Existem três rotas principais, sendo elas a rota que busca os cidadãos e guarda esses dados em cache, evitando uma nova busca se esses dados existirem, a rota que busca os detalhes de um usuário específico pelo uuid, retornando um erro caso o usuário não seja encontrado e a rota que traz uma nova leva de cidadãos independente de existir ou não dados em cache.

## Executando o projeto
*Na raiz do projeto* 
#### Iniciar o frontend
```
cd ./frontend && npm install && npm run start
```

#### Iniciar o backend
``` 
cd ./backend && npm install && npm run start
```

#### Todos os testes do backend (/backend)
``` 
npm run test
```