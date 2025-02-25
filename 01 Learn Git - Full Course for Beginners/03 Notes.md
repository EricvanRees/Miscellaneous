covers:
1) Git Diff
2) stashing

# Git Diff
Git diff is an informative command to compare working with staging area files.

# How to read diff
a -> file1  & b-> file2 (same file over time)
---- indicates changes in file1
++++ indicates changeds in file2
changes in lines and little preview of it

example:

  git diff --staged - compares staged file with the same one in working directory.

  git diff branchOne..branchTwo

# Git stash 
Git stash is temporary stash where you can keep your code, move around, and bring it back to another branch.
1) Create a repo, work, and commit on main branch.
2) Switch to another branch and work.
3) Conflicting changes do not allow to switch branch without commits.

git stash (you switch branch)
git stash pop (bring back those changes)
git stash apply (apply changes & keeps them in stash - optional)
git stash list - lists all stashes

More commands:
git checkout <hash> - (detach head) : new branch
git switch main (re-attach head) - move forward after moving back in time
git reflog - moves your head forward where you were previously
git checkout HEAD~2 (look back 2 commit prior)
git restore filename - get back to last commit version

[Git switch vs Git checkout link](https://kodekloud.com/blog/git-switch-vs-checkout/) 
