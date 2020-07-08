# setInfo

## Description
Получение информации об ивентах

## Call of method
**moduleDispatcher** - метод управление ивентами.   
moduleDispatcher осуществляет переключение на выбранный метод (*setInfo*) и передает туда необходимые данные.   
For example:
```
moduleDispatcher('setInfo',{cuid: '123446', events: ['1234', '1323']})
```

## Typical data
```
SetInfoData {   
  cuid: string   
  events: string[]   
}
```

## Example of data
```
data = {   
  cuid: '123446',   
  events: ['1234', '1323']  
}
```
