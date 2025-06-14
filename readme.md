
# Dashboard Monorepo (Isomorphic & Luqya)

هذا المشروع عبارة عن Monorepo يحتوي على مشروعين أساسيين:

## 🗂️ مجلدات المشاريع

```
apps/
├── isomorphic    ← مشروع لوحة تحكم مبني بـ Next.js
└── luqya         ← مشروع آخر مستقل بـ Next.js
```

كل مشروع يحتوي على ملف `package.json` خاص به، ويُمكن تشغيله وتطويره بشكل منفصل.

---

## ⚙️ متطلبات التشغيل

قبل تشغيل أي مشروع يجب إنشاء ملف بيئة محلية `.env.local` داخل كل مجلد (`apps/isomorphic` و `apps/luqya`) يحتوي على التالي:

```env
NEXTAUTH_SECRET=""
NEXTAUTH_URL=http://localhost:3000
```

---

## 🚀 أوامر التشغيل

### تشغيل المشروع بالكامل (isomorphic كخيار افتراضي):

```bash
pnpm install
pnpm dev
```

### أو تشغيل كل مشروع على حدة:

- لتشغيل مشروع `isomorphic`:

```bash
pnpm iso:dev
```

- لتشغيل مشروع `luqya`:

```bash
pnpm luqya:dev
```

---

## 🧱 تم بناء المشروع باستخدام:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Turborepo](https://turbo.build/)
- [pnpm](https://pnpm.io/)

---

## 📁 هيكلة المشروع

```bash
apps/
├── isomorphic/
│   ├── package.json
│   ├── .env.local       ← يجب إضافته يدويًا
│   └── ...
└── luqya/
    ├── package.json
    ├── .env.local       ← يجب إضافته يدويًا
    └── ...
```

---

## 💡 ملاحظات

- تأكد من أنك تستخدم **Node.js 20+** و **pnpm** (وليس npm).
- اقرأ ملفات `package.json` للحصول على أوامر أكثر.
- يمكن تعديل كل مشروع أو إضافته بسهولة باستخدام هيكل monorepo.

---

🎉 بالتوفيق في تطوير المشروع!
