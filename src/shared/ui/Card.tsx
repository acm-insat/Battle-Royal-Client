import { isString } from 'lodash'

const Card = (props: Props) => {
  const { children, title } = props

  const Header = () => {
    if (isString(title)) return <h1 className="text-2xl font-bold">{title}</h1>
    return title
  }
  return (
    <div className="text-white my-10 p-7 w-full rounded-xl h-auto bg-dark-2 shodow hover:shadow-xl duration-300">
      <div className="flex items-center px-3">
        <Header />
      </div>
      <div className="py-4">
        <hr />
      </div>
      {children}
    </div>
  )
}

type Props = {
  children: any
  title: JSX.Element | string
}

export default Card
