### Vue.js <flash> component
### Description
Simple <flash> Vue.js componentExample <flash> component included.
### Version 0.0.2 Original project setup
### Change log
0.0.2 Original project setup   
### Installation
Run
```
npm install mw-flash --save
```
### Usage 
Import
```javascript
import Flash from 'mw-flash'
Vue.use(Flash)
```
Use component
```xml
<flash message="Some text"></flash>
<flash :message="{ message: 'Some text', level: 'danger'}"></flash>
```   
Avalable level flags are: `['success', 'info', 'warning', 'danger']`.   
To make `flash` function available globally turn `events` flag  `on`  
```xml
<flash message="Some text" events="on"></flash>
```
... and define global `events` bus object
```javascript
window.events = new Vue(); 

window.flash = function(message) {
	window.events.$emit('flash', message);
}
```
Use delay property to change message desplay time, default value = 3000
```xml
<flash message="Some text" delay="5000"></flash>
``` 

