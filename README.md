# Django + Svelte

Starter pack for a Svelte app being loaded through a Django backend, using [django-vite](https://github.com/MrBin99/django-vite/).

Inspired by [rupert-br](https://github.com/rupert-br)'s blogpost: <https://www.rbd-solutions.com/blog/svelte-django/>

# Get started locally

To develop, you need to open two terminals and do the following:

1. Launch the backend with [UV](https://docs.astral.sh/uv/)

```shell
uv run python manage.py runserver
```

2. Go to `frontend_app` and launch the dev server. I used [pnpm](https://pnpm.io/) for the app's creation.

```shell
pnpm dev
```

As an option, you can build the frontend using `pnpm build`. it will spawn a `dist` folder at `static/assets`, where the `manifest.json` file lies. If you're planning to make the frontend available for production, don't forget to use the following command:

```shell
uv run python manage.py collectstatic
```

This will put all your static files inside the `STATIC_ROOT` parameter in `config/settings.py`.

# Resources used

The ressources listed below can be useful if you're planning to use ViteJS as an alternative to Webpack or Gulp. If you want to test the same configuration with another JS framework, you can use these ressources, as long as you keep Django and ViteJS's settings coherent.

* [ViteJS's backend integration guide](https://vite.dev/guide/backend-integration.html)
* [django-vite](https://github.com/MrBin99/django-vite)
* [whitenoise](https://whitenoise.readthedocs.io/en/stable/index.html) for static file serving
  
Happy hacking!
