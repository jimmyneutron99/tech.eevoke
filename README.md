# Tech.eevoke static site

This repository contains the Tech.eevoke landing page and the `articles/` section. Articles share a consistent design and layout.

## Article templating and validation

To ensure all generated articles follow the same design and structure as the existing pages in `articles/`, this repo includes:

- A reusable HTML template: `src/article_template.html.j2`
- A renderer CLI: `src/render_article.py` (renders JSON or Markdown body into the template)
- A validator CLI: `src/validate_articles.py` (checks conformance of generated HTML)

### Install dependencies

Jinja2 is used for templating (already added to `requirements.txt`). Install or update your venv:

```bash
# from repo root
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Render an article

Provide a JSON payload with the article fields. At minimum, `title` and one of `body_html` or `body_markdown` are required.

Example payload (fields are optional unless marked required):

```json
{
	"title": "Top 10 Machine Learning Trends Dominating 2025",            // required
	"category": "AI Trends",
	"author": "AI Articles Team",
	"date": "2025-01-15",                                               // flexible formats ok
	"read_time": "8 mins read",
	"featured_image_url": "https://.../header.jpg",
	"featured_image_alt": "AI Technology Trends 2025",
	"tags": ["Machine Learning", "AI Trends"],
	"meta_description": "Short SEO description.",
	"canonical_url": "https://tech.eevoke/articles/ai-trends-2025.html",
	"page_title": "Top 10 Machine Learning Trends Dominating 2025 - Tech.eevoke",
	"body_markdown": "## Introduction\nYour content here..."
}
```

Render it:

```bash
# write to ./articles/<slug>.html (slug derived from title unless overridden)
venv/bin/python src/render_article.py --in path/to/article.json --overwrite

# optionally override output dir or slug
venv/bin/python src/render_article.py --in path/to/article.json --out-dir articles --slug my-article --overwrite
```

### Validate articles

Run the validator to ensure all `articles/*.html` (excluding `articles/index.html`) match the expected structure:

```bash
venv/bin/python src/validate_articles.py

# or validate specific files
venv/bin/python src/validate_articles.py articles/my-article.html
```

### Integrate with external generators (ai-content-tools)

If your content generator (e.g., `/home/ghxst/site-templates/ai-content-tools/modules/deployment/github_autonomous_deployer.py`) produces raw Markdown or HTML, integrate as a post-processing step:

1. Emit a JSON with the fields shown above (or map your generator's metadata to these keys).
2. Call the renderer to wrap the content with the site template:

```bash
# Pseudocode shell step in your deployer pipeline
venv/bin/python /home/ghxst/site-templates/landing-page1-fresh/src/render_article.py \
	--in /path/to/generated/article.json \
	--out-dir /home/ghxst/site-templates/landing-page1-fresh/articles \
	--overwrite
```

3. Optionally run the validator and fail the deployment on non-conformance:

```bash
venv/bin/python /home/ghxst/site-templates/landing-page1-fresh/src/validate_articles.py \
	/home/ghxst/site-templates/landing-page1-fresh/articles/*.html
```

Notes:
- The template intentionally mirrors the existing pages: header/nav, article header/meta, featured image, body, tag pills, affiliate footer, and scripts.
- Paths are relative to `articles/` (e.g., CSS `../assets/css/modern-2025.css`).
- The validator skips `articles/index.html` since it is a listing page, not an article.

## Articles listing

`articles/index.html` is a simple static listing. You can update it manually or extend your deployment tool to append new previews when new articles are added.

