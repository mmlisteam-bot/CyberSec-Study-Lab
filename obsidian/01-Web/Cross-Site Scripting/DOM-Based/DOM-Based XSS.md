---
tags: [web, xss, dom]
---

# DOM-Based XSS

## Source و Sink

ورودی ممکن است اصلاً در پاسخ اولیه سرور بازتاب نشود. مسیر را از Source تا Sink در JavaScript دنبال کن.

### Sourceهای رایج

```javascript
location.hash
location.search
document.referrer
window.name
postMessage
```

### Sinkهای پرخطر

```javascript
element.innerHTML = value;
document.write(value);
eval(value);
setTimeout(value, 0);
location.href = value;
```

## الگوی بررسی Fragment

```text
https://target.example/page#rasad-dom-7f3a
```

## چک‌لیست

- [ ] Source قابل کنترل توسط کاربر است.
- [ ] داده بدون Sanitization مناسب به Sink می‌رسد.
- [ ] Sink واقعاً اجرا یا رندر خطرناک انجام می‌دهد.
- [ ] رفتار در مرورگر و بدون افزونه اثبات شده است.

## یادداشت مسیر داده

```text
Source:
Transformations:
Sanitizers:
Sink:
Execution context:
Proof:
```
