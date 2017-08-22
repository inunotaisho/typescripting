const typescripting = require('workshopper-adventure')({
    appDir: __dirname,
    languages: ['en', 'es', 'fr', 'ja', 'zh-cn', 'zh-tw', 'pt-br', 'ru', 'uk', 'vi', 'ko', 'nb-no', 'it'],
    header: require('workshpper-adventure/default/header'),
    footer: require('workshpper-adventure/default/footer'),
    fail: require('workshpper-adventure/default/fail'),
    pass: require('workshpper-adventure/default/pass')
})

typescripting.addAll([
    'HELLO WORLD TSC'
])

module.exports = typescripting