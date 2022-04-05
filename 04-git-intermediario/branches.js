/*
    _ Uma branch é uma ramificação do projeto.
    - a principal é chamada de branch master ou main
    - e as outras branchs são nomeadas e são como linhas do tempo alternativas

    - A partir da master foi criado uma branch para desenvolvimento da feature 001

    - ex1
    # -------/-------> master
    #        --------> feat001
    
    -Imaginando que o projeto continuou sendo trabalhado na master (idealmente recebendo coisas de outras branches e nunca mudando diretamente em si), em algum ponto da linha do tempo houve a criação da branch para o desenvolvimento da feature 002.
    - ambas contém pontos que derivam da master, mas podem ter coisas diferentes, arquivos com conteúdos diferentes.

    - ex2
    # -------/--------------/---------------> master
    #        |              -----------> feat002
    #        ----/----> feat001

    _ Verificar branchs do projeto
    ? git branch

    _ criando uma branch
    ? git branch feat001

    _ Mudar de branch com 
    ? git checkout feat001

    _ Criar e já mudar para a branch
    ? git checkout -b feat002

    _ Deletar branch com 
    ? git branch -d feat001 
    # -d é soft, não força a deleção, só executando se ele estiver totalmente mergeado
    ? git branch -D feat001 
    # -D é hard, força a deleção independente do estado da branch. Estando ela mergeada ou não, tendo ou não alterações...
*/
