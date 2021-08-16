import Card from 'shared/ui/Card'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import validate from './validate'
import Button from 'shared/ui/Button'

const Login = () => {
  const handleSubmit = (values, actions) => {
    // fetch
    console.log({ values })
    actions.setSubmitting(false)
  }

  return (
    <Card title="Login">
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label className="font-bold" htmlFor="username">
              Username
            </label>
            <Field
              type="text"
              placeholder="username"
              name="username"
              className="w-full p-3 mt-1 mb-5 bg-gray-100 rounded
focus:outline-none focus:shadow"
            />
            <ErrorMessage name="username" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Button type="submit" disabled={isSubmitting} contained>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  )
}

export default Login

/*
<div>
                

                    {error && (
                        <p className="my-3 rounded-md text-red-500 text-md bg-red-200 p-4 border border-red-500" >
                            {error}
                        </p>
                    )}
                    <form onSubmit={handleLogin} >
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={inputClass}
                            placeholder="winner-in-the-arena"
                            name="username"
                            required
                        />

                        <label className="font-bold" htmlFor="password" >password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={inputClass}
                            placeholder="da-hl3st-in-d4-r00m"
                            name="password"
                            type='password'
                            required
                        />

                        <button className={button} type="submit" >
                            Login
                        </button>
                    </form>
                </div>
            </div>
*/
