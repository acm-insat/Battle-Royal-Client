import { getAllAnnouncements } from 'shared/queries'
import { wrapper } from 'shared/apollo.utils'
import { Announcement } from 'shared/ui'

const Announcements = props => {
  const {
    data: { announcements, loading },
  } = props

  const extractAnnouncements = arr =>
    arr
      ?.map(({ content, createdAt }) => ({
        content,
        createdAt: new Date(Number(createdAt)),
      }))
      .sort((a, b) => b.createdAt - a.createdAt)

  if (loading) return <h2 className="font-bold">News &amp; Announcements...</h2>
  return (
    <>
      <h2 className="font-bold">News &amp; Announcements</h2>
      <br />
      <div className="content mx-auto">
        {extractAnnouncements(announcements)?.map(a => (
          <Announcement key={a.createdAt} flair="new" title={a.content} />
        ))}
      </div>
    </>
  )
}

export default wrapper(getAllAnnouncements)(Announcements)
