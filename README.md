#Project coding style guides  should be enforced using eslint.

The following article explains how to setup sublime to use eslint.
https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.ij5cv3jc1
http://eslint.org/

This plugin allows for the defining of React specific rules.
https://github.com/yannickcr/eslint-plugin-rea     ct

##Enforcing code style
https://github.com/sindresorhus/xo

Recommended Theme
https://packagecontrol.io/packages/Material%20Theme

##Setting Up Sublime

Using Emmet

Great setup that changes the ‘class’ into ‘className’
https://gist.github.com/max-mykhailenko/41d0c3991d92f38dcbc6

##Project Template Examples

https://github.com/knowbody/react-redux-boilerplate.git

##Local NPM
http://172.17.101.192:4873/
It would be good to use the local NPM repository.

npm login --registry=http://172.17.101.192:4873/ —scope=cdlo

##NPM Setup
We want our NPM to import a specific repository tag. 1.0.1 etc

Example .npmrc
prefix=/Users/quigleya/.node
init-author-name=Alan Quigley
init-author-email=alan.quigley@hmhco.com
init-license=NONE
save-exact=true

##Commitizen 

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

https://www.npmjs.com/package/commitizen

When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time. No more waiting until later for a git commit hook to run and reject your commit (though that can still be helpful). No more digging through CONTRIBUTING.md to find what the preferred format is. Get instant feedback on your commit message formatting and be prompted for required fields.
```
npm install -g commitizen
commitizen init cz-conventional-changelog --save --save-exact
```
