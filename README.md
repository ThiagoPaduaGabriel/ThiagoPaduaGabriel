Descrição do Fluxograma
Início: O teste começa.
Acessar o Site: O testador acessa a página do site que contém o campo de busca.
Inserir Texto no Campo de Busca: O testador insere um texto no campo de busca.
Decisão: O texto é válido?
Sim: O testador insere uma palavra válida.
Ação Esperada: O sistema deve exibir os resultados da pesquisa.
Decisão: Os resultados estão corretos?
Sim: Fim do fluxo: OK.
Não: Fim do fluxo: Bug.
Não: O testador insere uma palavra inválida ou inexistente.
Ação Esperada: O sistema deve exibir uma mensagem de erro ou "Nenhum resultado encontrado".
Decisão: A mensagem de erro está correta?
Sim: Fim do fluxo: OK.
Não: Fim do fluxo: Bug.
Decisão: O campo de busca está vazio?
Sim: O testador não insere texto.
Ação Esperada: O sistema deve exibir uma mensagem de erro, como "Por favor, insira um termo de busca".
Decisão: A mensagem de erro está correta?
Sim: Fim do fluxo: OK.
Não: Fim do fluxo: Bug.
Não: O fluxo já foi tratado nas etapas anteriores.
Notas sobre o Fluxograma
Símbolos de Decisão: Os pontos de decisão são representados por perguntas que levam a diferentes caminhos, dependendo da resposta (Sim ou Não).
Ações Esperadas: Cada caminho leva a uma ação esperada, que pode ser a exibição de resultados ou mensagens de erro.
Fins de Fluxo: O fluxo termina em dois possíveis resultados: OK (quando o comportamento do sistema está correto) ou Bug (quando há um problema a ser corrigido).
