# ModerX
 AI administrator for Supabase where used postgress
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

Выполните команду из терминала в корне проекта:
```bash
	sudo chmod +x index.js
```
Чтобы сделать файл исполняемым.

Теперь запустите файл `index.js` как программу из терминала
```bash
	./index.js
```

## Запуск с помощью node *

```bash
	node --no-warnings --env-file=.env ./index.js
``` 

# Настройка и пользование

## Настройка ENV

Создай файл `.env` в корне проекта и укажите три строки:

- SUPABASE_URL
- SUPABASE_ANON_KEY
- POSTGRESS_URL

### POSTGRESS_URL

### SUPABASE_ANON_KEY

### POSTGRESS_URL