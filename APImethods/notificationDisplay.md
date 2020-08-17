# notificationDisplay
Displaying a specific notification

## Call of method
`moduleDispatcher` - method of event management.   
`moduleDispatcher` switches to the selected method `notificationDisplay` and transmits necessary data to that.   

For example:
```javascript
moduleDispatcher('notificationDisplay',{ messageId: 12})
```

## Typical data
```javascript
NotificationDisplayData {   
  messageId: number   
} 
```

## Example of data
```javascript
data = {   
  messageId: 12,   
}
```
