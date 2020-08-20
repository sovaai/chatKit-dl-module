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
| 'ready'                  | chat is ready        |
| 'inactive'               | user is active       |
| 'rate'                   | rate message         |
| 'notification'           | send notification    |
| 'context'                | change chat context  |
| 'click'                  | mouse click          |
| 'mouse'                  | move mouse           |
| 'operatorStatus'         | operator status      |
| 'chatState'              | chat state           |
| 'geolocationTimeout'     | geolocation time out |
| 'geolocationDenied'      | geolocation denied   |

