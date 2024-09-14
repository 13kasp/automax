import GradientText from "../components/GradientText";
import client from "../client";
import { useEffect, useState } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function NewsPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = `*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`;

  useEffect(() => {
    setIsLoading(true);

    const fetchPosts = async () => {
      try {
        const data = await client.fetch(query);
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [query]);

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleDateString("lt", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="py-28 pb-20">
      <div className={isLoading ? "" : "hidden"}>
        <div className="z-50 w-full h-full fixed bg-white"></div>
        <LoadingSpinner extraStyles="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-50 border-lBlue" />
      </div>
      <div className="md:flex md:justify-between items-center align-middle w-full text-center md:text-left">
        <div className="bg-white w-full p-6 md:p-10 flex justify-center">
          <div className="md:max-w-[1400px] md:w-full">
            <div className="flex justify-center mb-8 md:mb-14">
              <GradientText
                type="h1"
                extraStyles="text-center text-3xl md:text-5xl font-semibold"
              >
                Naujienos
              </GradientText>
            </div>
            <div className="flex flex-col gap-6 md:gap-14">
              {posts.map((post) => (
                <article
                  key={post.slug.current}
                  className="text-left h-fit border flex flex-col md:flex-row gap-6 md:gap-10 rounded-xl duration-150 overflow-hidden p-4 md:p-6"
                >
                  <div className="w-fit h-full">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="rounded-lg aspect-square w-auto md:max-w-[24rem]"
                    />
                  </div>
                  <div className="flex flex-col gap-6 h-full">
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <h3 className="font-semibold text-xl md:text-2xl">
                        {post.title}
                      </h3>
                      <p className="text-neutral-500 md:text-right lg:whitespace-nowrap">
                        {formatDate(post.publishedAt)}
                      </p>
                    </div>

                    <SanityBlockContent
                      blocks={post.body}
                      projectId="0mdakb4k"
                      dataset="production"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
