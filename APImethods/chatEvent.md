# chatEvent

## Description


## Typical data
```
ChatEventData {   
  eventName:   
  DialogLanguageEventsNames   
  context?: RandomContext   
}   
```

## Example of data
```
data = {   
  eventName: 'ready',   
} 
   ```
   
## Example of call of method
```
moduleDispatcher('chatEvent',{eventName: 'ready'})
```

### options of events
* 'ready'
* 'inactive'
* 'rate'
* 'notification'
* 'context'
* 'click'
* 'mouse'
* 'cardReady'
* 'operatorStatus'
* 'chatState'
* 'geolocationTimeout'
* 'geolocationDenied'
