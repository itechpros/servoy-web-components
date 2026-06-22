# Adding a package.json Dependency

Add the dependency at the project's root level AND at the project level.

```bash
npm i --save --legacy-peer-deps --package-lock-only <package>
```

Then modify `ng-package.json` and add the package name(s) to `allowedNonPeerDependencies`.

# Making a New Titanium Component Release

```bash
npm i --legacy-peer-deps && npm run make_release
```