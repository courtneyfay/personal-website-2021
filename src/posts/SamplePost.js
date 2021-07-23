const title = 'My First Post, Yo!'
const date = 'Jul 6, 2021'
const markdown =
`A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
- [ ] todo
- [x] done

A table:

| a   | b   |
| --- | --- |

## Basics of Markdown

Markdown is the most popular markup language that can be used to format documents. It can be used to create _websites_,_ebooks_,_email_,_chats in discussions forums_.

`

const file = {
    date,
    title,
    markdown,
}

export default file;
