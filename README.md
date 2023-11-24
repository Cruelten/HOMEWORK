# Сергей Пищенков
## Homework for Netology

### MongoDB + проект
Добавлена папка lirary-mongo
В этой папке работа приложения по роутеру /api/books
Добавляем, удаляем, изменяем данные в базе данных.

### MongoDB
db.collection('books').insertOne(
	{
	  title: "Гаудот Полумертвый",
	  description: "Современный ужастик",
	  authors: "Чарльз Эвенстон"
	}
)

db.collection('books').insertMany( [
	{
	  title: "Война и Мир",
	  description: "Великая книга Льва Толстого",
	  authors: "Лев Толстой"
	},
	{
	  title: "Евгений Онегин",
	  description: "Шедевр русской литературы",
	  authors: "Александр Пушкин"
	}	
] )

db.collection('books').find(
	{title: "Война и Мир"}
)

db.collection('books').updateOne(
  { _id: '546557544757768665' },
  {
    $set: { description: 'Новая книга в нашей библиотеке', authors: 'Лермонтов' }
  }
)

### Docker
В папке Docker лежит текстовый файл, в котором изложены все мои действия с докером (работа ведется на Mac os)

### В папке Library - наш проект по библиотеке. 
UPDATE: 03.11.2023 - Внес изменения в соответствии с новым домашним заданием. Теперь мы можем загружаь файлы у книг. изменять данные, добавлять новые. Скачивать книги. Задание просто супер!
UPDATE: 29.10.2023 - добавлена дата к названию файлов, чтобы уникализировать имена файлов. Также добавлен вывод файла на скачивание с помощью res.download
На момент 28.10.2023 года в папке Library выполнено домашнее задание к занятию 2.2. Middleware.


### В папке 005-http - домашнее задание.
Программа запускается по команде pogoda и вводится название города. Получаем текущую температуру в городе и скорость ветра. 

### В папке 004-stream находится домашнее задание.
Задание запускается по команде orelreshka, если отсутствуют какие-либо дополнительные параметры, то все данные записываются в log.json.<br>
Если же к команде запуска скрипта добавить аргумент с названием файла, без разрешения файла, то такой файл будет создан и данные будут записываться в него.
Вторая часть программы, это если мы добавляем к команде аргуменрт -r. В этом случае программа выдает нам результаты. Если больше никаких параметров не задано, то выдает данные из log.json
Если же после параметров идет полное наименование файла, то данные берутся из этого файла.


### Вы можеет увидеть здесь папку 002-console. В ней первые два задания домашней работы.