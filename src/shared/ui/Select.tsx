import { forwardRef } from 'react'

const Select = forwardRef((props: Props, ref) => {
  const { onBlur, defaultValue, title, options, name, selectedvalue, ...rest } = props

  const handleChange = (e) => {
    selectedvalue(e.target.value);
    console.log("test ",e.target.value)
  }

  return (
    <div className="p-1">
      {title && <label className="font-medium uppercase" htmlFor={name}>
        {title}
      </label>
      }
      <select
        name={name}
        onChange={e=>handleChange(e)}
        onBlur={onBlur}
        ref={ref}
        {...rest}
        className="appearance-none p-3 rounded-2xl w-full bg-dark-3 mt-1 mb-5 focus:outline-none cursor-pointer"
      >
        <option value="">{defaultValue}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
})

export default Select
