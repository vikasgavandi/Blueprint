# 🧱 Blueprintr

Generate project structures from JSON blueprints.

## Installation

```bash
npm install -g @vikasdev/blueprintr
```

## Usage

```bash
blueprintr <project-name> --file=<structure.json>
```

## Example

Create `structure.json`:
```json
{
  "src": {
    "index.js": "console.log('Hello World');",
    "utils": {
      "helper.js": "module.exports = { test: () => 'test' };"
    }
  },
  "package.json": "{\n  \"name\": \"my-project\",\n  \"version\": \"1.0.0\"\n}",
  "README.md": "# My Project"
}
```

Generate project:
```bash
blueprintr my-app --file=structure.json
```

## Blueprint Format

- **Folders**: Objects with nested structure
- **Files**: String values containing file content

## License

MIT