#!/bin/bash
# Hetzner Ubuntu 22.04 — tek seferlik kurulum
# Çalıştır: bash setup.sh
set -e

# ── Node.js 20 LTS ─────────────────────────────────────────────────────────
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx certbot python3-certbot-nginx

# ── PM2 ────────────────────────────────────────────────────────────────────
sudo npm install -g pm2
pm2 startup systemd -u "$USER" --hp "$HOME"

# ── Repo ───────────────────────────────────────────────────────────────────
sudo mkdir -p /var/www/vandaq
sudo chown "$USER":"$USER" /var/www/vandaq
cd /var/www/vandaq
git clone https://github.com/Akomihasso/vandaq-com-web.git .

# ── Bağımlılıklar + build ──────────────────────────────────────────────────
cd site
npm ci
# .env.local dosyasını oluştur ve BREVO_API_KEY'i gir:
# nano .env.local
#   BREVO_API_KEY=your_key_here
#   CONTACT_FROM_EMAIL=bilgi@vandaq.com
#   CONTACT_FROM_NAME=VANDAQ
npm run build

# ── PM2 başlat ─────────────────────────────────────────────────────────────
pm2 start ecosystem.config.js --env production
pm2 save

# ── Nginx ──────────────────────────────────────────────────────────────────
sudo cp deploy/nginx.conf /etc/nginx/sites-available/vandaq
sudo ln -sf /etc/nginx/sites-available/vandaq /etc/nginx/sites-enabled/vandaq
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

# ── SSL (Let's Encrypt) ────────────────────────────────────────────────────
# DNS Turhost panelinde A kaydı bu sunucunun IP'sine çevrilmiş olmalı.
sudo certbot --nginx -d vandaq.com -d www.vandaq.com --non-interactive --agree-tos -m bilgi@vandaq.com

echo "Kurulum tamamlandı. vandaq.com çalışıyor."
