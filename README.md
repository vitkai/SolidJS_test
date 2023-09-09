# SolidJS_test

# Initial setup
## WSL
Powershell:
`wsl --install -d Ubuntu`

## nvm
### install
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`

### install node 16
`nvm install 16`

## pnpm
`npm install -g pnpm`

## create project
`pnpm create solid@latest`
fails with:
`-bash: /mnt/c/Users/corvit/AppData/Roaming/npm/pnpm: Permission denied`

Proceeding from windows with 
`npm create solid@latest`

```
Next steps:
  1: cd my-app
  2: npm install
  3: npm run dev -- --open

To close the dev server, hit Ctrl-C
```
### pnpm issue resolved by installation of node 18 instead of 14

`pnpm create solid@latest`

```
Next steps:
  1: cd bare
  2: pnpm install
  3: pnpm run dev --open

To close the dev server, hit Ctrl-C
```