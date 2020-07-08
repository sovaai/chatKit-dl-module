# chatRate
## Description
Проставление рейтинга всему диалогу

## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*chatRate*) и передает туда необходимые данные.   
For example:
```
moduleDispatcher('chatRate',{rating: 5})   
```

## Typical data
```
ChatRateData {   
  rating: number   
}   
```

## Example of data
```
data = {   
  rating: 5,   
}   
```
