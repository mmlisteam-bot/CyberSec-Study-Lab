---
tags: [commands, http, curl]
---

# HTTP with cURL

## درخواست با Headerهای پاسخ

```bash
curl -i -sS 'https://target.example/api/item/1'
```

## ذخیره پاسخ و نمایش زمان

```bash
curl -sS -o response.html \
  -w 'status=%{http_code} bytes=%{size_download} time=%{time_total}\n' \
  'https://target.example/item?id=1'
```

## JSON POST

```bash
curl -i -sS -X POST 'https://target.example/api/login' \
  -H 'Content-Type: application/json' \
  --data '{"username":"test","password":"test"}'
```

## ارسال کوکی آزمایشی

```bash
curl -i -sS 'https://target.example/account' \
  -H 'Cookie: session=TEST_SESSION'
```

## تغییر Method

```bash
curl -i -sS -X OPTIONS 'https://target.example/api/item/1'
```

## دنبال نکردن Redirect

```bash
curl -i -sS --max-redirs 0 'https://target.example/account'
```

## ذخیره درخواست برای تکرار

```text
Request ID:
Purpose:
Command:
Baseline response:
Changed value:
Result:
```

> Cookie و Token واقعی را در Vault عمومی ذخیره نکن؛ مقدارها را با `TEST_SESSION` جایگزین کن.
