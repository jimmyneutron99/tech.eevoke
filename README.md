



**Directory Structure**

(venv) ghxst@PC:~/site-templates/landing-page1$ tree -L 3
.
├── CNAME
├── README.md
├── _config.yml
├── articles
│   ├── ai-trends-2025.html
│   ├── getreditus-guide.html
│   ├── index.html
│   ├── listnr-ai-review.html
│   └── neural-networks-explained.html
├── assets
│   ├── css
│   │   └── modern-2025.css
│   ├── fonts
│   │   └── Over There.ttf
│   ├── images
│   │   ├── EEVOKE 3D Banner 2.PNG
│   │   └── Sarah-Chen.jpg
│   ├── js
│   │   └── interactions.js
│   └── videos
│       ├── edited loop.mp4
│       └── output.mp4
├── autonomous-orchestrator5.py
├── fix-all-articles.sh
├── fix-articles-navigation.sh
├── index.html
├── index.html.backup
├── src
│   ├── enhanced_local_ai_manager.py
│   ├── github_autonomous_deployer.py
│   ├── hybrid_ai_researcher.py
│   ├── hybrid_content_writer.py
│   ├── social_media_automator.py
│   ├── state_manager.py
│   └── trending_topic_discoverer.py
└── venv
    ├── bin
    │   ├── Activate.ps1
    │   ├── activate
    │   ├── activate.csh
    │   ├── activate.fish
    │   ├── dotenv
    │   ├── markdown_py
    │   ├── normalizer
    │   ├── pip
    │   ├── pip3
    │   ├── pip3.12
    │   ├── python -> python3
    │   ├── python3 -> /usr/bin/python3
    │   ├── python3.12 -> python3
    │   └── wsdump
    ├── include
    │   └── python3.12
    ├── lib
    │   └── python3.12
    ├── lib64 -> lib
    └── pyvenv.cfg

16 directories, 42 files




**COMMANDS**

# Generate articles only (no social media)
python autonomous-orchestrator5.py --articles-only

# Continuous articles only mode
python autonomous-orchestrator5.py --continuous --interval 6 --articles-only

**ARTICLES + SOCIAL MEDIA MODE**

# Generate articles AND post to social media (default)
python autonomous-orchestrator5.py --social-media

# Continuous articles + social media mode
python autonomous-orchestrator5.py --continuous --interval 6 --social-media

**MIXED OPTIONS**

# Custom number of articles per cycle
python autonomous-orchestrator5.py --articles-per-cycle 2 --articles-only

# Shorter interval for more frequent updates
python autonomous-orchestrator5.py --continuous --interval 4 --social-media




**Key Features:**

**Mode Selection: Choose between articles-only or articles+social media**

**Directory Structure: Properly handles your existing structure**

**Article Formatting: Creates HTML articles that match your site's style**

**Flexible Deployment: Works with your current articles directory**

**Social Media Control: Easy to enable/disable social media posting**