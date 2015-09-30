# Задача к лекции «Введение в Javascript» – «XXL»

:sos: [Как создать Pull Request](https://github.com/urfu-2015/guides/blob/master/how-to-pull-request.md)  
:warning: При создании PullRequest'а не забудьте указать ваши имя и фамилию.   
:warning: Мы очень хотим, чтобы код вы написали сами, а не пользовались внешними библиотеками.

Окунёмся в историю древнего Рима, и попробуем представить, как бы римляне видели
современное время. Для этого нам понадобится скрипт **roman-time.js**
(заготовка лежит рядом):

```js
var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии
```

На вход скрипт всегда принимает два числа через пробел:

- вначале часы `hours` (от 0 до 23),
- затем минуты `minutes` (от 0 до 59).  

Вызов скрипта:

```js
node roman-time.js 15 40
```

Должен выводить время римскими цифрами через «:»
```
XV:XL
```

Если время указано неверно:

```js
node roman-time.js 25 40
```

Скрипт должен выводить «Время указано не верно».

\* Будет нереально круто, если время будет в ASCII графике (дизайн цифр на ваше усмотрение):

```
 _           _  _           _                             _           _  _                            
(_)_       _(_)(_)         (_)                           (_)_       _(_)(_)                           
  (_)_   _(_)  (_)         (_)           _  _              (_)_   _(_)  (_)                           
    (_)_(_)    (_)_       _(_)          (_)(_)               (_)_(_)    (_)                           
     _(_)_       (_)     (_)            (_)(_)                _(_)_     (_)                           
   _(_) (_)_      (_)   (_)              _  _               _(_) (_)_   (_)                           
 _(_)     (_)_     (_)_(_)              (_)(_)            _(_)     (_)_ (_) _  _  _  _                
(_)         (_)      (_)                (_)(_)           (_)         (_)(_)(_)(_)(_)(_)       
```
