---
slug: student-study-center-desk-management-system-xss-username
title: Student Study Center Desk Management System XSS (username)
---



## Details

### Related Code file: 
`/sscdms/classes/Users.php?f=save`

### XSS injection parameter: 
`username`

&nbsp;

## POC

![1](https://github.com/user-attachments/assets/70903b08-2c76-4074-a99a-19d4b795171b)

Click on `Create New`.

![2](https://github.com/user-attachments/assets/a8735365-2e80-4e10-9cd2-7b7ea5246b61)

Intercept the request using Burpsuite Proxy.

![3](https://github.com/user-attachments/assets/849de931-8d96-4bb1-9ce6-b3a30f5047ce)

Change the `username` parameter to the following:

```
<script>print();</script>
```

![1](https://github.com/user-attachments/assets/8f79111f-e049-491a-8618-9f8afce18514)

Send the request and reload the page.

![2](https://github.com/user-attachments/assets/b96816cd-d11a-4d03-a871-53f29cbaa3a9)
