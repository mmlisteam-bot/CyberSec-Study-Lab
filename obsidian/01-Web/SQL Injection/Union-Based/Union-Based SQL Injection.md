---
tags: [web, sqli, union]
---

# Union-Based SQL Injection

## پیش‌شرط‌ها

- تعداد ستون‌های SELECT تزریق‌شده با Query اصلی یکسان باشد.
- نوع داده ستون‌ها سازگار باشد.
- نتیجه Query در پاسخ نمایش داده شود.

## گردش‌کار

1. Context تزریق را اثبات کن.
2. با [[Column Enumeration]] تعداد ستون‌ها را پیدا کن.
3. با `NULL` جای ستون‌ها را بساز.
4. یک ستون قابل نمایش را مشخص کن.
5. فقط داده کم‌حساسیته مثل نسخه دیتابیس را برای اثبات استفاده کن.

## الگوی کلی

```sql
' UNION ALL SELECT NULL,NULL,NULL-- -
```

برای MySQL، بعد از پیدا کردن ستون قابل نمایش:

```sql
' UNION ALL SELECT NULL,version(),NULL-- -
```

## sqlmap

```bash
sqlmap -r request.txt -p id \
  --technique=U --batch
```

## خطاهای رایج

- `ORDER BY` برای تعیین تعداد ستون همیشه قابل استفاده نیست.
- برنامه ممکن است فقط اولین ردیف را نمایش دهد؛ با شرط False روی Query اصلی ردیف نتیجه را کنترل کن.
- تعداد ستون درست است، اما نوع داده ستون انتخابی سازگار نیست؛ جای ستون را عوض کن.

## یادداشت Context من

```text
Column count:
Visible column:
Working prefix:
Working suffix:
Proof payload:
```
