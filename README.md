# PABRIK ROTI [![version](https://img.shields.io/badge/version-0.1.0.1-blue)](https://github.com/myreceiptt/pabrikroti-init/releases/tag/v.0.1.0.1)

> "This is not just a factory. This is a rehearsal of freedom—kneaded with code, fermented by its community, and baked through the heat of shared struggles."
>
> — Prof. NOTA

## PABRIK ROTI v.0.1.0.1: Init by Prof. NOTA Inc

🧬 Forked from [PABRIKROTI-MASTER](https://github.com/myreceiptt/pabrikroti-master/releases/tag/v.0.1.0-init)

## 📜 License

This project is licensed under a [**Custom Limited License**](./LICENSE) by [Prof. NOTA & Prof. NOTA Inc.](https://nota.endhonesa.com/).

- 🏛️ [English (UK)](./licenses/LICENSE_UK.md)
- 🇮🇩 [Bahasa Indonesia](./licenses/LICENSE_ID.md)
- 🇺🇿 [Oʻzbekcha](./licenses/LICENSE_UZ.md)
- 🇭🇰 [Cantonese – Hong Kong](./licenses/LICENSE_HK.md)
- 🇲🇾 [Bahasa Malaysia](./licenses/LICENSE_MY.md)
- 🇦🇪 [العربية – الإمارات](./licenses/LICENSE_AE.md)

> 📩 For permission or inquiries, contact: [nota@endhonesa.com](mailto:nota@endhonesa.com)

## Usage

### Install dependencies

```bash
yarn install
```

### Review dependency updates (interactive)

```bash
yarn up -i
```

### Upgrade dependencies

```bash
yarn up -R
```

### Start development server

```bash
yarn dev
```

### Check all the code

```bash
yarn lint
```

### Create a production build

```bash
yarn build
```

### Preview the production build

```bash
yarn start
```

## Resources

- [Prof. NOTA Inc.](https://nota.endhonesa.com/)
- [Prof. NOTA Console](https://prompt.endhonesa.com/)
- [Prof. NOTA Tutor](https://baca.endhonesa.com/)

## Join Prof. NOTA Discord

For any questions or suggestions, join Prof. NOTA discord at [https://discord.gg/5KrsT6MbFm](https://discord.gg/5KrsT6MbFm).

## Maintenance by Prof. NOTA Evergreen Standard

This repo is intended to stay evergreen while remaining production-safe.

### Current Baseline (Jan 2026)

- Runtime: Node **24.x** (Vercel-compatible; see `.nvmrc` and `package.json#engines`)
- Package manager: Yarn **4.12.0** (lockfile: `yarn.lock`)
- Types: `@types/node` **24.10.7** (pinned to match Node 24; 25.x intentionally deferred)
- Key packages: Next.js **16.1.4**, React **19.2.3**, thirdweb **5.118.0**, framer-motion **12.29.0**

### Monthly Evergreen Cycle (safe)

- `yarn install`
- `yarn up -R "*"`
- `yarn npm audit --severity moderate`
- `yarn lint`
- `yarn build`

### Quarterly Evergreen Cycle (major review)

- Review majors one at a time (framework/tooling), with a dedicated PR.
- If `@types/node` gets bumped, repin to **24.10.7**, then re-run audit/lint/build.

### Notes

- Yarn may report peer dependency warnings; treat as non-blocking unless they break lint/build/runtime.
- Live parity check (ambyar.endhonesa.com): **All green** — no critical console errors, UX unchanged.
