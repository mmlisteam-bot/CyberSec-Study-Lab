---
tags: [web, access-control]
---

# Access Control Testing

## مدل آزمون

برای هر عملیات حساس، نقش و مالک منبع را مشخص کن. تست باید با حساب‌های آزمایشی جدا انجام شود.

| آزمون | کاربر | منبع | انتظار |
|---|---|---|---|
| دسترسی مجاز | A | A | مجاز |
| دسترسی افقی | A | B | غیرمجاز |
| ارتقای عمودی | User | Admin object | غیرمجاز |
| مهمان | بدون نشست | Private object | غیرمجاز |

## چک‌لیست

- [ ] مجوز در سمت سرور بررسی می‌شود.
- [ ] شناسه قابل حدس بودن به‌تنهایی معنی IDOR ندارد؛ دسترسی غیرمجاز باید اثبات شود.
- [ ] تغییر Method یا Content-Type مجوز را دور نمی‌زند.
- [ ] مسیرهای API و Interface یک سیاست دارند.
- [ ] عملیات Bulk و Export نیز کنترل می‌شوند.

## شاخه‌ها

- [[IDOR]]

## ثبت ماتریس دسترسی

```text
Endpoint:
Role A:
Role B:
Object owner:
Request A to A:
Request A to B:
Server-side authorization:
Evidence:
```
