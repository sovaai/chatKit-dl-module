# chatRate
Rating of the all dialogue

## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` witches to the selected method `chatRate` and transmits necessary data to that.   

For example:
```javascript
moduleDispatcher('chatRate',{rating: 5})   
```

## Typical data
```javascript
ChatRateData {   
  rating: number   
}   
```

## Example of data
```javascript
data = {   
  rating: 5,   
}   
```
