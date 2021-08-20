export class Quotes {
    id: number;
    name: string;
    category: string;
    quote: string;
    author: string;
    datePosted: Date;
    upvotes: number;
    downvotes: number;
    
    constructor(id: number, name: string, category: string, quote: string, author: string, datePosted: Date, upvotes: number, downvotes: number) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.quote = quote;
        this.author = author;
        this.datePosted = datePosted;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
}
