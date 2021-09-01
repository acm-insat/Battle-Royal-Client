import { forwardRef } from 'react'

const Select = forwardRef((props: Props, ref) => {
  const { onChange, onBlur, defaultValue, options, name, ...rest } = props
  return (
    <div className="p-1">
      <label className="font-medium uppercase" htmlFor={name}>
        {name}
      </label>
      <select
        name={name}
        onChange={onChange}
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
