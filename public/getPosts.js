const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, "../src/posts");
let postList = [];

const getPosts = async () => {
    await fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err);
        }
        files.forEach((file, index) => {
            let obj = {};
            let post;
            fs.readFile(`${directoryPath}/${file}`, 'utf8', (err, contents) => {
                const lines = contents.split("\n");
                const getMetadataIndices = (accumulator, element, index) => {
                    if (/^---/.test(element)) {
                        accumulator.push(index)
                    }
                    return accumulator;
                };
                const parseMetadata = (lines, metadataIndices) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1]);
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1];
                        });
                        return obj;
                    }
                };
                const parseContent = (lines, metadataIndices) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length);
                    }
                    return lines.join("\n");
                };
                const metadataIndices = lines.reduce(getMetadataIndices, []);
                const metadata = parseMetadata(lines, metadataIndices);
                const content = parseContent(lines, metadataIndices);
                post = {
                    id: index + 1,
                    title: metadata.title ? metadata.title : "No title given",
                    date: metadata.date ? metadata.date : "No date given",
                    tags: metadata.tags ? metadata.tags : "No tags given",
                    content: content ? content : "No content given",
                }
                postList.push(post);
            });
        })
    });
    setTimeout(() => {
        console.log('postList', postList)
    }, 500)
}

getPosts();