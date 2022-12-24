# Отчет по лабораторной работе №2
## Задание №1
<ul>
    <li>Request URL = https://ya.ru/</li>
    <li>Request method = Get</li>
    <li>Status code =  200</li>
    <li>Remote Address</li>
    <li>Referrer policy = origin</li>
    <li>content-type = text/html; charset=UTF-8</li>
    <li>cache-contol = no-cache,no-store,max-age=0,must-revalidate</li>
    <li>cookie = yandex_csyr=1671882021; yandexuid=5948903531646860946; yuidss=1213775861671892821; is_gdpr=0; is_gdpr_b=CN3iTBDxnAEoAg==; _yasc=TCsxuHawM5E3AiDQspy6UXCgOdKkfaO4ON89Ng07Cu0cmxSVrNpZcGF+03VB; i=wBhMTY8AavCN6ChD2j6ffKD8EYaprglupCptYQ7gm1Ay6F3BaLScG2f2nyjyQ/rbZkRW4EQQ3IC8GTf/lbm6nXKy/tQ=; Session_id=3:1671892821.5.0.1649780956281:QVRaXQ:5.1.2:1|248477903.-1.2|6:10178586.761948.SYGbOvx2woPvrQbiXxodK0ibV40; yandex_login=faddxsl; yp=1678397016.p_cl.1646861015#1678396974.p_sw.1646860973#1987252821.udn.cDpmYWRkX3hzbA%3D%3D#1659097997.rnwcst.1#1661688197.ygu.1; ys=udn.cDpmYWRkX3hzbA%3D%3D#c_chck.1671156831; my=YwA=; L=RmN9e1t7VQBuUXZXVXNtBlVXBFVTSHN/AhBdIEsjGQ==.1649780956.14945.370000.1c13fcd37180112d1b2f1f3a753d59d4; mda2_beacon=1671892821445; sso_status=sso.passport.yandex.ru:synchronized</li>
    <li>user-agent = Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:108.0) Gecko/20100101 Firefox/108.0</li>
    <li>referer = https://sso.ya.ru/</li>
</ul>

## Задание №2

### Сделайте запрос на http://rgups.ru/ и обратите внимание на то изменился ли адрес в адресной строке? - Если Вы всё правильно сделали, то он должен был немного измениться. Изучите из-за чего так произошло и ответьте на вопросы:
Из-за чего произошло изменение адреса в адресной строке? Какие заголовки в этом поучаствовали и как?
 - Изменился http на https, так как сайт rgups "поддерживает" протокол https, который в свою очередь обеспечивает безовасность передачи данных

Адрес был изменён в исходном запросе или потребовались дополнительные запросы, если были дополнительные запросы, то сколько?
 - В исходном

Какой статус ответа имеет первоначальный запрос?
 - 301

## Задание №3
Повторите запрос на https://ya.ru/ и изучите заголовки влияющие на получение и отправку cookie параметров: Перечислите название этих параметров и формат данных в них.

    Path
    Domain
    expires
    secure
    value
    samesite

Как можно удобно просмотреть все cookie, используемые на странице? Что означают их параметры Name, Value, Domain, Path и Expires? Сеть->Заголовки->Заголовки запроса

    Name = имя
    Value = значение
    Domain = домен
    Path = расположение
    Expires = Срок дейсвия

Как просмотреть все cookie связанные с текущим (просматриваемым) сайтом?

    Вкладка Куки

Опишите своими словами как вы понимаете суть и назначение cookie?

    Файл, который позволяет ускорить работу сайта путем сохранения часто используемыз статичных данных.

## Задание №4

## Задание №5
