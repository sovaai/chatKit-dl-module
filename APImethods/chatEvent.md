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
   
## Call of method
moduleDispatcher - метод управление ивентами. В moduleDispatcher приходит имя ивента и необходимые данные; происходит переключение на этот метод и передача данных. 
For example:
```
moduleDispatcher('chatEvent',{eventName: 'ready'})
```
