import { Link } from 'react-router-dom'

const styles = (contained: boolean = false, className: string = '') => {
  return `
    w-30 h-10 px-3 grid place-items-center duration-300 text-white
        ${
          contained &&
          `
             bg-red-2 rounded-md shadow  
             hover:shadow-xl hover:bg-red-4 
            
            `
        }
    ${className}
    `
}

const Button = (props: Props) => {
  const {
    href,
    children,
    contained,
    className,
    show = true,
    disabled = false,
    onClick,
    type = 'button',
  } = props

  if (!show) return <></>

  if (href)
    return (
      <Link to={href} className={styles(contained, className)}>
        {children}
      </Link>
    )

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles(contained, className)}
    >
      {children}
    </button>
  )
}

type Props = {
  href?: string
  children: any
  contained?: boolean
  className?: string
  show?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default Button
