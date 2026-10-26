---
tags: [methodology, evidence]
---

# Evidence and Notes

## نام‌گذاری مدرک

```text
<engagement>-<finding>-<request-or-step>-<yyyymmdd>.png
```

مثال:

```text
shop-sqli-time-true-20261027.png
```

## چیزی که برای هر مدرک لازم است

- مسیر و متد درخواست
- پارامتر و Context
- حساب یا نقش آزمایشی
- زمان آزمون
- نتیجه مورد انتظار و واقعی
- لینک به یافته

## نگهداری امن

این ریپو عمومی است؛ بنابراین موارد زیر را هرگز در آن Commit نکن:

- Token، Cookie، API Key و گذرواژه
- داده واقعی کاربر یا مشتری
- Scope محرمانه و آدرس‌های داخلی
- مدرک حاوی اطلاعات حساس بدون Mask

## الگوی یادداشت مدرک

```text
Evidence ID:
Related finding:
Captured at:
Request:
Response summary:
Sensitive values masked:
Original stored securely at:
```

فایل اصلی حساس را در محل امن تعیین‌شده پروژه نگه دار و فقط نسخه Mask‌شده یا توضیح آن را در دفتر بیاور.
