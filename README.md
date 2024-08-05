# ModerX

## О проекте

ModerX это ИИ помощник который ускорит работу с базой данных Sypabase он отправляет запрос с помощью SupabaseAPI и PostgeresSQL (От Supabase) исходя от Вашего запроса к ИИ, это может быть как создание таблицы, получение всех таблиц списком, создание событий и многое другое. Конечно все перечисленное это самая простая часть что может делать ИИ, она также сможет перфразировать столбцы, предупредить Вас о изменении каких либо столбцов, создавать коментарии к столбца и все в этом роде.

### Бета тест

Мы работает над развитием проекта и он находится на стадии тестирования, могут появляться ошибки и может быть урезан функционал, но мы стремимся к совершенству, только Ваша поддержка может помочь нам!

# Как запустить

Установите зависимости:
```bash
yarn install
```
Или
```bash
npm install
```

## Запуск как программы

Выполните команду из терминала в корне проекта чтобы сделать файл исполняемым:
```bash
sudo chmod +x index.js
```

Теперь запустите файл `index.js` как программу из терминала
```bash
./index.js
```

## Запуск с помощью node *

```bash
node --no-warnings --env-file=.env ./index.js
``` 

# Настройка

## Настройка ENV

Создай файл `.env` в корне проекта и укажите три строки:

- SUPABASE_URL
- SUPABASE_ANON_KEY
- POSTGRESS_URL

![alt text](https://github.com/BEISER901/ModerX/blob/main/.drawable/img_1.png?raw=true)

### POSTGRESS_URL

Чтобы получить `POSTGRESS_URL` зайдите в Supabase Dashboard, там зайдите в Ваш проект и справа сверху нажмите кнопку "Connect".

![alt text](https://github.com/BEISER901/ModerX/blob/main/.drawable/img_2.png?raw=true)

![alt text](https://github.com/BEISER901/ModerX/blob/main/.drawable/img_3.png?raw=true)

postgresql://postgres.\*:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres

За место [YOUR-PASSWORD] вставляете пароль от проекта.