# chatRequest
Sending user messages

## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` switches to the selected method `chatRequest` and transmits necessary data to that.   

For example:
```javascript
moduleDispatcher('chatRequest',{text:'Hello World!!'})
```

## Typical data
```javascript
ChatRequestData {   
  text: string   
  context?: RandomContext   
}   
```

## Example of data
```javascript
data = {   
  text: 'Hello World!!'   
}   
```
