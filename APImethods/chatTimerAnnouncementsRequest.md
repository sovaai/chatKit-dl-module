# chatTimerAnnouncementsRequest
Announcement activation by timer

## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` switches to the selected method `chatTimerAnnouncementsRequest` and transmits necessary data to that.   

For example:
```javascript
moduleDispatcher('chatTimerAnnouncementsRequest',{userActive: true})
```

## Typical data
```javascript
ChatTimerAnnouncementsRequestData {   
  userActive: boolean   
}   
```

## Example of data
```javascript
data = {   
  userActive: true,   
}   
```
