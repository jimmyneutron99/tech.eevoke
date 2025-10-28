#!/bin/bash
echo "Fixing navigation in all article pages..."

# Fix articles/index.html first
echo "Fixing articles/index.html..."
sed -i 's|<li class="header__el"><a href="../index.html" class="header__link">Articles</a></li>|<li class="header__el"><a href="index.html" class="header__link">Articles</a></li>|g' articles/index.html

# Fix each individual article file
for article in articles/*.html; do
    if [ "$article" != "articles/index.html" ]; then
        echo "Fixing: $article"
        
        # Fix the malformed Articles link
        sed -i 's|href="index.htmlindex.html"|href="index.html"|g' "$article"
        sed -i 's|href="../index.htmlindex.html"|href="index.html"|g' "$article"
        sed -i 's|href="index.html" class="header__link">Articles</a>|href="index.html" class="header__link">Articles</a>|g' "$article"
        
        # Ensure Articles link points to articles index
        sed -i 's|<li class="header__el"><a href="../index.html" class="header__link">Articles</a></li>|<li class="header__el"><a href="index.html" class="header__link">Articles</a></li>|g' "$article"
        sed -i 's|<li class="header__el"><a href="index.html" class="header__link">Articles</a></li>|<li class="header__el"><a href="index.html" class="header__link">Articles</a></li>|g' "$article"
        
        # Fix any other relative paths
        sed -i 's|href="../index.html"|href="index.html"|g' "$article"
        sed -i 's|href="index.html"|href="index.html"|g' "$article"
    fi
done

# Also fix the homepage to use proper relative path
echo "Fixing homepage..."
sed -i 's|<li class="header__el"><a href="articles/index.html" class="header__link">Articles</a></li>|<li class="header__el"><a href="articles/" class="header__link">Articles</a></li>|g' index.html

echo "✅ All articles navigation fixed!"
