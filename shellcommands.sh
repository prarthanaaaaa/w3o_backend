
Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~
$ pwd
/c/Users/Prarthana Hegde

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~
$ cd ..

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 /c/Users
$ cd ..

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 /c
$ cd ..

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 /
$ cd ~/Desktop

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop
$ mkdir w3o_backend

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop
$ cd w3o_backend

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend
$ git init
Initialized empty Git repository in C:/Users/Prarthana Hegde/Desktop/w3o_backend/.git/

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (master)
$ cd ..

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop
$ git clone https://github.com/prarthanaaaaa/w3o_backend
Cloning into 'w3o_backend'...
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop
$ git add Prarthana.txt
fatal: not a git repository (or any of the parent directories): .git

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop
$ cd w3o_backend

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git add Prarthana.txt

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   Prarthana.txt


Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git commit -m "adding example file"
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'Prarthana Hegde@LAPTOP-3BLN3LC2.(none)')

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git config --global user.email "prarthanahegde058@gmail.com"

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git config --global user.name "Prarthana"

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git commit -m "adding example file"
[main 7c5a2d9] adding example file
 1 file changed, 1 insertion(+)
 create mode 100644 Prarthana.txt

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 296 bytes | 296.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/prarthanaaaaa/w3o_backend
   7c58937..7c5a2d9  main -> main

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git checkout -b "task1"
Switched to a new branch 'task1'

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (task1)
$ git add "index.html"

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (task1)
$ git commit -m "adding index file"
[task1 64e2ccb] adding index file
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (task1)
$ git push origin task1
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 467 bytes | 467.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'task1' on GitHub by visiting:
remote:      https://github.com/prarthanaaaaa/w3o_backend/pull/new/task1
remote:
To https://github.com/prarthanaaaaa/w3o_backend
 * [new branch]      task1 -> task1

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (task1)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git pull origin main
From https://github.com/prarthanaaaaa/w3o_backend
 * branch            main       -> FETCH_HEAD
Already up to date.

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git checkout task1
Switched to branch 'task1'

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (task1)
$ git merge main
Already up to date.

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (task1)
$ git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git add .

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$ git commit -m "merging"
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

Prarthana Hegde@LAPTOP-3BLN3LC2 MINGW64 ~/Desktop/w3o_backend (main)
$
