# chatEvent
## Description
Метод, отвечающий за...
   
## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*chatEvent*) и передает туда необходимые данные. 
For example:
```
moduleDispatcher('chatEvent',{eventName: 'ready'})
```

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
