Gerenciamento de Clientes (CRUD)
Este é um projeto simples de cadastro de clientes desenvolvido para praticar manipulação de DOM e consumo de APIs REST utilizando o método fetch. O sistema permite listar, cadastrar e excluir dados de clientes em um banco de dados em nuvem temporário.

  **Este projeto utiliza o CrudCrud para fins de demonstração. Caso os dados não carreguem, o endpoint de 24h pode ter expirado. Basta substituir a URL no código para testar.**

Tecnologias Utilizadas
HTML5: Estruturação da página e formulários.

CSS3: Estilização da interface (alinhamento, cores e responsividade).

JavaScript (ES6+): Lógica de programação, manipulação de eventos e consumo de API.

CrudCrud: API utilizada para simular o back-end e persistir os dados.

Funcionalidades
Listagem Automática: Ao carregar a página, o sistema busca todos os clientes cadastrados na API.

Cadastro: Permite adicionar novos clientes informando Nome e E-mail.

Exclusão: Botão individual para remover um cliente tanto da interface quanto do banco de dados.

Limpeza de Campos: Após o cadastro, os campos de entrada são limpos automaticamente.


**Observação sobre a API: > Este projeto utiliza o CrudCrud, cujos endpoints expiram a cada 24 horas. Caso o sistema pare de funcionar, 
acesse o site do CrudCrud, gere uma nova URL e substitua a variável url no arquivo scripts.js.**
