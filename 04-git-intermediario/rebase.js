/*
    _ rebase nada mais é que remontar a base
    _ é similar com o merge, mas a maior diferença deles é que o merge junta um ramo a outro, adicionando ao HEAD

    # ex:
    # --------/--------master
    #         |---------feat001

    ? git merge feat001
    _ resultado

    # --------/--------|---------master

    -  / fosse onde era a bifurcação
    - | fosse o ponto onde eram os commits da branch feat001

    _ Todos os commits de feat001 foram colocados no ponto de topo de master
    
    @ Já com o rebase se tem:

    ? git rebase feat001
    _ resultado

    # --------/|-----------------master
    #         

    _ no rebase não, ele reencaixa os commits. é como se:
    -  / fosse onde era a bifurcação
    - |----------|  fosse todos os commits da branch feat001

    _ Todos os commits de feat001 foram de acordo com seus tempos dentro da linha do tempo
    */
