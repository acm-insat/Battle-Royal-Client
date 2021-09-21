import { Card, FullButton, Input, Error } from 'shared/ui'
import { useForm } from 'react-hook-form'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'

const Login = () => {
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
                    <Error msg="Username does not exist."/>
                    <Error msg="Incorrect password."/>
                   
                    <br/>
                    <FullButton type="submit" contained>
                        Login
                    </FullButton>
                </form>
            </Card>
    )
}

export default Login