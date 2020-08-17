# setInfo
Get information about events

## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` switches to the selected method `setInfo` and transmits necessary data to that.   

For example:  

```javascript
moduleDispatcher('setInfo',{cuid: '123446', events: ['1234', '1323']})
```

## Typical data
```javascript
SetInfoData {   
  cuid: string   
  events: string[]   
}
```

## Example of data
```javascript
data = {   
  cuid: '123446',   
  events: ['1234', '1323']  
}
```
