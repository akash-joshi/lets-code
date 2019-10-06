# Node-basic

## Intro

The purpose of this module is to show a basic example of a node.js app using express.

## Instaling node and npm

###  Linux
- **Add Node.js PPA**. It is recommended use LTS release if you are beginer.

    ```$ curl -sL curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -```
- **Install Node.js**. This will install _Node.js_ and the package manager _npm_
    ```$ sudo apt-get install nodejs```
- **Check Node.js and npm versions**.
    First, Node.js:
    ```$ node -v```

    it returns something such as this: 

    ```v10.x.x```
    
    Then, npm:
    
    ```$ npm -v```

    its return
    
    ```6.x.x```

    It is ok!

### Windows
- **Install Node.js**. Download the LTS version .exe from the [site](https://nodejs.org/en/) and follow the intructions. You check the versions, also. Use the same commands above.

## Instaling dependencies
Now it is necesary to install de dependencies of the project. It this case, it will install the _node_modules_ folder and _express_ a very light web framework. 
You must go to the **same folder** where it is ```package.json``` and execute this command (it is the same for all OS):

```npm install```

## Run app
Now you are ready to run the app. Use the comand

   ```node index.js```

The console will show the message "Server is listening". Then, you can open the app in your fauvorite browser writting ```localhost:3000``` in the address bar. There is available another address ```localhost:3000/page2``` in order to test the performance of the app.

Enjoy it!
