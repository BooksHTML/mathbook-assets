# mathbook-assets
Styles and scripts for the PreTeXt platform.

## Getting Started
You've just cloned the repo. What now?

1.  Install [Node.js](https://nodejs.org/en/), if it is not already installed.
    It can be useful to use the [Node Version Manager (NVM)](https://github.com/creationix/nvm)
    so that you can use multiple versions of Node on the same machine.

2.  Install dependencies:
    ```sh
    $ npm run submodules
    $ npm install
    ```

3.  Run the boostrap script from the repo's root directory:
    ```sh
    $ ./scripts/bootstrap.sh
    ```
    This performs local repository setup like initializing githooks.

## Deploying Assets
To deploy production ready versions of the assets, navigate to the project's root directory and run:
```sh
$ npm run production
```
To deploy expanded versions of the assets, i.e. ones that have not been minified, navigate to the project's root directory and run:
```sh
$ npm run expanded
```
While actively editing asset source files, you can run the following command (from the root directory):
```sh
$ npm run editing
```
This will monitor the source files and recompile affected assets so that the impact of edits can be seen immediately.

## Contributing
Please see the [Contributors Guidelines](CONTRIBUTING.md) before contributing to this project.
