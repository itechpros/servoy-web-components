# Adding a package.json Dependency

Add the dependency at the project's root level.

```bash
npm i --save --legacy-peer-deps --package-lock-only <package>
```

Then add that package as a `peerDependency` in the package.json file in the project/ folder.

# Making a New Titanium Component Release

```bash
npm i --legacy-peer-deps && npm run make_release
```