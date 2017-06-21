/**
 * Created by JUEXINPC-008 on 2017/6/21.
 */
var program = require('commander')
program
    .version('0.0.1')
    .description('a test cli program')
    .option('-n, --name <name>', 'your name', 'GK')
    .option('-a, --age <age>', 'your age', '22')
    .option('-e, --enjoy [enjoy]')

program.parse(process.argv)