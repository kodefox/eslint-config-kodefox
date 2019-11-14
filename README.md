# eslint-config-kodefox

Various configuration commonly used by KodeFox for TypeScript projects.

## Install

```
$ yarn add --dev eslint-config-kodefox
```

## Usage

Add to `eslintConfig.extends` in `package.json`.

### Typescript

```json
{
  "name": "cool-express-server",
  "eslintConfig": {
    "extends": "kodefox"
  }
}
```

### Typescript + React

```json
{
  "name": "awesome-react-website",
  "eslintConfig": {
    "extends": "kodefox/react"
  }
}
```

### Typescript + React Native

```json
{
  "name": "amazing-native-app",
  "eslintConfig": {
    "extends": "kodefox/react-native"
  }
}
```
