/* 
    - Adiciona credenciais de nome e e-mail de forma global (para o computador).
    ? git config --global user.name "Fulano de Tal"
    ? git config --global user.email fulanodetal@exemplo.br

    - Pode não usar o flag global se for para configurações apenas local (no projeto em questão)
    ? git config  user.name "Fulano de Tal"
    ? git config  user.email fulanodetal@exemplo.br

    - Mostra os estados atuais dos arquivos do projeto
    ? git status

    - Adicionar arquivos para o git -> tornar ele monitorado
    ? git add [caminho do arquivo ou diretório] (adiciona o arquivo ou diretório)
    ? git add . (todos arquivos novos e diretórios, do diretório atual em diante)
    ? git add --all ou -A (todos arquivos, da raiz em diante)
    ? git add -u (Coloca no Stage apenas arquivos modificados e removidos, não adicionando os novos)
    ? git add * (todos arquivos novos e diretórios, do repositório em diante. Mas não conta os arquivos deletados)
*/
