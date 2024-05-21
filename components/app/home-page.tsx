"use client"

import { HomePageQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { TextBox, PullQuote, CaptionedImage, VideoPlayer } from "../RichText"
import moment from "moment"

export function HomePageComponent(props: {
  data: HomePageQuery
  variables: {}
  query: string
}) {
  const { data } = useTina(props)

  const title = data.page.title
  const content = data.page.body

  const postList = data.postConnection.edges

  return (
    <section className="prose-xl dark:prose-invert mx-auto w-full max-w-4xl">
      <h1 data-tina-field={tinaField(data.page, "title")}>{title}</h1>
      <article data-tina-field={tinaField(data.page, "body")}>
        <TinaMarkdown
          components={{ TextBox, PullQuote, CaptionedImage, VideoPlayer }}
          content={content}
        />
      </article>
      {postList && postList.length > 0 && (
        <section>
          <h2 className="mt-8 text-3xl">Latest Posts</h2>
          <ul className="list-[circle]">
            {postList.map((edge: any) => {
              return (
                <li key={edge.node.id} className="my-0">
                  <Link href={`/posts/${edge.node._sys.filename}`}>
                    {edge.node.title}{" "}
                    <span className="text-sm text-gray-400">
                      {" "}
                      - {moment(edge.node.date).format("MMM DD, YYYY")}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      )}
    </section>
  )
}
