Books = new Mongo.Collection('Books');
//console.log(Books);


TabularTables = {};

TabularTables.Books = new Tabular.Table({
  name: "Books",
  collection: Books,
  columns: [
    {data: "title", title: "Title"},
    {data: "author", title: "Author"},
    {data: "copies", title: "Copies Available"},
    {data: "summary", title: "Summary"}
  ]
});

Books.insert({title: "The Cat In The Hat", author: "Dr. Seuss", copies: "12", summary: "Children's book"});
