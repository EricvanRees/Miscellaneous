Covers:
1) Git init and hidden folder
2) Git commits and logs
3) Git internal working and commits

# Git and Github are different

Git = software
Github = service

# Version Control System
Track files for changes

# Learning Path
* Get the basics
* Use it daily
* Face the problem -> solve the problem

# Repo
Git on system vs tracking (repo)

# Git commands
git --version - shows current version

git status - shows which files are staged, ready to commit

git init (one time per project) - creates local new git repo

.git -> a hidden folder to keep history of all files and subfolders

=> commit (= a check point)
write, add, commit

# Different stops for code from local repo to Github repo
working dir -> git add -> staging area -> git commit -> repo ->
git push -> github


# stage a file
  -> git init (create file or files)
  git add file1 file2 || git add .
  git status

# commit a file
  git commit -m "a good descriptive message"
  git status
    repeat 2 - 3 times
    git log (log of commimts with commit hash)

# concept of atomic commits
  => keep commits centric to one feature, one component, one fix. Focus on one thing.
  => Present or past message
    - Depends {present tense, imperative}
    - give order to code base
    - don't care
    git config --global core.edit "code --wait" (changes default editor to VSCode instead of VIM)

    git log --oneline

# .gitignore file
      -> Don't want to track some files
      -> node modules, API keys, secret
      -> get template online (.gitignore generator), patterns can be tricky. 

# Commit behind the scene

hash            <= hash   <= hash
parent -> null  parent    parent
info            info      info

