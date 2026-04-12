# Como rodar o backend (Django)

Instruções pensadas para **Windows + PowerShell**.

Para **Linux/macOS**, use os comandos na seção correspondente.

O `manage.py` fica em `api/`.

## Criar e ativar um ambiente virtual (recomendado)

Se você já tem a pasta `env/` no projeto, pode reutilizar.

### Windows (PowerShell)

```powershell
# na raiz do repositório
python -m venv env
\env\Scripts\Activate.ps1
```

### Linux/macOS (bash)

```bash
# na raiz do repositório
python3 -m venv env
source env/bin/activate
```

## Instalar dependências

### Windows (PowerShell)

```powershell
python -m pip install -r api\requirements.txt
```

### Linux/macOS (bash)

```bash
python -m pip install -r api/requirements.txt
```

## Rodar migrations

### Windows (PowerShell)

```powershell
python api\manage.py migrate
```

### Linux/macOS (bash)

```bash
python api/manage.py migrate
```

## Subir o servidor

### Windows (PowerShell)

```powershell
python api\manage.py runserver
```

### Linux/macOS (bash)

```bash
python api/manage.py runserver
```

O backend sobe por padrão em:
- `http://127.0.0.1:8000/`

## Endpoints úteis

- API (lista de notícias): `http://127.0.0.1:8000/corpnews_api/noticias/`
- OpenAPI schema (JSON): `http://127.0.0.1:8000/schema/`
- Swagger UI: `http://127.0.0.1:8000/docs/`
- Redoc: `http://127.0.0.1:8000/redoc/`

---
