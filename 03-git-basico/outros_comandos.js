/*
    _ renomear arquivos através do git:
    ? git mv nome_atual nome_novo
    # mv de move

    _ remover arquivos com o git:
    ? git rm nome_arquivo
    #rm de remove
    @ só remove arquivos trackeado com
        ? git rm nome_arquivo -f 
        #força remoção
    @ é feito para remover arquivos que o git está acompanhando
    @ remove passando o arquivo e caminho do arquivo ex: 03-git-basico/outros_comandos.js

    _ verificar diferenças de um arquivo staged com diff
    ? git diff --staged
    # compara o que está pronto para ser commitado com o que está no último commit

    _ é possível fazer comparação com um commit anterior.
    ? git diff hash_id

    _ é possível fazer comparação entre dois commits anteriores. 
    ? git diff hash_id1..hash_id2
    - (1 - mais velho na linha do tempo)
    - (2 - mais novo na linha do tempo)

    # diff vem de difference
*/
