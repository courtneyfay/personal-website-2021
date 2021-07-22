const path = require('path');
const fs = require('fs');
const { promises } = fs;
console.log('fs', fs)

const parseMetadata = (lines, metadataIndices) => {
    if (!metadataIndices || !lines || lines.length === 0) return [];
    let obj = {};
    if (metadataIndices.length > 0) {
        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
        metadata.forEach(line => {
            obj[line.split(": ")[0]] = line.split(": ")[1];
        });
        return obj;
    }
};

const parseContent = (lines, metadataIndices) => {
    if (!metadataIndices || !lines || lines.length === 0) return [];
    if (metadataIndices.length > 0) {
        lines = lines.slice(metadataIndices[1] + 1, lines.length);
    }
    return lines.join("\n");
};

const buildPostObject = (metadata, content, index) => {
    if (!metadata || metadata.length === 0) return {};
    return {
        id: index ? index + 1 : "No id given",
        title: metadata.title ? metadata.title : "No title given",
        date: metadata.date ? metadata.date : "No date given",
        tags: metadata.tags ? metadata.tags : "No tags given",
        content: content ? content : "No content given",
    }
}

const createPost = (lines, metadataIndices, index) => {
    if (!lines || lines.length === 0 || !metadataIndices || metadataIndices.length === 0) return [];
    const metadata = parseMetadata(lines, metadataIndices);
    const content = parseContent(lines, metadataIndices);
    return buildPostObject(metadata, content, index);
};

const getFileLines = async (directoryPath, fileName) => {
    if (!directoryPath || !fileName) return '';
    const filePath = `${directoryPath}/${fileName}`;
    const contents = await promises.readFile(filePath, 'utf8');
    return contents.split("\n");
}

const getMetadataIndices = (lines, defaultAccumulator) => {
    if (!lines || !defaultAccumulator) return [];
    const reduceMetadataIndices = (accumulator, element, i) => {
        if (/^---/.test(element)) {
            accumulator.push(i)
        }
        return accumulator;
    };

    return lines.reduce(reduceMetadataIndices, defaultAccumulator)
}

const getPosts = async (folderName) => {
    if (!folderName) return [];
    console.log('folderName', folderName)
    console.log('__dirname', __dirname)
    const directoryPath = path.join(__dirname, folderName);
    console.log('directoryPath', directoryPath)
    const files = await promises.readdir(directoryPath);
    console.log('files', files)
    const posts = files.map(async (file, index) => {
        const lines = await getFileLines(directoryPath, file, index);
        const metadataIndices = getMetadataIndices(lines, []);
        return createPost(lines, metadataIndices, index);
    });
    const resolvedPosts = await Promise.all(posts)
    if (resolvedPosts) {
        return JSON.stringify(resolvedPosts);
    }
}

export default getPosts;

export {
    buildPostObject,
    createPost,
    getFileLines,
    getMetadataIndices,
    parseContent,
    parseMetadata,
}