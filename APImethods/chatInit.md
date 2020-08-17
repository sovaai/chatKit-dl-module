# chatInit
Dialog Initialization

## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` switches to the selected method `chatInit` and transmits necessary data to that.   

For example:
```javascript
moduleDispatcher('chatInit',{clientConfig:{env_site_lang: 'ru'}})
```

## Typical data
```javascript
ChatInitData {  
  clientConfig: RandomContext   
}
```

## Example of data
```javascript
data = {   
  clientConfig: {   
    env_site_lang: 'ru'   
  }   
}   
```
