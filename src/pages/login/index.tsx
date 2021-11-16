import { Card, FullButton, Input, Error } from 'shared/ui'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'
import { loginTeam } from 'shared/queries'
import { useMutation } from '@apollo/client'
import { useState } from 'react'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const [couldntLogin, setCouldntLogin] = useState<String | null>(null)
  const router = useHistory()

  const [login] = useMutation(loginTeam)

  const onSubmit = credentials => {
    login({ variables: { credentials } }).then((response: any) => {
      if (response?.data?.login) {
        localStorage.setItem('token', response.data.login)
        router.push('/')
      } else setCouldntLogin('Couldnt Login, Check your Credentials')
    })
  }

  return (
    <Card title="Login Form">
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
          placeholder="pass-word"
        />

        {getFormErrors(errors).map(error => (
          <Error msg={error} key={error} />
        ))}

        {couldntLogin && <Error msg={couldntLogin} />}

        <br />
        <FullButton type="submit" contained>
          Login
        </FullButton>
      </form>
    </Card>
  )
}

export default Login
