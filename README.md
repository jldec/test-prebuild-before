# test-prebuild

- This branch has a funky `.gitpod.yml`

```yml
# .gitpod.yml
tasks:
  - name: Install dependencies
    before: |
      echo `gp url` >> before.txt
      npm install
  - name: In workspace
    command: |
      # npm start
      echo "Hello before-task"
```

touch
touch
touch
touch
