# example-sass-and-ts

> Testing components written in TypeScript with Sass imports

![Sass test](images/sass.png)

To run, need to install link first

```
npm install
```

Note that Node Sass is a binary dependency, thus we need to run it using the same system version of Node as we installed. See [cypress.json](cypress.json) file.

```json
{
  "nodeVersion": "system"
}
```

To bundle code using the same [webpack.config.js](webpack.config.js) file, we point at it from [cypress/plugins/index.js](cypress/plugins/index.js) file.
