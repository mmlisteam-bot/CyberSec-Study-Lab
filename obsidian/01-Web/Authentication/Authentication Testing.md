---
tags: [web, authentication]
---

# Authentication Testing

## ورود

- [ ] پیام خطا وضعیت کاربر را افشا نمی‌کند.
- [ ] Rate Limit روی حساب و شبکه اعمال می‌شود.
- [ ] قفل حساب قابل سوءاستفاده برای DoS نیست.
- [ ] MFA در سمت سرور و برای همه مسیرها اعمال می‌شود.

## بازیابی گذرواژه

- [ ] Token تصادفی، کوتاه‌عمر و یکبارمصرف است.
- [ ] Token به حساب و عملیات مشخص Bind است.
- [ ] بعد از تغییر گذرواژه نشست‌ها طبق سیاست ابطال می‌شوند.
- [ ] Host Header یا مسیر Callback قابل دستکاری نیست.

## نشست

- [ ] کوکی Secure، HttpOnly و SameSite مناسب دارد.
- [ ] Session ID بعد از ورود و تغییر سطح دسترسی تازه می‌شود.
- [ ] Logout نشست را در سمت سرور ابطال می‌کند.
- [ ] انقضای Idle و Absolute بررسی شده است.

## نمونه بررسی کوکی

```bash
curl -i -sS 'https://target.example/login' | \
  grep -i -E 'set-cookie|location|http/'
```

## ثبت یافته

```text
Flow:
Precondition:
Request baseline:
Changed parameter:
Server-side result:
Session impact:
Evidence:
```
