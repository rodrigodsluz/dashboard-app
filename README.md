# Demostração de Venda

Aplicação feita para o time de vendas demostrar disparos de e-mail e sms para os clientes.

## Como rodar o projeto

1. Crie uma pasta no seu local de trabalho.
2. Faça o clone do repositório:

```bash
git clone https://directoneapp@dev.azure.com/directoneapp/Thanos/_git/directone.demo.sales.front
```

3. Acesse a pasta via terminal:

```bash
cd directone.demo.sales.front
```

4. Instale as dependências:

```bash
npm install
```

5. Com as dependências instaladas agora e só rodar o comando:

```bash
npm run dev
```

Após rodar o comando acima abra o seu browser de preferência e acesse:

```bash
http://localhost:3000
```

# Tarefas automatizadas

Veja abaixo todas as tarefas automatizada utilizando npm [NPM scripts](https://docs.npmjs.com/misc/scripts).

| **Tarefas**       | **Descrição**                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **npm run dev**   | Responsável por inicializar o servidor na porta **3000**.                                                   |
| **npm run build** | Responsável por fazer o **next** compilar a aplicação.                                                      |
| **npm run prod**  | Responsável por para testar a aplicação compilada pelo **next**, também inicializa o servidor na porta 3000 |
| **npm start**     | Responsável por rodar a projeto após ele ter sido compilado pelo **next**.                                  |
| **npm run lint**  | Responsável por verificar erros e padronizar o código.                                                      |
