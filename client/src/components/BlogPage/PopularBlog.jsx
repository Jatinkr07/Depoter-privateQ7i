/* eslint-disable react/no-unescaped-entities */
import blogImg from "../../assets/blog/blog1.jpg";
export default function PopularBlogs() {
  return (
    <section className="px-4 py-12 text-center">
      <h3 className="mb-8 text-2xl font-normal md:text-5xl">Popular Blogs</h3>
      <div className="grid grid-cols-1 gap-8 md:px-24 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            img: blogImg,
            title:
              "Don't miss a single match this season. Whether it's an away",
            name: "Mitchal",
            time: "10 min ago",
          },
          {
            img: blogImg,
            title: "Game or international tournament, Whether it's an away",
            name: "Mitchal",
            time: "2h ago",
          },
          {
            img: blogImg,
            title:
              "Download to start streaming all major leagues, buffer-free.",
            name: "Mitchal",
            time: "1h ago",
          },
        ].map((blog, index) => (
          <div
            key={index}
            className="p-6 transition bg-white shadow-md cursor-pointer rounded-3xl hover:border hover:border-gray-200 hover:shadow-xl"
          >
            <img
              src={blog.img}
              alt={`Blog ${index + 1} Image`}
              className="w-full rounded-3xl"
            />
            <h4 className="mt-4 text-lg font-semibold text-left">
              {blog.title}
            </h4>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>By {blog.name}</span>
              <span>{blog.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
