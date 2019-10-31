module.exports = {
    "plugins": [
        "@babel/proposal-class-properties",
    ],
    "presets": [
        [
            "@babel/env", {
                "targets": {
                    "node": "10",
                },
                "modules": "commonjs",
            },
        ],
        "@babel/typescript",
    ]
}