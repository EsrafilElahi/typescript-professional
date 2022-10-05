type TBlog = {
    id: number;
    title: string;
    text: string;
    date: Date;
    author: string;
}
type TBlogUpdate = {
    id?: number;
    title?: string;
    text?: string;
    date?: Date;
    author?: string;
}
type ResponseMessage = {
    message: string;
    statusCode: number
}
 interface IBlog {
    Blogs: TBlog[];
    
    create(blog: TBlog): ResponseMessage;
    update(id: number, data: TBlogUpdate): ResponseMessage;
    delete(id: number): ResponseMessage;
    getBlogs(): TBlog[];
 }
 class Blog implements IBlog {
    readonly Blogs: TBlog[] = [];
    public create(blog: TBlog): ResponseMessage {
        return {
            statusCode: 201,
            message: ""
        }
    }
    public update(id: number, data: TBlogUpdate): ResponseMessage {
        return {
            statusCode: 200,
            message: ""
        }
    }
    public delete(id: number): ResponseMessage {
        return {
            statusCode: 200,
            message: ""
        }
    }
    public getBlogs(): TBlog[] {
        return this.Blogs
    }
 }