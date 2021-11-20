import { Button, Input } from 'shared/ui'
import { useForm } from 'react-hook-form'
import { createQuestion } from 'shared/queries'
import { useMutation } from '@apollo/client'
import toast from 'react-hot-toast'

const CreateClarifcation = ({ problem }) => {
  const { register, handleSubmit, reset } = useForm()
  const [submit] = useMutation(createQuestion)
  const onSubmit = data => {
    submit({ variables: { ...data, problem } }).then(response => {
      if (response.data.askQuestion === 'done')
        toast.success('Submitted Successfully')
      else toast.error('Something Went Wrong')
      reset()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex">
      <div className="mr-1" style={{ width: '95%' }}>
        <Input name="content" placeholder="ask-here" register={register} />
      </div>
      <Button className="block float-right mt-9" contained type="submit">
        <i className="fas fa-paper-plane"></i>
      </Button>
    </form>
  )
}

export default CreateClarifcation
