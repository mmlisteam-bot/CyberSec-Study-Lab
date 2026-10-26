---
tags: [methodology, web]
---

# Testing Workflow

## ۱. ثبت مرز آزمون

```text
Engagement:
Authorized targets:
Excluded targets:
Test accounts:
Allowed techniques:
Rate limits:
Evidence restrictions:
```

## ۲. ساخت نقشه ورودی‌ها

برای هر مسیر این موارد را بنویس:

- متد و مسیر
- پارامترهای Query و Body
- Cookie و Headerهای ورودی
- نقش لازم
- نوع پاسخ
- دارایی یا داده حساس

## ۳. انتخاب موضوع از درخت

برای هر ورودی، یادداشت موضوع مربوط را باز کن. دستورهای همان شاخه را کپی و Context را روی هدف آزمایشی تنظیم کن.

مثال:

```text
id در /item → [[SQL Injection]]
  └── پاسخ بدون محتوا → [[Blind SQL Injection]]
      └── فقط زمان متفاوت → [[Time-Based SQL Injection]]
```

## ۴. ثبت آزمایش

هر آزمایش باید Baseline، تغییر اعمال‌شده و نتیجه داشته باشد. فقط پیلود نهایی را نگه ندار؛ Context و درخواست اصلی مهم‌اند.

## ۵. تبدیل به یافته

از [[Finding Template]] استفاده کن و فقط مدرک لازم را نگه دار. داده حساس واقعی را حذف یا Mask کن.

## ۶. پایان

- [ ] داده‌های آزمایشی پاک شدند.
- [ ] حساب‌ها و منابع آزمایشی بررسی شدند.
- [ ] مدرکها نام‌گذاری و Mask شدند.
- [ ] یافته‌ها به یادداشت پروژه لینک شدند.
- [ ] تغییرات Vault Commit و Sync شدند.
