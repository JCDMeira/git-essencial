/*
    _ após criar um repositório no gitHub é preciso conectar o seu diretório local a remoto.
    ? git remote add origin caminho_rep_remoto

    _ no primeiro push é preciso indicar a origem. (qualquer dos dois comandos, por extenso ou usando flag)
    ? git push --set-upstrean origin master
    ? git push -u origin master

    ! na primeira vez que enviar um push será pedido o usuário e senha, caso seja com repositório conectado via link

    _ Checando se tem uma origem remota 
    ? git remote -v

    _salvando usuário e senha com (caso fique pedindo usuário e senha a cada push)
    ? git config credential.helper store
*/
