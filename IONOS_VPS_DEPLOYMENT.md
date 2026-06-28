# BWI Chauffeur - IONOS VPS Deployment Guide

## Prerequisites
- IONOS VPS with Ubuntu 22.04 or Debian 11
- Root or sudo access
- Domain pointed to VPS IP (bwichauffeur.com)

---

## Step 1: Initial Server Setup

SSH into your VPS:
```bash
ssh root@YOUR_VPS_IP
```

Update system:
```bash
apt update && apt upgrade -y
```

Install required packages:
```bash
apt install -y nginx python3 python3-pip python3-venv nodejs npm certbot python3-certbot-nginx git ufw
```

---

## Step 2: Configure Firewall

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

---

## Step 3: Create Application User

```bash
adduser --system --group --home /var/www/bwichauffeur bwichauffeur
```

---

## Step 4: Upload Your Code

**Option A - From GitHub:**
```bash
cd /var/www
git clone https://github.com/YOUR_USERNAME/bwichauffeur.git
chown -R bwichauffeur:bwichauffeur /var/www/bwichauffeur
```

**Option B - Upload via SCP:**
From your local machine:
```bash
scp -r ./frontend/build root@YOUR_VPS_IP:/var/www/bwichauffeur/frontend/
scp -r ./backend root@YOUR_VPS_IP:/var/www/bwichauffeur/
```

---

## Step 5: Setup Backend (FastAPI)

```bash
cd /var/www/bwichauffeur/backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# Install emergent integrations (for AI chatbot)
pip install emergentintegrations --extra-index-url https://d33sy5i8bnduwe.cloudfront.net/simple/
```

Create environment file:
```bash
nano /var/www/bwichauffeur/backend/.env
```

Add your environment variables:
```
MONGO_URL=mongodb+srv://YOUR_MONGODB_CONNECTION_STRING
DB_NAME=bwichauffeur
EMERGENT_API_KEY=your_emergent_api_key_here
```

---

## Step 6: Create Systemd Service for Backend

```bash
nano /etc/systemd/system/bwichauffeur-backend.service
```

Add this content:
```ini
[Unit]
Description=BWI Chauffeur FastAPI Backend
After=network.target

[Service]
Type=simple
User=bwichauffeur
Group=bwichauffeur
WorkingDirectory=/var/www/bwichauffeur/backend
Environment="PATH=/var/www/bwichauffeur/backend/venv/bin"
ExecStart=/var/www/bwichauffeur/backend/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
systemctl daemon-reload
systemctl enable bwichauffeur-backend
systemctl start bwichauffeur-backend
systemctl status bwichauffeur-backend
```

---

## Step 7: Configure Nginx

```bash
nano /etc/nginx/sites-available/bwichauffeur
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name bwichauffeur.com www.bwichauffeur.com;
    
    # Redirect www to non-www
    if ($host = www.bwichauffeur.com) {
        return 301 https://bwichauffeur.com$request_uri;
    }

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name bwichauffeur.com;

    # SSL certificates (will be added by certbot)
    # ssl_certificate /etc/letsencrypt/live/bwichauffeur.com/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/bwichauffeur.com/privkey.pem;

    # Frontend (React build)
    root /var/www/bwichauffeur/frontend/build;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # Backend API proxy
    location /api/ {
        proxy_pass http://127.0.0.1:8001/api/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # Health check endpoint
    location /health {
        proxy_pass http://127.0.0.1:8001/health;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    # Static files caching
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # React Router - serve index.html for all routes
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Favicon and robots
    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }

    location = /robots.txt {
        log_not_found off;
        access_log off;
    }
}
```

Enable the site:
```bash
ln -s /etc/nginx/sites-available/bwichauffeur /etc/nginx/sites-enabled/
rm /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx
```

---

## Step 8: Setup SSL with Let's Encrypt

```bash
certbot --nginx -d bwichauffeur.com -d www.bwichauffeur.com
```

Follow the prompts to complete SSL setup.

---

## Step 9: Update Frontend Environment

Before building, update the frontend `.env`:
```bash
# In /var/www/bwichauffeur/frontend/.env
REACT_APP_BACKEND_URL=https://bwichauffeur.com
```

If you need to rebuild:
```bash
cd /var/www/bwichauffeur/frontend
npm install
npm run build
```

---

## Step 10: Set Correct Permissions

```bash
chown -R bwichauffeur:bwichauffeur /var/www/bwichauffeur
chmod -R 755 /var/www/bwichauffeur
```

---

## Step 11: Test Your Deployment

1. Visit https://bwichauffeur.com
2. Test the chatbot (requires valid API key)
3. Test booking widget
4. Check all pages load correctly

---

## Useful Commands

**Check backend logs:**
```bash
journalctl -u bwichauffeur-backend -f
```

**Restart backend:**
```bash
systemctl restart bwichauffeur-backend
```

**Check Nginx logs:**
```bash
tail -f /var/log/nginx/error.log
tail -f /var/log/nginx/access.log
```

**Renew SSL certificates:**
```bash
certbot renew --dry-run
```

---

## MongoDB Setup

If you need to setup MongoDB locally on the VPS:
```bash
# Import MongoDB public key
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Add repository
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Install MongoDB
apt update
apt install -y mongodb-org

# Start MongoDB
systemctl start mongod
systemctl enable mongod
```

Or use **MongoDB Atlas** (recommended) - keep your existing connection string.

---

## Troubleshooting

**502 Bad Gateway:**
- Check if backend is running: `systemctl status bwichauffeur-backend`
- Check backend logs: `journalctl -u bwichauffeur-backend -n 50`

**Static files not loading:**
- Check permissions: `ls -la /var/www/bwichauffeur/frontend/build/`
- Check Nginx config: `nginx -t`

**API not working:**
- Verify backend is listening: `curl http://127.0.0.1:8001/health`
- Check environment variables in `/var/www/bwichauffeur/backend/.env`

---

## Support

For IONOS-specific issues, contact IONOS support.
For code-related issues, refer to the project documentation.
