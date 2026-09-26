# Repo conventions

## Git commit authorship

Commits must be authored as `Shridhar Pathak <shripathmit@gmail.com>` (the
repo owner), not the default `Claude <noreply@anthropic.com>` identity, so
work shows up on the owner's GitHub contribution graph. Claude may still add
a `Co-Authored-By: Claude ... <noreply@anthropic.com>` trailer in the commit
body, but the primary author/committer identity must be the owner's.

If the environment's global git config defaults to the Claude identity, set
it locally in this repo before committing:

```
git config --local user.name "Shridhar Pathak"
git config --local user.email "shripathmit@gmail.com"
```
