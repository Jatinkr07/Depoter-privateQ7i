import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify"; // Import DOMPurify
import API_URL from "../../utils/api";

export default function ParticularBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching the blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <p className="text-xl text-center text-gray-600">Loading...</p>;
  }

  // Sanitize the blog content using DOMPurify
  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <article className="max-w-4xl px-4 py-24 mx-auto md:py-28">
      {/* Title and metadata */}
      <header className="mb-8 space-y-6 text-center">
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] leading-tight font-bold text-zinc-800">
          {blog.title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-600 sm:text-base">
          <time dateTime={new Date(blog.createdAt).toISOString()}>
            {new Date(blog.createdAt).toLocaleDateString()}{" "}
          </time>
          <span>•</span>
          <div className="flex items-center gap-1">
            By{" "}
            <span className="text-blue-600 hover:text-blue-700">
              {blog.author}
            </span>
          </div>
        </div>
      </header>

      {/* Centered Blog Image */}
      {blog.images?.[0] && (
        <div className="relative w-full mb-8">
          <img
            src={`${API_URL}${blog.images[0]}`}
            alt={`Image for ${blog.title}`}
            className="w-full rounded-lg shadow-lg object-cover h-[400px] sm:h-[500px] md:h-[450px]"
          />
        </div>
      )}

      <div className="px-4 mx-auto space-y-6 prose prose-lg text-left max-w-none">
        <p className="text-xl sm:text-2xl">{blog.description}</p>
        <div
          className="mt-4 text-lg sm:text-xl"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
      </div>
    </article>
  );
}
