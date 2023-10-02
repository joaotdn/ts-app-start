# Interface segragation principle

- Os clientes não devem ser forçados a depender de uma classe que nao utilizam

- Exemplo: uma interface CustomerProtocolo que contem cpf e cnpj, ao ser implmentada em uma pessoa fisica ela não deveria ter q implementar um cnpj
  uma pessoa fisica tem nome e sobre nome, uma empresa tem nome da empresa e nome fantasia.

- Sobre o exemplo acima, a solução seria criar uma interface, type ou classes abstratas para cada classe

- Evitar a criar classes com muita coisa para evitar que outras classes devam implementar coisas que não vão usar
