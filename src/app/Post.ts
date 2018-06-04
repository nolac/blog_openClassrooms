export class Post{
    title : string;
    content : string;
    loveIts : number;
    created_at : Date;

    constructor(title?:string,content?:string,created_on?:Date){
        this.title=title||"";
        this.content=content||"";
        this.created_at=created_on||new Date();
        this.loveIts=0;
    }
    
}