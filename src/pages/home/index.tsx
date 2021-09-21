import { Card, Button, Input, Select } from 'shared/ui'
import { useForm } from 'react-hook-form'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  console.log({
    errors: getFormErrors(errors),
  })
  const onSubmit = data => {
    console.log({
      data,
    })
  }

  return (
      <Card title="Something">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="username"
            register={register}
            validate={validators.username}
            placeholder="my-user-name"
          />
          <Input
            name="password"
            type="password"
            register={register}
            validate={validators.password}
            placeholder="my-pass-word"
          />
          <Input
            name="name"
            register={register}
            validate={validators.name}
            placeholder="my-na-me"
          />
          <Select
            defaultValue="Choose from the List"
            name="language"
            {...register('language', {})}
            options={[
              { value: 'cpp', label: 'C++' },
              { value: 'c', label: 'C' },
              { value: 'java', label: 'Java' },
            ]}
          />

          <Button type="submit" contained>
            submit
          </Button>
        </form>
      </Card>
  )
}

export default Home
