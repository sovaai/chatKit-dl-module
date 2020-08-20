# chatTrack
Show specific text when you hover over a link

## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` switches to the selected method `chatTrack` and transmits necessary data to that.   

For example:
```javascript
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
```javascript
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
```javascript
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
