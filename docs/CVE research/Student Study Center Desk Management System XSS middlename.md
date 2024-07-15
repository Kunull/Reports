---
slug: student-study-center-desk-management-system-xss-middlename
title: Student Study Center Desk Management System XSS (middlename)
---


## Details

### Related Code file: 
`/sscdms/classes/Users.php?f=save`

### XSS injection parameter: 
`middlename`


&nbsp;

## POC

![1](https://github.com/user-attachments/assets/73fab37e-9e1d-4c66-ac02-67df7c9baf42)

Click on `Create New`.

![2](https://github.com/user-attachments/assets/f1724634-5aaa-4448-9e7e-0109eb756467)

Intercept the request using Burpsuite Proxy.

![3](https://github.com/user-attachments/assets/124cd339-5298-4603-b283-108b22f52907)

Change the `middlename` parameter to the following:

```
<script>print();</script>
```

![1](https://github.com/user-attachments/assets/105cb418-6bb4-455b-bd38-18eb337eb33a)

Send the request and reload the page.

![2](https://github.com/user-attachments/assets/32729d5c-8e46-49fa-b9bb-9d4be9df89bf)
