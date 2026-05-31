# REPO_MAP — pdkiller666/ProgramerAI
> Стек: HTML, CSS, JavaScript | Тип: Веб-приложение (фронтенд)

## Структура
```
.github/
├── REPO_MAP.md
└── workflows/
    ├── ci.yml
    └── deploy.yml
.gitignore
AGENT_INSTRUCTIONS.md
README.md
index.html
script.js
style.css
```

## Ключевые файлы
- `index.html` — основной HTML-документ, точка входа приложения
- `script.js` — клиентская логика на JavaScript
- `style.css` — стилизация интерфейса
- `AGENT_INSTRUCTIONS.md` — инструкции для агента/разработчика
- `README.md` — описание проекта
- `.gitignore` — правила игнорирования файлов Git
- `.github/workflows/ci.yml` — конфигурация непрерывной интеграции
- `.github/workflows/deploy.yml` — конфигурация деплоя

## Точки входа
- **Основная**: `index.html` — открывается в браузере
- **CI/CD**: через GitHub Actions (workflows)

## Инварианты (что нельзя менять)
- `index.html` — должен оставаться точкой входа
- `script.js` и `style.css` — основные файлы логики и стилей
- `.github/workflows/` — конфигурации CI/CD не должны нарушаться