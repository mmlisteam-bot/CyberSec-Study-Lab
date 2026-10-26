---
tags: [web, access-control, idor]
---

# IDOR

## ایده اصلی

کاربر A با تغییر شناسه منبع به منبع کاربر B دسترسی پیدا می‌کند، در حالی که سرور باید آن را رد کند. شناسه می‌تواند عدد، UUID، نام فایل یا کلید منطقی باشد.

## روش با دو حساب آزمایشی

1. با کاربر B یک منبع آزمایشی بساز.
2. شناسه منبع را ثبت کن.
3. با نشست کاربر A همان مسیر را درخواست کن.
4. Status و محتوای پاسخ را با کنترل دسترسی مجاز مقایسه کن.
5. فقط داده آزمایشی را بررسی و بعد پاک کن.

## مثال الگوی درخواست

```http
GET /api/orders/TEST_ORDER_B HTTP/1.1
Host: target.example
Cookie: session=USER_A_TEST_SESSION
```

## انواع عملیات

- Read: مشاهده داده کاربر دیگر
- Update: تغییر منبع کاربر دیگر
- Delete: حذف منبع کاربر دیگر
- Export: دریافت مجموعه داده خارج از مالکیت

## راه‌حل

در هر Handler و Query سمت سرور، مالکیت و نقش را بررسی کن. استفاده از UUID به‌تنهایی راه‌حل کنترل دسترسی نیست.

## ثبت اثبات

```text
User A object:
User B object:
Request as A to B:
Expected status:
Actual status:
Data exposed or changed:
Cleanup:
```
