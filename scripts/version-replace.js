const { task, src } = require('gulp');
const { platform } = require('os');
const { spawnSync } = require('child_process');

const fs = require('fs');
const path = require('path');

const buildVersion = require('./../package.json').version;
const versionPlaceholderText = '0.0.0-PLACEHOLDER';
const versionPlaceholderRegex = new RegExp(versionPlaceholderText, 'g');

/**
 * Replace version of dist/<package>/package.json and other files to repository version
 */
task('replaceVersion', () => {
    const rootFolder = path.join(__dirname, '../');
    const distFolder = path.resolve(rootFolder, './dist');

    return src([`${rootFolder}/package.json`]).on('end', () => replaceVersionPlaceholders(distFolder));
});

/**
 * Changes all files in the directory entered as a parameter, containing 0.0.0-PLACEHOLDER
 * to the version of the project's package.json root
 */
function replaceVersionPlaceholders(packageDir) {
    // Search all files containing version placeholders, using findstr and grep
    const files = findFilesWithPlaceholders(packageDir);

    // Browse all files containing version placeholders and replace them with the version of package.json in the root folder
    files.forEach((filePath) => {
        const fileContent = fs.readFileSync(filePath, 'utf-8').replace(versionPlaceholderRegex, buildVersion);

        fs.writeFileSync(filePath, fileContent);
    });
}

/**
 * Finds all files in the specified package directory
 */
function findFilesWithPlaceholders(packageDir) {
    const findCommand = buildPlaceholderFindCommand(packageDir);
    return spawnSync(findCommand.binary, findCommand.args)
        .stdout.toString()
        .split(/[\n\r]/)
        .filter(String);
}

/**
 * Compiles the command that will be executed to find all files that contain 0.0.0-PLACEHOLDER
 */
function buildPlaceholderFindCommand(packageDir) {
    if (platform() === 'win32') {
        return {
            binary: 'findstr',
            args: ['/msi', `${versionPlaceholderText}`, `${packageDir}\\*`]
        };
    } else {
        return {
            binary: 'grep',
            args: ['-ril', `${versionPlaceholderText}`, packageDir]
        };
    }
}
