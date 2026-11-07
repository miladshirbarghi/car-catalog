# -----------------------------------------------------------------------------
# Node
# -----------------------------------------------------------------------------


install:
    pnpm install

dev:
    pnpm dev

build:
    pnpm build

lint:
    pnpm lint

format-check:
    pnpm format:check

test:
    pnpm test

check:
    pnpm check

preview:
    pnpm preview

# -----------------------------------------------------------------------------
# Git
# -----------------------------------------------------------------------------

add:
    git add -A

stash:
    git stash -u

apply:
    git stash apply

fetch:
    git fetch --all --prune

pull:
    git pull --rebase origin "$(git branch --show-current)"

push:
    git push origin "$(git branch --show-current)"

commit message:
    git commit -m "{{message}}"

sync message:
    git add -A
    git commit -m "{{message}}"
    git push origin "$(git branch --show-current)"
