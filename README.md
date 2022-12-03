# ddev-typo3-mix-svelte demo

Demo repo for Svelte usage in typo3 with help of ...

- [DDEV](https://github.com/drud/ddev)
- [ddev-browsersync](https://github.com/drud/ddev-browsersync)
- [LaravelMix](https://laravel-mix.com/)
- [laravel-mix-svelte](https://laravel-mix.com/extensions/svelte)

Created by [@maketterer](https://github.com/maketterer) and [@mandrasch](https://github.com/mandrasch).

Heavily inspired by work of [@fgeierst](https://gitgub.com/fgeierst), e.g. [fgeierst/typo3-vite-demo](https://github.com/fgeierst/typo3-vite-demo) and [fgeierst/typo3-11-tailwind-demo](https://github.com/fgeierst/typo3-11-tailwind-demo).

## Local setup after git clone:

```
ddev start
ddev composer install
#TODO: this?
ddev exec touch public/FIRST_INSTALL
ddev launch
# Install typo3, then:

ddev npm install
```

## Local development

- `ddev npm run dev`

## How was this created?

- Followed https://ddev.readthedocs.io/en/latest/users/quickstart/#typo3
- `ddev npm init -y`
- `ddev npm install laravel-mix --save-dev`
- `ddev npm i laravel-mix-svelte --save-dev`
- Added scripts to package.json
- Create `webpack.mix.js`

TODO:
- [ ] add https://github.com/drud/ddev-browsersync (HTTPS version)
- [ ] add JS code snippet browsersync https://gist.github.com/mandrasch/43c2720da7f7672069a10acb27b3beb3
- [ ] How to add example / simple theme / svelte component?
- [ ] Create vite demo (https://github.com/fgeierst/typo3-vite-demo)
