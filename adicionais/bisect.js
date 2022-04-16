/*
    | git bisect

    _ permite fazer uma busca binária nos commits para encontrar uma alteração
    _ útil para alterações que modificam o comportamento e não podem ser identificadas por código facilmente
    _ quando a alteração pode ser bastante antiga

    ? git bisect start
    # inicia o bisect, sendo preciso informa um commit com o erro e um sem

    ? git bisect bad hash_id
    # indica o commit com o erro
    
    ? git bisect good hash_id
    # indica o commit sem o erro

    _ no meio dos passos ele irá mostrando commits entre o bom e o ruim, fazendo uma busca binária para encontrar o erro
    _ e é preciso ir indicando se o commit é bom ou ruim, para ver os arquivos da pra usar
    ? cat nome_do_arquivo

    _ após o processo se sai do estado de bisect
    ? git bisect reset
*/
