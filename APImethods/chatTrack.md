# chatTrack
## Description
Метод, отвечающий за...

## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*chatEvent*) и передает туда необходимые данные.   
For example:
```
moduleDispatcher('chatTrack',{ 
  action: 'click',   
  args: {   
    id: '1',   
    url: 'nano.com',   
    text: 'helloWorld'   
  }
})   
```

## Typical data
```
ChatTrackData {   
  action: string   
  args: {   
    id: string   
    url: string   
    text: string   
  }   
}   
```

## Example of data
```
data = {   
  action: 'click',   
  args: {   
    id: '1',   
    url: 'nano.com',   
    text: 'helloWorld'   
  }   
}    
```

### options of actions
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
