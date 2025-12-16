// plopfile.js
module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'Create a reusable component with all required files',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: 'What type of component is this?',
                choices: ['atoms', 'molecules', 'organisms', 'templates', 'dataviz', 'cards', 'modals', 'forms', 'utilities'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the component name? (e.g., StatusBadge)',
            },
            {
                type: 'confirm',
                name: 'includeVariants',
                message: 'Include CVA variants in the component?',
                default: true,
            },
        ],
        actions: function (data) {
            const actions = [
                // 1. Create the Component File
                {
                    type: 'add',
                    path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
                    templateFile: data.includeVariants
                        ? 'plop-templates/Component.tsx.hbs'
                        : 'plop-templates/ComponentSimple.tsx.hbs',
                },
                // 2. Create the Story File
                {
                    type: 'add',
                    path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                    templateFile: 'plop-templates/Component.stories.tsx.hbs',
                },
                // 3. Create the Test File
                {
                    type: 'add',
                    path: 'src/components/{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
                    templateFile: 'plop-templates/Component.test.tsx.hbs',
                },
                // 4. Create the Barrel (Index) File
                {
                    type: 'add',
                    path: 'src/components/{{type}}/{{pascalCase name}}/index.ts',
                    templateFile: 'plop-templates/index.ts.hbs',
                },
            ];

            return actions;
        },
    });
};
