---
tags: [web, sqli]
---

# SQL Injection

## چک‌لیست شروع

- [ ] نوع پارامتر و مسیر ورودی را مشخص کن: Query، Body، JSON، Cookie یا Header.
- [ ] پاسخ پایه را بدون پیلود ثبت کن: Status، طول پاسخ، زمان و محتوای مهم.
- [ ] Context تزریق را تشخیص بده: عددی، رشته‌ای، LIKE، ORDER BY یا عبارت دیگر.
- [ ] تغییر رفتار با ورودی کنترل‌شده را بررسی کن.
- [ ] نوع SQLi را از روی رفتار انتخاب کن؛ فقط به خطا اتکا نکن.
- [ ] اثبات را با کمترین اثر انجام بده و نتیجه را در یافته ثبت کن.

## شاخه‌ها

- [[Union-Based SQL Injection]] — خروجی مستقیم در نتیجه Query
- [[Error-Based SQL Injection]] — نمایش داده یا پیام از مسیر خطا
- [[Blind SQL Injection]] — استنباط از اختلاف پاسخ یا زمان
  - [[Boolean-Based SQL Injection]]
  - [[Time-Based SQL Injection]]
- [[Out-of-Band SQL Injection]] — ارسال نشانه به سرویس بیرونی کنترل‌شده

## پیلودهای اولیه Context

این موارد فقط نقطه شروع تشخیص‌اند و باید متناسب با Context تنظیم شوند.

```sql
'
"
)
')
-- -
```

## الگوی ثبت آزمایش

```text
Request ID:
Parameter:
Context: numeric / single-quote / double-quote / other
Baseline: status / bytes / ms
True test:
False test:
Delay test:
Result:
Evidence file:
```

## sqlmap — نقطه شروع کنترل‌شده

```bash
sqlmap -u "https://target.example/item.php?id=1" \
  --batch --level=1 --risk=1 --technique=BEUST
```

برای پارامتر POST، درخواست را در فایل ذخیره و فقط پارامتر موردنظر را با `*` علامت‌گذاری کن:

```bash
sqlmap -r request.txt -p id --batch --level=1 --risk=1
```

از گزینه‌های تغییردهنده داده یا سیستم‌عامل استفاده نکن، مگر اینکه Scope و اثر آن کاملاً مشخص باشد.

## یادداشت شخصی

- یافته‌های تکراری Context:
- رفتار WAF یا فیلتر:
- لینک مدرک:
