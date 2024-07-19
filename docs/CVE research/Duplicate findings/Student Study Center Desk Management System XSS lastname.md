---
slug: student-study-center-desk-management-system-xss-lastname
title: Student Study Center Desk Management System XSS (lastname)
---


## Details

### Related Code file: 
`/sscdms/classes/Users.php?f=save`

### XSS injection parameter: 
`lastname`


&nbsp;

## POC

![1](https://github.com/user-attachments/assets/6402a1e6-82bf-4b96-8b5c-37a15c09d1e0)

Click on `Create New`.

![2](https://github.com/user-attachments/assets/250bd366-029b-4b72-9e2a-7cab0e5cec2a)

Intercept the request using Burpsuite Proxy.

![3](https://github.com/user-attachments/assets/e61965f7-db94-4c0b-bd22-d47b3e8a3e21)

Change the `lastname` parameter to the following:

```
<script>print();</script>
```

![1](https://github.com/user-attachments/assets/4c5cf1e2-8521-4ea3-b679-a25111a57f2b)

Send the request and reload the page.

![2](https://github.com/user-attachments/assets/4f4d158b-54a9-4a73-980e-c79200845c25)
