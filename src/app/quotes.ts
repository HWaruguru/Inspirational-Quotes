export class Quote {
    id: number;
    name: string;
    quote: string;
    author: string;
    datePosted: Date;
    upvotes: number;
    downvotes: number;
    
    constructor(id: number, name: string, quote: string, author: string, datePosted: Date, upvotes: number, downvotes: number) {
        this.id = id;
        this.name = name;
        this.quote = quote;
        this.author = author;
        this.datePosted = datePosted;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
    }
    public popular: boolean = false;
}
