import { Card, FullButton, Input, Error } from 'shared/ui'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'
import { loginTeam } from 'shared/queries'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useAuth } from '../../config/auth.context'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const { login: loginSuccessful } = useAuth()

  const [couldntLogin, setCouldntLogin] = useState<String | null>(null)
  const router = useHistory()

  const [login, { loading }] = useMutation(loginTeam)

  const onSubmit = credentials => {
    login({ variables: { credentials } }).then(async (response: any) => {
      if (response?.data?.login) {
        await loginSuccessful(response.data.login)
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
        <FullButton type="submit" contained disabled={loading}>
          Login
        </FullButton>
      </form>
    </Card>
  )
}

export default Login
