---
tags: [web, sqli, boolean, methodology]
---

# Boolean Detection

## جدول ثبت پاسخ

| آزمون | Status | Bytes | Redirect | نشانه متنی | زمان |
|---|---:|---:|---|---|---:|
| Baseline | | | | | |
| True | | | | | |
| False | | | | | |
| True تکرار | | | | | |
| False تکرار | | | | | |

## مقایسه محتوا

```bash
diff -u true.html false.html
```

برای دیدن تفاوت‌های کوچک متنی:

```bash
wc -c true.html false.html
```

## مقایسه بدون توجه به توکن‌های پویا

اگر صفحه CSRF Token یا مقدار تصادفی دارد، قبل از مقایسه آن را حذف یا Normalize کن. اختلاف باید به شرط منطقی نسبت داده شود، نه به محتوای پویای صفحه.

## الگوی تصمیم

```text
True و False پایدارند؟
├── خیر → Baseline، Session و Cache را اصلاح کن
└── بله
    ├── اختلاف متن مشخص → --string یا --not-string
    ├── اختلاف Status → ثبت Status در ابزار
    └── اختلاف Redirect → بررسی Location و Follow Redirect
```

## نشانه پاسخ من

```text
True marker:
False marker:
Dynamic values to ignore:
Stable across retries:
```
