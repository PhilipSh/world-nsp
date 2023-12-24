# Админ панель сайта world-nsp

## Development

1. Start MySql server on desktop
2. Run `npm run build`
3. Run `npm run development`

## Deployment

1. Локальная сборка версии `NODE_ENV=production npm run build`
2. Заливка файлов на сервер
3. Посмотреть список процессов `ps aux | grep -i node`
4. Убить текущий процесс `kill process_id`
5. Запустить приложение `nohup npm run start &`
