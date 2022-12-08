# ddev-typo3-mix-svelte demo

LaravelMix + Svelte + typo3 🧡

Created by [@bokunomaxi](https://github.com/bokunomaxi) and [@mandrasch](https://github.com/mandrasch).

Status: Work in Progress. 🧑‍🔧

![Screenshot block with svelte input binding](.gh-screenshots/teaser.png?raw=true)

Demo repo for Svelte usage in typo3 v11.5 with help of ...

- [DDEV](https://github.com/drud/ddev)
- [ddev-browsersync](https://github.com/drud/ddev-browsersync)
- [LaravelMix](https://laravel-mix.com/)
- [laravel-mix-svelte](https://laravel-mix.com/extensions/svelte)

Heavily inspired by awesome work of [@fgeierst](https://github.com/fgeierst?tab=repositories).

## Local development (dev)

- `ddev npm run dev` (watches for changes)
- `ddev launch`

You should see `BrowserSync connected` in the upper right corner while developing.

## Simulate production site (live) locally

Run a vite build for production:

```bash
ddev npm run build
```

Switch applicationContext to production in `.env`:

```bash
# Switch easily between Development/Local and Production/Live
# TYPO3_CONTEXT="Development/Local"
TYPO3_CONTEXT="Production/Live"
```

## Local (first time) setup after git clone:

This needs to be setup once:

```
ddev start

# Install composer and NodeJS packages
ddev composer install && ddev npm install

# Setup .env file
ddev exec 'cp .env.example .env' && \

# Import database from demo db snapshot
# (Otherwise you could use: 'ddev exec touch public/FIRST_INSTALL')
ddev snapshot restore --latest

ddev launch
```

Login via https://ddev-typo3-mix-svelte.ddev.site/typo3 using these credentials:

Demo user:  `admin`<br>
Demo password:  `password`

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
- Added root site, added template for root site, include svelte-demo

## Feedback

Happy to receive feedback or suggestions!

## Other resources

Looking for vite? https://github.com/mandrasch/ddev-typo3-vite-svelte <br>
Looking for WordPress? https://github.com/mandrasch/ddev-wp-acf-blocks-svelte

See more experiments on https://my-ddev-lab.mandrasch.eu/.

## TODOs

- [ ] Add gitpod support? (https://github.com/fgeierst/typo3-vite-demo)
- [ ] Add support for `<style lang="scss">`
