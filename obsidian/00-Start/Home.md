# دفتر پنتست وب

این Vault برای جزوه‌های درختی و دستورهای شخصی است. هر موضوع یک پوشه دارد و یادداشت اصلی همان موضوع داخل پوشه قرار می‌گیرد؛ پس هر شاخه می‌تواند هم محتوای خودش را داشته باشد و هم زیرشاخه بسازد.

## شروع سریع

- [[Git-Sync|راه‌اندازی همگام‌سازی با GitHub]]
- [[Technique Template|قالب موضوع تازه]]
- [[Command Template|قالب دستور و پیلود]]
- [[Finding Template|قالب ثبت یافته]]

## وب

### SQL Injection

- [[SQL Injection|نمای کلی SQL Injection]]
  - [[Blind SQL Injection]]
    - [[Boolean-Based SQL Injection]]
    - [[Boolean Detection|تشخیص اختلاف پاسخ در Boolean-Based]]
    - [[Time-Based SQL Injection]]
      - [[MySQL Time-Based]]
      - [[PostgreSQL Time-Based]]
      - [[MSSQL Time-Based]]
  - [[Union-Based SQL Injection]]
  - [[Column Enumeration|تعیین تعداد ستون‌ها در Union]]
  - [[Error-Based SQL Injection]]
  - [[Out-of-Band SQL Injection]]

### سایر موضوع‌ها

- [[Cross-Site Scripting]]
  - [[Reflected XSS]]
  - [[Stored XSS]]
  - [[DOM-Based XSS]]
- [[Server-Side Request Forgery]]
- [[Authentication Testing]]
- [[Access Control Testing]]
  - [[IDOR]]

## روش و ابزار

- [[Testing Workflow|گردش‌کار مستندسازی آزمون]]
- [[Evidence and Notes|ثبت مدرک و یادداشت]]
- [[HTTP with cURL]]
- [[ffuf]]

## الگوی ساخت زیرشاخه

```text
SQL Injection/
├── SQL Injection.md
└── Blind/
    ├── Blind SQL Injection.md
    └── Time-Based/
        ├── Time-Based SQL Injection.md
        ├── MySQL Time-Based.md
        └── PostgreSQL Time-Based.md
```

نام فایل‌ها را یکتا نگه دار تا لینک‌های داخلی Obsidian مطمئن بمانند. تصویر و مدرک را داخل `attachments` بگذار و در یادداشت پروژه لینک کن.

> فقط روی سامانه‌هایی تست کن که مجوز صریح و Scope مشخص دارند.
