#!/bin/bash
echo "Fixing articles navigation..."

# 1. Fix articles/index.html - Articles link should point to itself
sed -i 's|<li class="header__el"><a href="../index.html" class="header__link">Articles</a></li>|<li class="header__el"><a href="index.html" class="header__link">Articles</a></li>|g' articles/index.html

# 2. Fix individual article pages
for article in articles/*.html; do
    if [ "$article" != "articles/index.html" ]; then
        echo "Fixing navigation in: $article"
        sed -i 's|<li class="header__el"><a href="../index.html" class="header__link">Articles</a></li>|<li class="header__el"><a href="index.html" class="header__link">Articles</a></li>|g' "$article"
        # Also fix any other relative links
        sed -i 's|href="../index.html"|href="index.html"|g' "$article"
    fi
done

# 3. Fix homepage to use cleaner URL
sed -i 's|<li class="header__el"><a href="articles/index.html" class="header__link">Articles</a></li>|<li class="header__el"><a href="articles/" class="header__link">Articles</a></li>|g' index.html

echo "✅ Navigation fixed!"
echo "Testing links..."
grep -n 'href=.*Articles' index.html articles/index.html articles/*.html | head -10
