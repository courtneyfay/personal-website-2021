import getPosts, {
    buildPostObject,
    createPost,
    getFileLines,
    getMetadataIndices,
    parseMetadata,
    parseContent,
} from './main';
const path = require('path');

const lines = [
    '---',
    'title: My Second Post, Yo!',
    'date: Jul 6, 2021',
    'tags: [dog, bird]',
    '---',
    '',
    '# Heyyyyyaa',
    '',
    `"It's a beautiful thing"`,
    ''
];
const indices = [ 0, 4 ];

describe('main unit tests', ()=> {
    describe('getPosts', () => {
        test('if not given folder name, returns an empty array', async () => {
            const result = await getPosts();
            expect(result).toEqual([]);
        });
        test('if given file name, returns an JSON stringified array of posts', async () => {
            const result = await getPosts('../server/posts');
            expect(result).toEqual("[{\"id\":\"No id given\",\"title\":\"My First Post, Yo!\",\"date\":\"Jul 6, 2021\",\"tags\":\"[cat, bird]\",\"content\":\"\\n# Basics of Markdown\\n\\nMarkdown is the most popular markup language that can be used to format documents. It can be used to create _websites_,_ebooks_,_email_,_chats in discussions forums_.\\n\"},{\"id\":2,\"title\":\"My Second Post, Yo!\",\"date\":\"Jul 6, 2021\",\"tags\":\"[dog, bird]\",\"content\":\"\\n# Heyyyyyaa\\n\\n\\\"It's a beautiful thing\\\"\\n\"},{\"id\":3,\"title\":\"My Third Post, Yo!\",\"date\":\"Jul 19, 2021\",\"tags\":\"[dog, cat, bird]\",\"content\":\"\\n# Third third thid third\\n\\n\\\"Just remember, you are going to die\\\"\\n\"}]");
        });
    });
    describe('buildPostObject', () => {
        const metadata = parseMetadata(lines, indices);
        const content = parseContent(lines, indices);
        test('if given only metadata, should return empty array', () => {
            const result = buildPostObject(metadata);

            expect(result).toEqual({"content": "No content given", "date": "Jul 6, 2021", "id": "No id given", "tags": "[dog, bird]", "title": "My Second Post, Yo!"});
        });
        test('if given only content, should return empty object', () => {
            const nullResult = buildPostObject(null, content);
            expect(nullResult).toEqual({});

            const undefinedResult = buildPostObject(undefined, content);
            expect(undefinedResult).toEqual({});

            const emptyArrayResult = buildPostObject([], content);
            expect(emptyArrayResult).toEqual({});
        });
        test('if given only index, should return empty object', () => {
            const nullResult = buildPostObject(null, null, 1);
            expect(nullResult).toEqual({});

            const undefinedResult = buildPostObject(undefined, undefined, 1);
            expect(undefinedResult).toEqual({});

            const emptyArrayResult = buildPostObject([], [], 1);
            expect(emptyArrayResult).toEqual({});
        });
        test('if given metadata, content and an index, should return a post object', () => {
            const result = buildPostObject(metadata, content, 1);

            expect(result).toEqual({"content": `
# Heyyyyyaa

"It's a beautiful thing"
`,
            "date": "Jul 6, 2021",
            "id": 2,
            "tags": "[dog, bird]",
            "title": "My Second Post, Yo!"
        });
        });
    });
    describe('createPost', () => {
        test('if given only lines, should return empty array', () => {
            const result = createPost(lines);

            expect(result).toEqual([]);
        });
        test('if given only indices, should return empty array', () => {
            const nullResult = createPost(null, indices);
            expect(nullResult).toEqual([]);

            const undefinedResult = createPost(undefined, indices);
            expect(undefinedResult).toEqual([]);

            const emptyArrayResult = createPost([], indices);
            expect(emptyArrayResult).toEqual([]);
        });
        test('if given only index, should return empty array', () => {
            const nullResult = createPost(null, null, 1);
            expect(nullResult).toEqual([]);

            const undefinedResult = createPost(undefined, undefined, 1);
            expect(undefinedResult).toEqual([]);

            const emptyArrayResult = createPost([], [], 1);
            expect(emptyArrayResult).toEqual([]);
        });
        test('if given lines, indices, and id, should return a post object', () => {
            const result = createPost(lines, indices, 1);
            expect(result).toEqual({"content": `
# Heyyyyyaa

"It's a beautiful thing"
`,
                "date": "Jul 6, 2021",
                "id": 2,
                "tags": "[dog, bird]",
                "title": "My Second Post, Yo!"
            });
        });
    });
    describe('getFileLines', () => {
        const directoryPath = path.join(__dirname, "../server/posts");
        const fileName = 'TestPost.md';
        test('if given only directoryPath, should return empty string', async () => {    
            const result = await getFileLines(directoryPath);

            expect(result).toEqual('');
        });
        test('if given only fileName, should return empty string', async () => {    
            const nullResult = await getFileLines(null, fileName);
            expect(nullResult).toEqual('');

            const undefinedResult = await getFileLines(undefined, fileName);
            expect(undefinedResult).toEqual('');
        });
        test('if given directory path and file name, should return file contents split by linebreak', async () => {
            const result = await getFileLines(directoryPath, fileName);
            expect(result).toEqual([
                "---",
                "title: My First Post, Yo!",
                "date: Jul 6, 2021",
                "tags: [cat, bird]",
                "---",
                "",
                "# Basics of Markdown",
                "",
                "Markdown is the most popular markup language that can be used to format documents. It can be used to create _websites_,_ebooks_,_email_,_chats in discussions forums_.",
                ""
            ]);
        });
    });
    describe('getMetadataIndices', () => {
        test('if given only lines, should return empty array', () => {
            const result = getMetadataIndices(lines);
            expect(result).toEqual([]);
        });
        test('if given only default accumulator, should return empty array', () => {
            const nullResult = getMetadataIndices(null, []);
            expect(nullResult).toEqual([]);

            const undefinedResult = getMetadataIndices(undefined, []);
            expect(undefinedResult).toEqual([]);

            const emptyArrayResult = getMetadataIndices([], []);
            expect(emptyArrayResult).toEqual([]);
        });
        test('if given lines and default accumulator, should return array of indices with metadata', () => {
            const result = getMetadataIndices(lines, []);
            expect(result).toEqual([0, 4]);
        });
    })
    describe('parseContent', () => {
        test('if given only lines, should return empty array', () => {
            const result = parseContent(lines);

            expect(result).toEqual([]);
        });
        test('if given only indices, should return empty array', () => {
            const nullResult = parseContent(null, indices);
            expect(nullResult).toEqual([]);

            const undefinedResult = parseContent(undefined, indices);
            expect(undefinedResult).toEqual([]);

            const emptyArrayResult = parseContent([], indices);
            expect(emptyArrayResult).toEqual([]);
        });
        test('if given lines and indices, should return content string', () => {
            const result = parseContent(lines, indices);

            expect(result).toEqual(`
# Heyyyyyaa

"It's a beautiful thing"
`);
        });
    });
    describe('parseMetadata', () => {
        test('if given only lines, should return empty array', () => {
            const result = parseMetadata(lines);

            expect(result).toEqual([]);
        });
        test('if given only indices, should return empty array', () => {
            const nullResult = parseMetadata(null, indices);
            expect(nullResult).toEqual([]);

            const undefinedResult = parseMetadata(undefined, indices);
            expect(undefinedResult).toEqual([]);

            const emptyArrayResult = parseMetadata([], indices);
            expect(emptyArrayResult).toEqual([]);
        });
        test('if given lines and indices, should return content string', () => {
            const result = parseMetadata(lines, indices)

            expect(result).toEqual({"date": "Jul 6, 2021", "tags": "[dog, bird]", "title": "My Second Post, Yo!"});
        });
    });
});