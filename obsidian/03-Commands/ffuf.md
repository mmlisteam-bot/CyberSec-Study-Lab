---
tags: [commands, recon, ffuf]
---

# ffuf

## مسیرها و فایل‌ها

```bash
ffuf -u 'https://target.example/FUZZ' \
  -w words.txt \
  -mc 200,204,301,302,401,403
```

## فیلتر پاسخ‌های تکراری

```bash
ffuf -u 'https://target.example/FUZZ' \
  -w words.txt \
  -fc 404 -fs 1234
```

مقدار `-fs` را از پاسخ مسیر نامعتبر Baseline بگیر، نه به‌صورت حدسی.

## Query Parameter

```bash
ffuf -u 'https://target.example/search?item=FUZZ' \
  -w params.txt \
  -mc 200
```

## محدود کردن نرخ

```bash
ffuf -u 'https://target.example/FUZZ' \
  -w words.txt \
  -rate 20 -t 5
```

نرخ باید با Scope و ظرفیت هدف سازگار باشد.

## ذخیره خروجی

```bash
ffuf -u 'https://target.example/FUZZ' \
  -w words.txt \
  -of json -o ffuf-results.json
```

## ثبت نتیجه

```text
Baseline invalid path:
Filtered status/size:
Wordlist:
Rate:
Interesting paths:
Next manual check:
```
