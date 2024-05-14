import client from "@/tina/__generated__/client"

export default async function HomePage() {
  const result = await client.queries.page({ relativePath: "home.mdx" })

  return <div>hi from home</div>
}
