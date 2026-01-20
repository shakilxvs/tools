# XVS TOOLS - Multi-Platform Downloader

> 🎓 Educational purpose only - A beautiful, modular toolkit for web operations

## 📁 File Structure

```
xvs-tools/
├── index.html              ← Main landing page (reads config.js)
├── config.js               ← Tool list configuration (ADD TOOLS HERE!)
├── README.md               ← This file
└── tools/
    ├── downloader.html     ← Multi-platform downloader (15+ platforms)
    ├── cms-detect.html     ← CMS detection tool
    └── tool-template.html  ← Copy this to create new tools
```

## 🚀 Quick Setup - GitHub Pages

### Step 1: Create Repository

1. Go to [github.com](https://github.com) and login
2. Click **"+"** → **"New repository"**
3. Name: `xvs-tools` (or anything you want)
4. Make it **PUBLIC**
5. Don't add README (we have our own)
6. Click **"Create repository"**

### Step 2: Upload Files

**Method A - Web Interface (Easiest):**

1. Click **"uploading an existing file"** or **"Add file"** → **"Upload files"**
2. Upload these files in root:
   - `index.html`
   - `config.js`
   - `README.md`
3. Click **"Commit changes"**
4. Now create the `tools` folder:
   - Click **"Add file"** → **"Create new file"**
   - Type: `tools/downloader.html`
   - Paste the code from downloader.html
   - Click **"Commit"**
5. Repeat for:
   - `tools/cms-detect.html`
   - `tools/tool-template.html`

**Method B - Git Command Line:**

```bash
cd your-local-folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/xvs-tools.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **"Pages"** in left sidebar
3. Under **"Source"**:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **"Save"**
5. Wait 1-2 minutes

**Your site is live at:** `https://YOUR-USERNAME.github.io/xvs-tools/`

## ✨ Features

### 🎥 Downloader Tool
- **15+ Platforms Supported:**
  - YouTube (Video/Audio)
  - Instagram (Posts/Reels/Stories)
  - TikTok
  - Facebook
  - Twitter/X
  - Pinterest
  - Vimeo
  - Reddit
  - SoundCloud
  - Spotify
  - Twitch
  - Dailymotion
  - Tumblr
  - Imgur
  - Streamable

- **Smart AI Detection** - Paste any URL, platform auto-detected
- **Multiple Formats** - Choose quality/format per platform
- **No API Required** - Opens media in browser for download
- **Beautiful UI** - Purple gradient, smooth animations

### 🔍 CMS Detect Tool
- Detect website CMS (Content Management System)
- Show technology stack
- Version detection
- Confidence scoring

## 🎨 Adding New Tools

### Quick Method:

1. **Copy template:**
   ```bash
   cp tools/tool-template.html tools/my-tool.html
   ```

2. **Edit `config.js`:**
   ```javascript
   const TOOLS = [
     {
       name: 'DOWNLOADER',
       file: 'tools/downloader.html'
     },
     {
       name: 'CMS DETECT',
       file: 'tools/cms-detect.html'
     },
     {
       name: 'MY NEW TOOL',           // ← Add here
       file: 'tools/my-tool.html'     // ← Your file
     }
   ];
   ```

3. **Done!** Your tool appears on the main page automatically.

## 🔧 Customization

### Change Branding:

In `index.html`, find and replace:
```html
<h1>Tools by @shakilxvs</h1>
```
Change to your name/brand.

### Add More Platforms to Downloader:

Edit `tools/downloader.html`, find `PLATFORMS` object and add:
```javascript
newplatform: {
    name: 'New Platform',
    icon: '🎯',
    patterns: [/newplatform\.com/],
    formats: ['HD Video', 'Audio'],
    getDownloadUrl: (url) => url
}
```

### Customize Colors:

In any HTML file's `<style>` section:
```css
/* Purple input background */
background: #6b4ce6;

/* Teal button */
background: #16a085;

/* Dark gradient */
background: linear-gradient(180deg, #000000 0%, #1a0a2e 50%, #0f0520 100%);
```

## 💡 How Downloader Works (No API)

1. **User pastes URL** → Platform auto-detected
2. **Click DOWNLOAD** → Opens URL in new tab
3. **Browser handles download** → No backend needed!

For advanced downloading (extract direct media URLs), you'd need:
- Backend API (Node.js/Python)
- Libraries like `yt-dlp`, `instaloader`
- Hosted on Heroku/Vercel/Railway

Current version opens URLs directly for browser to handle.

## 📱 Responsive Design

All tools work perfectly on:
- 💻 Desktop
- 📱 Mobile
- 📊 Tablet

## ⚠️ Important Notes

### Legal Disclaimer:
- **Educational purposes only**
- Downloading copyrighted content may violate:
  - Platform Terms of Service
  - Copyright laws
  - DMCA regulations
- Always ensure you have rights to download content
- Use responsibly and ethically

### Technical Limitations:
- Frontend-only (no actual file processing)
- Relies on browser download capability
- Some platforms may block direct downloads
- For production use, implement proper backend

## 🐛 Troubleshooting

**Tools not showing on main page?**
- Check `config.js` syntax
- Ensure `TOOLS` array is valid JavaScript
- Check browser console (F12) for errors

**Download not working?**
- Allow pop-ups for this site
- Some platforms require authentication
- Direct download may not work for all platforms

**Styling looks broken?**
- Clear browser cache (Ctrl+Shift+R)
- Check all CSS files loaded
- Verify folder structure matches docs

**404 on GitHub Pages?**
- Wait 2-3 minutes after enabling Pages
- Check Settings → Pages for build status
- Ensure branch is set to `main`

## 🎯 Future Enhancements

Want to improve? Consider adding:
- [ ] Batch download multiple URLs
- [ ] Download history/favorites
- [ ] Dark/light theme toggle
- [ ] More platforms
- [ ] Quality selector
- [ ] Progress indicators
- [ ] Browser extension version

## 📝 Example Tools You Could Build

Using `tool-template.html`, create:
- Password Generator
- QR Code Generator
- Image Converter
- Text Case Converter
- Base64 Encoder/Decoder
- JSON Formatter
- Color Picker
- URL Shortener
- Hash Generator
- Lorem Ipsum Generator

## 🤝 Contributing

This is a personal/educational project. Feel free to:
- Fork and customize
- Add new platforms
- Create new tools
- Improve UI/UX
- Share with others (with credit)

## 📧 Contact

Questions? Suggestions? Contact via the button on main page.

## 🙏 Credits

**Made with ❤️ by @shakilxvs**

*Technology Stack:*
- Pure HTML/CSS/JavaScript
- No frameworks required
- No build process needed
- Works offline after first load

---

## 📄 License

Educational use only. Use responsibly.

**Remember:** With great power comes great responsibility! 🦸‍♂️

---

**Enjoy your XVS Tools! 🎉**

*Star ⭐ this repo if you find it useful!*