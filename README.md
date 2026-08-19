# RHZ LAB

RHZ LAB is a premium cybersecurity learning and CTF laboratory interface built as a responsive React frontend. The current delivery is a polished command-center dashboard and content infrastructure concept based on the supplied product brief.

## Requirements

| Requirement | Recommended version |
|---|---|
| Node.js | 20 or newer |
| pnpm | 10 or newer |
| Operating system | Linux, macOS, or Windows with WSL |

## Run locally

```bash
git clone <YOUR_REPOSITORY_URL>
cd content-website
pnpm install
pnpm dev --host 0.0.0.0
```

The development server will print a local URL. On a Proxmox VM or LXC, use the VM/LXC IP address with port `3000`, for example `http://192.168.1.50:3000`.

## Production build

```bash
pnpm install
pnpm build
NODE_ENV=production PORT=3000 pnpm start
```

To run it as a persistent service on Proxmox, create a systemd unit such as `/etc/systemd/system/rhz-lab.service`:

```ini
[Unit]
Description=RHZ LAB web application
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/content-website
ExecStart=/usr/bin/env pnpm start
Environment=NODE_ENV=production
Environment=PORT=3000
Restart=always
RestartSec=5
User=www-data

[Install]
WantedBy=multi-user.target
```

Then enable it:

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now rhz-lab
sudo systemctl status rhz-lab
```

If `pnpm` is installed through a user-level Node manager, replace `ExecStart` with the absolute path returned by `which pnpm`, or use a small wrapper script that loads the Node environment before starting the service.

## Proxmox network access

For a VM or LXC that should be reachable from another device on the LAN, make sure the guest has a reachable IP address and that its firewall allows TCP port `3000`. You can verify the service inside the guest with:

```bash
curl http://127.0.0.1:3000
ss -tulpn | grep 3000
```

For a public deployment, put a reverse proxy such as Nginx or Caddy in front of the service and terminate TLS there. Keep port `3000` private to the guest network when possible.

## Available commands

```bash
pnpm dev       # Vite development server
pnpm check     # TypeScript check
pnpm build     # Production frontend and server build
pnpm start     # Start the production server
pnpm format    # Format the source tree
```

## Current scope

The current project is frontend-only. It includes the dashboard shell, responsive navigation, keyboard search modal with `Ctrl/Cmd + K`, progress telemetry, operation cards, creator-infrastructure messaging, and generated RHZ LAB visual assets. The actual challenge engine, authentication, persistence, creator CRUD, flags, hints, uploads, and user progress storage are intentionally not implemented yet.
