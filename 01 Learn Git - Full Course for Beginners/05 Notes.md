# Github discussion
Git is a software and Github is a service to host git online.

* Github -> collaboration + backup + open source
  Gitlab or Bitbucket
  git commands:

  git clone [url]
  git config --global user.name 
  git config --global user.email
  
  git remote -v // empty result means there's no remote remote repo setup
  git remote add [local repo name + repo url] // connect local repo to remote repo
  git remote add origin https.//github.com/username/repo
  git remote rename [oldname] [newname] // instead of naming it origin, you can change it here
  git remote remove name
  
  git push [remote] [branch]
  git push origin main
  git push [remote] localbranch : remotebranch

  git push -u origin main
  - "-u" sets up an upstream that allows you to run future command "git push" and push code directly to github

* Setup SSH keys to connect with github, which uses SSH to allow you to push code. Password-based code push is not allowed.

* Check instruction for your OS on github website, which is the best and updated resource.

* When you clone a repo, you get just main branch connected, the rest of the remote branches are not configured.
  
  git switch [branch name] // connects remote branch to local

  git fetch = get info but don't add it into my work 
  git pull = git fetch + git merge
  = git info from remote and add it into my work

  git pull origin main (changes will merged to main)

