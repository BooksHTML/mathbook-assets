# mathbook-assets
Styles and scripts for the PreTeXt platform.

## Getting Started
You've just cloned the repo. What now?

1.  Install [Node.js](https://nodejs.org/en/), if it is not already installed.
    It can be useful to use the [Node Version Manager (NVM)](https://github.com/creationix/nvm)
    so that you can use multiple versions of Node on the same machine.

2.  Install dependencies:
    ```sh
    $ npm install
    ```

3.  Run the boostrap script from the repo's root directory:
    ```sh
    $ ./scripts/bootstrap.sh
    ```
    This performs local repository setup like initializing githooks.

## Deploying Assets
To deploy the current state of the repository from the repo's rootdirectory:
```sh
$ npm run production
```

## Contributing
Please see the [Contributors Guidelines](CONTRIBUTING.md) before contributing to this project.
