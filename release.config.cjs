/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
    branches: [
        {
            name: 'main',
        },
    ],
    plugins: [
        [
            '@semantic-release/github',
            {
                'assets': [
                    {'path': 'index.pdf'},
                ],
            },
        ],
    ],
};
