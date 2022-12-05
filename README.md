# ddev-typo3-mix-svelte demo

Demo repo for Svelte usage in typo3 with help of ...

- [DDEV](https://github.com/drud/ddev)
- [ddev-browsersync](https://github.com/drud/ddev-browsersync)
- [LaravelMix](https://laravel-mix.com/)
- [laravel-mix-svelte](https://laravel-mix.com/extensions/svelte)

Created by [@bokunomaxi](https://github.com/bokunomaxi) and [@mandrasch](https://github.com/mandrasch).

Heavily inspired by work of [@fgeierst](https://gitgub.com/fgeierst), e.g. [Island Architecture gist](https://gist.github.com/fgeierst/4a36e80e9086ce5312e1c99a069bd41d), [fgeierst/typo3-vite-demo](https://github.com/fgeierst/typo3-vite-demo), [fgeierst/typo3-11-tailwind-demo](https://github.com/fgeierst/typo3-11-tailwind-demo).


## Local development

- `ddev npm run dev` (watches for changes)
- `ddev launch`

You should see `BrowserSync connected in the upper right corner` while developing.

## Local setup after git clone:

This needs to be setup once:

```
ddev start
ddev composer install
#TODO: this?
ddev exec touch public/FIRST_INSTALL
ddev launch
# Install typo3, then:
ddev npm install
```



## How was this created?

- Followed steps of [DDEV typo3 quickstart docs](https://ddev.readthedocs.io/en/latest/users/quickstart/#typo3)
- `ddev npm init -y`
- `ddev npm install laravel-mix --save-dev`
- `ddev npm i laravel-mix-svelte --save-dev`
- Added scripts section to package.json
- Create `webpack.mix.js`
- Install support for browsersync via `ddev get drud/ddev-browsersync`
- `ddev npm install --save svelte-confetti`

- Created extension `svelte-demo` for typo3


## Feedback

Happy to receive feedback or suggestions!

## TODOs

- [ ] add https://github.com/drud/ddev-browsersync (HTTPS version)
- [ ] add JS code snippet browsersync https://gist.github.com/mandrasch/43c2720da7f7672069a10acb27b3beb3
- [ ] How to add example / simple theme / svelte component?
- [ ] Create vite demo (https://github.com/fgeierst/typo3-vite-demo) in another repo
- [ ] Add gitpod support
- [ ] Provide demo site via hetzner + ploi.io
