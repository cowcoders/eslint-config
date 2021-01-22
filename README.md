<div align="center">
    <h1>@cowcoders/eslint-config</h1>
</div>

<p>ESLint rules for CowCoders 🐄</p>

---

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- END doctoc -->

- [Installation](#installation)
- [Usage](#usage)
  - [Extra configs](#extra-configs)
    - [Typescript](#typescript)
    - [React](#react)
    - [React-Native](#react-native)
    - [Vue](#vue)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

- [Installation](#installation)
- [Usage](#usage)
    - [Extra configs](#extra-configs)
        - [Typescript](#typescript)
        - [React](#react)
- [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

To install this package only need to execute in your project

```shell script
npm install --save-dev @cowcoders/eslint-config
```

Or if you prefer yarn...

```shell script
yarn add -D @cowcoders/eslint-config
```

## Usage

To usage this eslint configuration you only need to add it in your eslintrc file like this:

```javascript
module.exports = {
  extends: '@cowcoders/eslint-config'
}
```

### Extra configs

This repo has a few more configurations if you want used it, you only need to change the extends configuration:

#### Typescript

ESLint config for TS projects:

```javascript
module.exports = {
  extends: '@cowcoders/eslint-config/ts'
}
```

#### React

ESLint config for React projects:

```javascript
module.exports = {
  extends: '@cowcoders/eslint-config/react'
}
```

#### React-Native

ESLint config for React-Native projects:

```javascript
module.exports = {
  extends: '@cowcoders/eslint-config/react-native'
}
```

#### Vue

ESLint config for VueJS projects:

```javascript
module.exports = {
  extends: '@cowcoders/eslint-config/vue'
}
```

## LICENSE

MIT
