# Diretrizes para Fluxo de Trabalho em Repositórios do CPDigital

Documento para auxiliar o desenvolvedor durante o processo de versionamento do projeto.​

## Conteúdo

Sumário do contéudo deste documento​

- [Diretrizes para Fluxo de Trabalho em Repositórios do CPDigital](#diretrizes-para-fluxo-de-trabalho-em-repositórios-do-cpdigital)
  - [Conteúdo](#conteúdo)
  - [Introdução](#introdução)
  - [Fluxo](#fluxo)
  - [Regras para criação da *Branch*](#regras-para-criação-da-branch)
  - [Regras para criação de *Commits*](#regras-para-criação-de-commits)
    - [Tipo](#tipo)
    - [Escopo](#escopo)
    - [Descrição](#descrição)
    - [Corpo](#corpo)
    - [Rodapé](#rodapé)
  - [Regras para criação de *Pull Requests*](#regras-para-criação-de-pull-requests)
    - [Padrão de Mensagem](#padrão-de-mensagem)
      - [Título](#título)
      - [Descrição](#descrição-1)

## Introdução

Este guia tem por objetivo definir as regras para criação de *Branches*, *Pull Requests* e *Commits* nos projetos Frontend do CPDigital.
Para seguir o guia é fundamental o conhecimento da [ferramenta Git](https://git-scm.com/book/en/v2).

## Fluxo

Para executar as tarefas de cada História é necessário criar uma *branch* para execução destas. Os desenvolvedores deverão sempre utilizar a *develop* como única fonte de verdade.
​
Após a execução das tarefas em questão, adicioná-las ao repositório local e subir para o repositório remoto da *branch* criada.
​
Feito isso, abrir um *Pull Request* para fazer o *merge* para a *develop*.
​
**É mandatório colocar outro programador como Aprovador deste *PR***.

## Regras para criação da *Branch*

Antes de criar uma nova *branch* deve-se assegurar de estar na *branch develop* do projeto.
Caso já esteja na *develop* rode o comando:

```sh
 git pull
```

Se não retornar nenhum erro ela estará atualizada e é hora de criar a *branch* no projeto para execução das tarefas, rodando o comando:

```sh
git checkout -b <NOME>
```

Onde o `<NOME>` deve seguir o seguinte padrão: `<type>/<f{feature_da_sprint}>/<h{historia_da_feature}>`

- **{ tipo_da_atividade }**: Tipo da atividade que está sendo desenvolvida.​
  - **feat**: Usado para uma melhoria, para criação de uma nova funcionalidade ou um novo componente;
  - **fix**: Utilizado para correção de  _bugs_;
- **{ feature_da_sprint }**: Número da feature presente no Taskboard de cada sprint, entre [ colchetes ].
- **{ historia_da_feature }**: Número identificador da(s) histórias(s) no Taskboard da Sprint, código descrito logo após o número da feature, com prefixo H.

Exemplo:

```sh
git checkout -b feat/f1803/h01
```

## Regras para criação de *Commits*

A descrição dos *commits* devem ser feitas em português.
​
> Não deverá ser utilizada a funcionalidade de *rebase* mesmo havendo vários *commits* no mesmo *Pull Request*.
​
Deve-se seguir um padrão para criação dos *commits*:

```sh
<TIPO>(ESCOPO): <DESCRIÇÃO>
<LINHA EM BRANCO>
<CORPO>
<LINHA EM BRANCO>
<RODAPÉ>
```

Abaixo detalhes do que deve ser descrito em cada parte:

### Tipo

Deve ser utilizado um dos tipos descritos abaixo conforme o objetivo da alteração:

- build (quando a alteração está relacionada ao *build*);
- docs (quando a alteração for na documentação);
- feat (quando for uma melhoria, for criada uma nova funcionalidade ou um novo componente);
- fix (para correção de *bugs*);
- test (quando forem adicionados ou refatorados os testes);
- refactor (quando houver reestruturão da arquitetura do projeto);

> Nunca colocar espaço entre a descrição do tipo e a abertura de parênteses do escopo.

### Escopo

No escopo deverá ser definido o nome do componente ou serviço diretamente afetado pelo *commit*, caso mais de um componente seja afetado, deve-se definir o principal.
​
> Sempre deve estar entre parênteses e após o fechamento do parênteses deve-se colocar dois pontos e um espaço.

### Descrição

A descrição do *commit* deve seguir o seguinte padrão:

- Nunca iniciar a descrição com letra maiúscula.
- Nunca deve utilizar ponto final na descrição.
- Deve-se utilizar o modo imperativo na descrição.
​
Por exemplo:

Correta:

```sh
formata o termo de uso e oculta detalhes do pedido quando plano for nulo 
```

Errada:

```sh
Adicionada nova funcionalidade.
```

### Corpo

**O corpo do *commit* é opcional**.

- Deve-se utilizar o modo imperativo na descrição.
- Deve descrever a motivação que levou a mudança e também o que foi alterado em relação ao comportamento anterior.

> Antes da declaração do corpo deve-se deixar uma linha em branco.

### Rodapé

**O rodapé do *commit* é obrigatório**.
> Antes da declaração do rodapé deve-se deixar uma linha em branco.

- Deve-se conter os id's das tarefas, com o padrão: `tarefa(s) { #id }`

> Exemplo de descrição do rodapé
tarefas #2318, #2320
​
> Exemplo de mensagem de commit

```sh
feat(fnx-service): criar método para listar os pedidos
​
Método anterior busca apenas um pedido passando o id como argumento.
​
tarefa #2224
```

## Regras para criação de *Pull Requests*

Antes de criar a *Pull Request* é importante verificar:

- Se a branch selecionada para fazer o *merge* é a *develop*.
- Se foi selecionado um aprovador deste *PR*.
​
Após essa verificação e tudo estando correto basta gerar a *Pull Request*. Utilizar o padrão de mensagem à seguir:

### Padrão de Mensagem

#### Título

Para descrição do título seguir o seguinte padrão: `Tarefas da Feature {#id} - {#Hid}.`
**{ #id }**: Número identificador da(s) features(s) no Taskboard da Sprint, entre [ colchetes ].
**{ #Hid }**: Número identificador da(s) histórias(s) no Taskboard da Sprint, código descrito logo após o número da feature, com prefixo H.

#### Descrição

Para descrição da *Pull Request* seguir o seguinte padrão:
​
Implementações realizadas referente a Feature `{#id}` e História `{# Hid}`
**{ #id }**: Número identificador da(s) features(s) no Taskboard da Sprint, entre [ colchetes ].
**{ #Hid }**: Número identificador da história principal no Taskboard da Sprint, código descrito logo antes o número da feature, em negrito.
​
> Deve-se adicionar um `x` dentro dos colchetes sem deixar espaço em cada um dos itens que forem alterados na *Pull Request*.
​
**PR Checklist**

```sh
- [x] Código
- [x] Testes unitários
- [ ] Documentação
- [x] Configurações
```

> Exemplo de mensagem do *PR*:

**Título**: Tarefas da Feature 2300 - H01

Implementações realizadas referente a Feature #1868 e História #1869.
​
**PR Checklist**

```sh
Alteração em:
- [ ] Código
- [x] Testes unitários
- [ ] Documentação
- [ ] Configurações
```
