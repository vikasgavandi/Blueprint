# 🧱 Blueprintr CLI

A powerful command-line tool to generate project structures from JSON blueprints. Perfect for developers who frequently create new projects, prototypes, or microservices.

## 🚀 Installation

### Global Installation
```bash
npm install -g blueprintr-cli
```

### Use with npx (No Installation Required)
```bash
npx blueprintr-cli <project-name> --file=<structure.json>
```

## 📖 Usage

### Basic Command
```bash
blueprintr <project-name> --file=<structure.json>
```

### Parameters
- `<project-name>`: Name of the directory to create (default: "new-project")
- `--file=<path>`: Path to your JSON structure file (required)

## 📋 Examples

### Simple Node.js Project
Create `node-structure.json`:
```json
{
  "src": {
    "index.js": "console.log('Hello World!');",
    "utils": {
      "helper.js": "module.exports = { greet: (name) => `Hello ${name}!` };"
    }
  },
  "package.json": "{\n  \"name\": \"my-project\",\n  \"version\": \"1.0.0\",\n  \"main\": \"src/index.js\"\n}",
  "README.md": "# My Project\n\nA sample Node.js project.",
  ".gitignore": "node_modules/\n.env\n*.log"
}
```

Generate project:
```bash
blueprintr my-node-app --file=node-structure.json
```

### React Project Structure
Create `react-structure.json`:
```json
{
  "src": {
    "components": {
      "App.js": "import React from 'react';\n\nfunction App() {\n  return <h1>Hello React!</h1>;\n}\n\nexport default App;"
    },
    "index.js": "import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './components/App';\n\nReactDOM.render(<App />, document.getElementById('root'));"
  },
  "public": {
    "index.html": "<!DOCTYPE html>\n<html>\n<head><title>React App</title></head>\n<body><div id=\"root\"></div></body>\n</html>"
  },
  "package.json": "{\n  \"name\": \"react-app\",\n  \"version\": \"1.0.0\",\n  \"dependencies\": {\n    \"react\": \"^18.0.0\",\n    \"react-dom\": \"^18.0.0\"\n  }\n}"
}
```

### Express API Structure
Create `api-structure.json`:
```json
{
  "src": {
    "routes": {
      "users.js": "const express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => {\n  res.json({ message: 'Users endpoint' });\n});\n\nmodule.exports = router;"
    },
    "app.js": "const express = require('express');\nconst app = express();\n\napp.use('/api/users', require('./routes/users'));\n\napp.listen(3000, () => console.log('Server running on port 3000'));"
  },
  "package.json": "{\n  \"name\": \"api-server\",\n  \"version\": \"1.0.0\",\n  \"main\": \"src/app.js\",\n  \"dependencies\": {\n    \"express\": \"^4.18.0\"\n  }\n}"
}
```

## 🏗️ Blueprint Format

### Structure Rules
- **Folders**: Represented as objects with nested content
- **Files**: Represented as strings containing file content
- **Nested Structures**: Unlimited depth supported

### JSON Structure Example
```json
{
  "folder-name": {
    "subfolder": {
      "file.txt": "File content here"
    },
    "another-file.js": "console.log('Hello');"
  },
  "root-file.md": "# Root level file"
}
```

### Special Characters in Content
- Use `\n` for new lines
- Use `\"` for quotes in JSON strings
- Use `\\` for backslashes

## 🎯 Use Cases

- **Rapid Prototyping**: Quickly scaffold new projects
- **Template Generation**: Create reusable project templates
- **Microservices**: Generate consistent service structures
- **Learning**: Create example projects for tutorials
- **Team Standardization**: Ensure consistent project layouts

## 🔧 Advanced Usage

### Multiple Templates
Create different templates for different project types:
```bash
# Node.js API
blueprintr my-api --file=templates/node-api.json

# React App
blueprintr my-react-app --file=templates/react.json

# Express Server
blueprintr my-server --file=templates/express.json
```

### Complex File Content
For complex files, consider using escaped JSON:
```json
{
  "config.js": "module.exports = {\n  database: {\n    host: 'localhost',\n    port: 5432\n  }\n};"
}
```

## 📝 Tips

1. **Keep templates organized**: Store your blueprint files in a `templates/` directory
2. **Version control**: Track your blueprint files in git for team sharing
3. **Test blueprints**: Always test your JSON structure before using
4. **Use meaningful names**: Name your blueprint files descriptively

## 🐛 Troubleshooting

### Common Issues

**Invalid JSON Format**
```
❌ Failed to parse JSON structure file. Please check the format.
```
*Solution*: Validate your JSON using a JSON validator

**File Not Found**
```
❌ Structure file not found: structure.json
```
*Solution*: Check the file path and ensure the file exists

**Missing --file Parameter**
```
❌ Please provide a structure file using --file=<path-to-structure.json>
```
*Solution*: Always include the --file parameter with your blueprint path

## 📄 License

MIT License - feel free to use in your projects!

## 🤝 Contributing

Contributions welcome! Please check the [GitHub repository](https://github.com/vikasgavandi/Blueprint) for issues and pull requests.

---

**Happy coding! 🚀**