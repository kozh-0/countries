# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).


# TODO:
[X] Переключение светлой/темной темы  
[X] Получение списка стран и вывод в UI  
[X] Фильтрация стран по списку  
[X] Фильтрация стран по региону  
[X] Получение расширенной информации о выбранной стране  
[X] Получение списка соседей  


В проекте Countries подгружается база стран с restcountries.com  API, при клике на страну открывается подробная информация, на этой странице можно увидеть граничащие страны и перейти на них. На этой же странице подключен дополнительный API weather.visualcrossing.com, который подгружает метео и гео данные, запрос через замыкание ссылки, при возвращении на главную страницу определенные данные сбрасываются для оптимизации рендера и Redux хранилища. Меняется светлая/темная тема, страны ищутся и сортируются по региону.  

Используется Routing 6 версии, установлен redux-persist для хранения данных в LocalStorage (Поместил только информацию о переключении светлой/темной темы, фильтр и инпут), API запросы через axios, MUI пагинация. 
