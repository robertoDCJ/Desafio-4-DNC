
# Desafio 4 DNC

Desafio de projeto do curso de tecnologia da escola DNC, o objetivo desse desafio foi fazer alterações em um projeto que esta no repositorio [Desafio 3 DNC](https://github.com/robertoDCJ/Desafio-3-DNC), podendo ser alterado o designer e adicionado funcionalidades. Utilizando o git para vercionamento adequado do projeto, que deve conter no minimo duas branchs, a main como a principal e uma secundaria, que seria onde deve ser feito as alterações, para só no final fazer um merge puxando as alterações prontas e funcionando para a main e dando um push para subir aqui no github.



## Instalação e Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/robertoDCJ/Desafio-4-DNC
```

Entre no diretório do projeto

```bash
  cd Desafio4
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Tecnologias

Nesse projeto foi utilizado o framework [React](https://react.dev/) e o Sass para a estilização.
## Melhorias

O projeto base já tinha a funcionalidade do usuario conseguir criar novos itens nas lista de tarefas, e depois de criado o item ele conseguia editar, deletar ou marcar como feito o item.

Nesse novo projeto eu implementei uma mudança no layout, colocando um video como background e adicionando a funcionalidade de poder mudar o video apenas clicando um botão que eu posicionei no canto inferior do lado direito.

![Captura de tela 2024-02-04 095301](https://github.com/robertoDCJ/Desafio-4-DNC/assets/145286529/b00ab1da-5c64-4522-801b-345c4520a8ca)

Outra funcionalidade que implantei foi a de se o item ficar marcado como feito por um tempo determinado ele será removido da lista, mantendo ela mais organizada, para o usuario se consentrar somente nas tarefas que ainda faltam ser feitas.




