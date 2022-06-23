# test-prebuild

- This branch has a normal `.gitpod.yml`

```yml
# .gitpod.yml
tasks:
  - init: |
      sleep 30s
      npm install
    command: |
      npm start
```
