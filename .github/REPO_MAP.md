# REPO_MAP — pdkiller666/ProgramerAI
> Стек: HTML, CSS, JavaScript | Тип: Веб-приложение (фронтенд)

## Структура
```
ProgramerAI/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── .gitignore
├── AGENT_INSTRUCTIONS.md
├── README.md
├── index.html
├── script.js
└── style.css
```

## Ключевые файлы
- `index.html` — основной HTML-документ, точка входа приложения
- `script.js` — клиентская логика на JavaScript
- `style.css` — стилизация интерфейса
- `AGENT_INSTRUCTIONS.md` — инструкции для AI-агента (возможно, промпты)
- `README.md` — документация репозитория
- `.gitignore` — исключения для Git
- `.github/workflows/ci.yml` — CI-пайплайн (проверки, тесты)
- `.github/workflows/deploy.yml` — деплой на хостинг

## Точки входа
- **Фронтенд:** `index.html` (открыть в браузере)
- **CI/CD:** GitHub Actions (автоматически при пушах)

## Инварианты (что нельзя менять)
- `index.html` — основной файл приложения, должен оставаться точкой входа
- `script.js` — вся логика должна быть в этом файле
- `style.css` — все стили должны быть здесь
- `.github/workflows/` — конфигурация CI/CD не должна нарушаться