import { Button, FullButton, Card, Input, Select } from "shared/ui"
import React, {useState} from "react"
import { useForm } from 'react-hook-form'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'

const NewProblem = () => {
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
      <Card title="Admin Panel / Manage Problems / New">
          <form onSubmit={handleSubmit(onSubmit)}>
                    <Input 
                        name="problem-title"
                        register={register}
                        placeholder="problem-title-shows-at-the-very-top-you-can-add-#id"
                    />
                    <Input
                        name="problem-type"
                        register={register}
                        placeholder="problem-type-shows-just-underneath-the-title"
                    />
                    <Select
                        defaultValue="choose-from-the-list"
                        name="problem-level"
                        title="problem-level"
                        {...register('language', {})}
                        options={[
                        { value: 'easy', label: 'Easy' },
                        { value: 'medium', label: 'Medium' },
                        { value: 'hard', label: 'Hard' },
                        ]}
                    />
                    <Input
                        name="problem-points"
                        register={register}
                        placeholder="problem-points"
                    />
                    <div className="p-1">
                    <label className="font-medium uppercase" htmlFor="short-description">
                    short-description
                    </label>
                    <textarea name="short-description" className="w-full p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow">the-short-description-will-belong-to-the-collapsible-part-of-the-problem-card</textarea>
                    </div>
                    <div className="p-1">
                    <label className="font-medium uppercase" htmlFor="long-description">
                    long-description
                    </label>
                    <textarea name="long-description" className="w-full h-60 p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow">the-long-description-will-belong-to-the-problem-page-it-supports-markdown</textarea>
                    </div>
                    <Input
                        name="problem-launch-date"
                        register={register}
                        placeholder="ex-2021-09-25T12:34:56"
                    />
                    <Input
                        name="problem-end-date"
                        register={register}
                        placeholder="ex-2021-09-25T14:34:56"
                    />
                    <br/>
                    <h2>Advanced Stuff</h2>
                    <br/>
                    <Input
                        name="problem-stdin"
                        register={register}
                        placeholder="specify-problem-input"
                    />
                    <Input
                        name="problem-expected-output"
                        register={register}
                        placeholder="specify-problem-expected-output"
                    />
                    <Input
                        name="problem-cpu-limit"
                        register={register}
                        placeholder="specify-problem-cpu-limit"
                    />
                    <Input
                        name="problem-memory-limit"
                        register={register}
                        placeholder="specify-problem-memory-limit"
                    />
                    <FullButton type="submit" contained>
                        Add Problem
                    </FullButton>
                </form>
      </Card>
    )
  }
  
  export default NewProblem
  