# chatTrack

## Description


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
   
## Example of call of method
```
 moduleDispatcher('chatTrack',{ action: 'click',   
  args: {   
    id: '1',   
    url: 'nano.com',   
    text: 'helloWorld'   
    }})   
```
