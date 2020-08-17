# chatEvent
Chat events
   
## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` switches to the selected method `chatEvent` and transmits necessary data to that. 

For example:
```javascript
moduleDispatcher('chatEvent',{eventName: 'ready'})
```

## Typical data
```javascript
ChatEventData {   
  eventName:   
  DialogLanguageEventsNames   
  context?: RandomContext   
}   
```

## Example of data
```javascript
data = {   
  eventName: 'ready',   
} 
```

### options of events
| event                    |                      |
|--------------------------|----------------------| 
| 'ready'                  |                      |
| 'inactive'               |                      |
| 'rate'                   |                      |
| 'notification'           |                      |
| 'context'                |                      |
| 'click'                  |                      |
| 'mouse'                  |                      |
| 'cardReady'              |                      |
| 'operatorStatus'         |                      |
| 'chatState'              |                      |
| 'geolocationTimeout'     |                      |
| 'geolocationDenied'      |                      |

