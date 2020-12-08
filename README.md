npm install -g typescript ts-node
###To compile single file
tsc index.ts

###Install bundle 
sudo npm install -g parcel-bundler
parcel index.html

###To compile the whole dir
tsc --init
and config tsconfig.json
tsc

###To compile and nodemon
npm install nodemon concurrently
see sort/package.json > script