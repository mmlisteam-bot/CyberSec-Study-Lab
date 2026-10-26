---
tags: [web, sqli, blind]
---

# Blind SQL Injection

در Blind SQLi نتیجه Query مستقیماً دیده نمی‌شود. استنباط از دو کانال اصلی انجام می‌شود:

1. [[Boolean-Based SQL Injection|اختلاف محتوای پاسخ]]
2. [[Time-Based SQL Injection|اختلاف زمان پاسخ]]

## روش آزمون

برای هر گمانه سه درخواست داشته باش:

| درخواست | هدف |
|---|---|
| Baseline | ثبت رفتار عادی |
| True | شرطی که باید نتیجه مشخصی بسازد |
| False | شرط مخالف برای کنترل تفاوت |

## نشانه‌های قابل اتکا

- تفاوت تکرارپذیر در محتوای معنادار، نه فقط چند بایت تصادفی
- تفاوت وضعیت یا مسیر Redirect با کنترل True/False
- تأخیر نزدیک به مقدار تعیین‌شده در چند تکرار
- حذف اثر شبکه با آزمون Baseline قبل و بعد از پیلود

## الگوی مقایسه با curl

```bash
curl -sS -o true.html -w 'true: %{http_code} %{size_download} %{time_total}\n' \
  'https://target.example/item.php?id=1%20AND%201=1--%20-'

curl -sS -o false.html -w 'false: %{http_code} %{size_download} %{time_total}\n' \
  'https://target.example/item.php?id=1%20AND%201=2--%20-'
```

## تصمیم‌گیری

```text
آیا True/False پاسخ متفاوت و پایدار می‌سازد؟
├── بله → Boolean-Based
└── خیر
    └── آیا تأخیر شرطی و تکرارپذیر دیده می‌شود؟
        ├── بله → Time-Based
        └── خیر → Context، فیلتر و کانال OOB را دوباره بررسی کن
```

## دام‌های رایج

- صفحه خطای عمومی همیشه یکسان است؛ به معنی نبود آسیب‌پذیری نیست.
- Cache یا Rate Limit می‌تواند زمان و محتوا را تغییر دهد.
- تفاوت طول پاسخ به‌تنهایی اثبات کافی نیست.
- هر تکرار باید با همان متد، کوکی و شرایط Baseline انجام شود.
