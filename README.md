# Neeta-Yoga

This is the repo for Neeta Madar website. The project is built in [VueJS](https://vuejs.org/) and can be accessed at [neetamadahar-yoga.com](https://neetamadahar-yoga.com) or via [neetamadahar.com](https://neetamadahar.com).

## Architecture

The project is served on an S3 bucket and acts as an independent site (yoga site) and as a second-level page to neetamadahar.com.

## Prerequisites

- NodeJS
- NPM

## Install dependencies

```
yarn start
```

## Startup

To startup the project run...

```
yarn start
```

## Deployment

The site will deploy automatically using CircleCI when the master branch is tagged with a version number such as `v0.0.1`.
