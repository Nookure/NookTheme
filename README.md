
# EspressoTheme

NookTheme is a free and open-source [Pterodactyl theme](https://pterodactyl.io) designed to provide a clean, simple, and modern look for your panel. It is optimized for use with Espresso Host, offering a streamlined user interface and functionality.


## Installation

Ensure you are using the latest version of the NookTheme for Espresso Host. To verify the version, check the branch name.

<details>
<summary>Upgrade PHP</summary>

Before proceeding with the installation steps, please ensure your PHP version is upgraded to 8.2 or newer. Follow these steps to upgrade PHP:

1. Update your package list:
```bash
sudo apt update
```

2. Install required dependencies:
```bash
sudo apt install -y software-properties-common
```

3. Add the PHP repository:
```bash
sudo add-apt-repository ppa:ondrej/php
```

4. Update your package list again:
```bash
sudo apt update
```

5. Install PHP 8.3:
```bash
sudo apt install -y php8.3
```

6. Verify the PHP version:
```bash
php -v
```

</details>

### Enter Maintenance Mode

To prevent users from encountering unexpected errors while updating, place your panel into maintenance mode:

```bash
cd /var/www/pterodactyl
php artisan down
```

### Download the Theme

To update to the latest version of NookTheme, download the release archive from GitHub with the following command:

```bash
curl -L https://github.com/Nookure/NookTheme/releases/latest/download/panel.tar.gz | tar -xzv
```

Once the files are downloaded, set the correct permissions for the cache and storage directories to avoid web server-related errors:

```bash
chmod -R 755 storage/* bootstrap/cache
```

### Update Dependencies

To upgrade the core components of the panel, run the following command:

```bash
composer install --no-dev --optimize-autoloader
```

### Clear Compiled Template Cache

Clear the compiled template cache to ensure new and modified templates show up correctly for users:

```bash
php artisan view:clear
php artisan config:clear
```

### Database Updates

Run the following command to update your database schema for the latest version:

```bash
php artisan migrate --seed --force
```

### Set Permissions

Set the appropriate owner for the files based on the user running your webserver. In most cases, it will be `www-data`, but it can vary depending on your server setup.

```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/pterodactyl/*

# If using NGINX on CentOS:
chown -R nginx:nginx /var/www/pterodactyl/*

# If using Apache on CentOS:
chown -R apache:apache /var/www/pterodactyl/*
```

### Restart Queue Workers

After updating, restart the queue worker to load the new code:

```bash
php artisan queue:restart
```

### Exit Maintenance Mode

Finally, exit maintenance mode so the panel can resume accepting connections:

```bash
php artisan up
```

## Documentation

* [Panel Documentation](https://pterodactyl.io/panel/1.0/getting_started.html)
* [Wings Documentation](https://pterodactyl.io/wings/1.0/installing.html)
* [Community Guides](https://pterodactyl.io/community/about.html)
* For additional help, join us [via Discord](https://discord.nookure.com/)

## Star History

<a href="https://star-history.com/#Nookure/NookTheme&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=Nookure/NookTheme&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=Nookure/NookTheme&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=Nookure/NookTheme&type=Timeline" />
  </picture>
</a>

## License

Pterodactyl® Copyright © 2015 - 2023 Dane Everitt and contributors.

> Nookure is not affiliated with Pterodactyl® Panel or its contributors.

Pterodactyl code released under the [MIT License](./LICENSE.md).

NookTheme code edits released under the [GNU GPLv3 License](./NookLicense.md).

---

*Modified by DevMatei for Espresso Host integration.*

