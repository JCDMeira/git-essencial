/*
    _ É possível consultar o histórico dos commits através do comando de log
    ? git log

    _ E também é possível ver as informações de uma forma resumida, com a flag --oneline
    ? git log --oneline

    _ que demonstra o histórico de commits de forma mais sucinta, com apenas o hash id e o comentário do commit

    _ na tela de log é possível fazer busca, ao teclar / e então digitar e pressionar enter se faz uma busca dentro das mensagens dos commits já feitos.

    _ pressionar b após uma busca realizada volta para o começo dos commits apresentados (topo)

    _ e q sai do modo log

    @ para alterar o comportamento d um página de log a parte, se usa o comando:
    ? git config core.pager cat

    # muda localmente o comportamento de git log, que então passa a printar todos os commit, não abrindo a página parte, que permite busca.

    @ volta para o comportamento de página.
    ? git config core.pager less
*/
