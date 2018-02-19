# Workflow Webrise [Tray]
Este é o fluxo de trabalho para lojas Tray utilizado pela agência [Webrise](www.webrise.com.br).

## O que ele faz?
É um workflow bem simples para trabalhar com diversas lojas ao mesmo tempo, imagine que você precise dar manutenção em mais de 50 lojas, este workflow economiza seu tempo evitando configurações de projeto diferentes para cada loja.

```Tray
├── workspace
    ├── loja1
    ├── loja2
    ├── loja3
    ├── loja...
    ├── node_modules
    ├── .editorconfig
    ├── .gitignore
    ├── .README.md
    ├── gulpfile.js
    ├── package-lock.json
    ├── package.json
```

## Como utilizar?
Primeiro ceritique-se de que possui instalado em sua máquina os seguintes itens:

- [NodeJS](https://nodejs.org/)
- [Ruby](https://www.ruby-lang.org/pt/)
- [Git](https://git-scm.com/)

Com estes itens instalados e configurados, clone este repositório para seu workspace (recomendamos criar uma pasta específica para isto).

Em seguida execute os seguintes comandos na pasta:

```
npm install
```
Este comando irá instalar todas as dependências do projeto listadas no arquivo `package.json` e também criará uma pasta chamada `node_modules`, mas você não precisa se preocupar com ela.

Como todas nossas dependências estarão instaladas, nosso arquivo `gulpfile.js` que utiliza essas bibliotecas estará pronto para o uso!

Para utilizá-lo então ceritique-se de que está na raíz do repositório, onde se localiza o arquivo `gulpfile.js` e execute o seguinte comando:

```
gulp --folder loja1
```

Onde `loja1` é a pasta da loja que irá trabalhar.

#
Baseamos este trabalho no [Workflow](https://github.com/tray-tecnologia/opencode-workflow) disponibilizado pela plataforma.