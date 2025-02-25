covers:
1) Git merge
2) Git conflits

# Branches
Branches are like an alternative timeline. You are always one some branch.

# Head -> master
Head points to where a branch is currently at.

# How to create a new branch?
first, start on master and check branch with:
  git branch

Then, create a new branch using:
  git branch [branch name]

# How to move to a different branch?
  git checkout [different branch name]

# Workflow so far:
  git branch 
  git branch bugfix
  git switch bugfix
  git log
  git switch master
  git switch -c [branch name] (create a branch and move there at once)
  git checkout -b [branch name] - same as above

  => comit before switching to another branch
  => go to .git folder & checkout head file

