global.testPluginRuns = 1;

function testPlugin({addUtilities, addComponents, e, prefix, config}) {
    console.log(`\n\n\tRUNNING TAILWIND #${global.testPluginRuns}\n`);
    global.testPluginRuns++;

    return '';
}

module.exports = function() {
    return testPlugin;
}
