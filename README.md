## prettier

## npx mrm lint-staged

## eslint-config-prettier

# Install commitlint cli and conventional config

npm install --save-dev @commitlint/{config-conventional,cli}

# For Windows:

npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Configure commitlint to use conventional config

echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
