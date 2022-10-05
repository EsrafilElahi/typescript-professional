/* eslint-disable jsx-a11y/img-redundant-alt */

import { FC } from "react";
import { PropsBlogs } from "../types/blog.types";
import BlogCardComponent from "./BlogCard";

const BlogsList: FC<PropsBlogs> = ({blogs}) => {
    const Cards: JSX.Element[] = blogs.map((blog, key) => (
        <BlogCardComponent blog = {blog} key={key} />
    ))
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4 p-5">
                {Cards}
            </div>
        </>
    );
}
export default BlogsList