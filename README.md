I want to learn how actually monorepo work with TypeScript.

Key takeaways:

- `shared/` folder must build before use to prevent webpack runtime error when run `frontend`
- `shared` should list in frontend's `dependencies`
- `shared` must provide `main` and `type` in shared's `package.json`
