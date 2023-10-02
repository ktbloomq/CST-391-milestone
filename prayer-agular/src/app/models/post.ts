export class Post {
    public postID: number = -1;
    public userID: number = -1;
    public content: string = "";
    public likes: number = 0;
    public parent_post: number | null = null;

    constructor(postID: number, userID: number, content: string, likes: number, parent_post: number | null) {
        this.postID = postID;
        this.userID = userID;
        this.content = content;
        this.likes = likes;
        this.parent_post = parent_post;
    }
}
