# Akash Console Augmented

Akash Console Augmented is an improved release of akash console. A user-friendly tool for buy computing resources with many coins **(like ETHER, MATIC, BNB, TRX ...)** as the exchange pair &nbsp;-- / AKT is available on [SWAPSPACE](https://swapspace.co/) without leave your favorite wallet like **Metamask, Coinwallet ...**  . 

<p align="center">
  <img src="_doc/../_docs/akash-console-augmented.svg" width="700">
</p>

## Demo
Try a running instance at https://ec2-54-183-202-174.us-west-1.compute.amazonaws.com

## Environment variables
Add your [SWAPSPACE](https://swapspace.co/) api key to  .env  file
```
REACT_APP_SWAPSPACE_API_KEY = "..."
```




## Running it locally

Please ensure you have the below set of dependencies installed on your workstation:

* node 18+
* yarn (1.22.19)
* concurrently (7.2.2)
* craco (6.4.4)

You can install dependencies by running
```
npm install -g yarn concurrently craco
```
Then checkout, build and run Console
```
git clone https://github.com/jeanlouisboua/akash-console-augmented.git
cd console-0.1.304
yarn install
yarn dev
```


