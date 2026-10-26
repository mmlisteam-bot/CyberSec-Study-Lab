---
tags: [web, ssrf]
---

# Server-Side Request Forgery

## نقاط ورودی

- دریافت تصویر یا فایل از URL
- Webhook و Callback
- Import از لینک
- Preview و PDF Generator
- اتصال به سرویس با URL کاربر

## گردش‌کار

1. آدرس OOB شخصی را در پارامتر قرار بده.
2. تعامل DNS یا HTTP را با Token منحصربه‌فرد ثبت کن.
3. نوع درخواست، Headerها و Redirect را بررسی کن.
4. دسترسی به سرویس داخلی را فقط در Scope و با مسیر غیرحساس امتحان کن.

## نشانگر درخواست

```text
https://YOUR-OOB-DOMAIN/rasad-7f3a
```

## بررسی رفتار با curl — کنترل سمت کلاینت

```bash
curl -i -sS -X POST 'https://target.example/fetch' \
  -H 'Content-Type: application/json' \
  --data '{"url":"https://YOUR-OOB-DOMAIN/rasad-7f3a"}'
```

## ثبت نتیجه

```text
URL parameter:
OOB token:
DNS interaction:
HTTP interaction:
Redirect followed:
Response visible to user:
Internal scope tested:
```

## راه‌حل

Allowlist مقصد، Resolve و اعتبارسنجی نهایی IP، محدودیت Redirect و Port، جداسازی Network Egress و حذف دسترسی به Metadata و سرویس‌های مدیریتی.
