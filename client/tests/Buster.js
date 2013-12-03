var config = module.exports;

config["My tests"] = {
    environment: "browser",
    rootPath: '../',
    libs: [
        "vendors/jquery-1.10.2.js",
        "vendors/handlebars-v1.1.2.js",
        "vendors/module-loader-tdd.js"
    ],
    sources: [
        "app/**/*.js",
        "templates/**/*.hbs"
    ],
    tests: [
        "**/*-test.js"
    ]
};