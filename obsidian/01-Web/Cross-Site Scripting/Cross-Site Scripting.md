---
tags: [web, xss]
---

# Cross-Site Scripting

## مدل بررسی

1. ورودی را با نشانگر بی‌ضرر ارسال کن.
2. محل بازتاب را در HTML پیدا کن.
3. Context را مشخص کن: Text، Attribute، JavaScript، URL یا DOM Sink.
4. Encoding و فیلتر را بررسی کن.
5. با Payload بی‌ضرر اثبات کن.

## شاخه‌ها

- [[Reflected XSS]]
- [[Stored XSS]]
- [[DOM-Based XSS]]

## نشانگر بازتاب

```text
rasad-xss-7f3a
```

## Contextهای رایج

```html
<div>REFLECTION</div>
<input value="REFLECTION">
<script>const value = "REFLECTION";</script>
<a href="REFLECTION">link</a>
```

## اثبات ساده

```html
"><svg onload=alert(1)>
```

## اطلاعات لازم برای گزارش

- نوع XSS و Context
- مسیر ورودی و Sink
- Payload نهایی
- اثر روی کاربر و نشست
- راه‌حل متناسب با Context

## راه‌حل

Encoding متناسب با محل خروجی، استفاده از APIهای امن DOM، اعتبارسنجی URL و CSP دفاعی. فیلتر کردن صرف چند رشته راه‌حل کامل نیست.
